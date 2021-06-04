import requests
import os
import json
import re
import time
from requests.exceptions import HTTPError


class HanspellChecker:

    def __init__(self):
        # we'll use Naver spell checker
        self.base_url = (
            "https://m.search.naver.com/p/csearch/ocontent/util/SpellerProxy"
        )
        self._agent = requests.Session()

    def remove_tag(self, text):
        text = re.sub("<.+?>", "", text, 0, re.I | re.S)
        return text

    def remove_emoji(self, text):
        emoji = re.compile("["
            u"\U0001F600-\U0001F64F"  # emoticons
            u"\U0001F300-\U0001F5FF"  # symbols & pictographs
            u"\U0001F680-\U0001F6FF"  # transport & map symbols
            u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
            u"\U00002500-\U00002BEF"  # chinese char
            u"\U00002702-\U000027B0"
            u"\U0001f926-\U0001f937"
            u"\U00010000-\U0010ffff"
            u"\u2640-\u2642" 
            u"\u2600-\u2B55"
            u"\u200d"
            u"\u23cf"
            u"\u23e9"
            u"\u231a"
            u"\ufe0f"  # dingbats
            u"\u3030"
                        "]+", re.UNICODE)
        return re.sub(emoji, '', text)  

    def correct(self, text):
        """
        This function checks the spelling and grammer of korean text,
        and corrects it.
        """
        if isinstance(text, list):
            result = []
            for idx, item in enumerate(text):
                corrected = self.correct(item)
                result.append(corrected)
                print("[-] {}/{} complete".format(idx+1, len(text)))
            return result

        # Max length of text is 500
        if len(text) > 500:
            return text

        # Remove emoji
        text = self.remove_emoji(text)

        params = {"q": text, "color_blindness": 0}
        # Get response
        success = False
        try_cnt = 0
        while success == False:
            try:
                r = self._agent.get(self.base_url, params=params)
                try_cnt += 1
                res_code = r.status_code
                if res_code != 200:  # response 200 means 'The request has succeeded'
                    if try_cnt >= 3:
                        return text
                    raise HTTPError
            except HTTPError:
                print(
                    "[!] An error occurred while sending the request. error code: {}".format(
                        res_code
                    )
                )
                print("[-] Waiting 5 seconds before resending the request...")
                time.sleep(5)
            else:
                success = True

        r = r.text  # change bytestring to string
        data = json.loads(r)
        html = data["message"]["result"]["html"]

        # Remove html tag in the response
        result = self.remove_tag(html)

        return result

    def correct_and_save(self, filename):
        """
        correct sentences line by line in the file, and save it in a new file(.txt).
        """
        try:
            with open(filename, "r", encoding="utf-8") as f:
                text_list = f.read().split('\n')

        except FileNotFoundError as e:
            print(e)
            return -1
        
        corrected = self.correct(text_list)

        new_filename = os.path.splitext(os.path.basename(filename))[0] + "_corrected.txt"
        with open(new_filename, "w", encoding="utf-8") as f:
            f.write("\n".join(corrected))


if __name__ == "__main__":
    checker = HanspellChecker()
    print(checker.correct("안녕하세영. 자연어처리는 너무어려워용"))
