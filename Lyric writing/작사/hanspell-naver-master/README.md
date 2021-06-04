# hanspell-naver
네이버 맞춤법 검사기를 이용한 문장 교정 라이브러리입니다.

## 필요 라이브러리
- `requests`
- `json`

## 사용법

HanspellChecker의 `correct('교정할 문장')` 메서드로 문장을 교정할 수 있습니다. correct()의 인자로 리스트 타입도 지원합니다.

```python
from HanspellChecker import HanspellChecker


checker = HanspellChecker()

print(checker.correct("안녕하세여. 자연어처리는 넘 어려워용."))

# list 형태의 입력도 가능합니다.
text_list = [
    "솔직히 쟤보다 내가 더 낟다",
    "그러면 안돼지!",
    "맛춤뻡좀지킵시당",
]
print(checker.correct(text_list))
```



`correct_and_save(filename)`을 이용하면 교정된 결과가 파일로 저장됩니다.
교정된 결과 파일은, 원본 파일명 뒤에 `_corrected`가 추가된 .txt 파일입니다.

```python
checker.correct_and_save("test.txt")
```

```text
## test.txt
한국어너무조아요🤣🤣
🥰안녕하세영🥰
내가그린기린그림은 참잘그린기린그림
```

```text
## test_corrected.txt
한국어 너무 좋아요
안녕하세요
내가 그린 기린그림은 참 잘 그린 기린그림
```
