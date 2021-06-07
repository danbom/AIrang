## <h1>AIrang Project<br><br>

<br>**AIrang Project** 는 인공지능을 통해 동요를 작사, 작곡하여 보다 많은 곡을 손쉽고 빠르게 제공하는 서비스입니다. <br><br>

저희는 키즈 컨텐츠의 수요는 늘어나는 반면에, 동요의 다양성이 낮아졌으며 동요를 창작하는 데에 높은 비용이 든다는 배경을 확인하였고, 이에 따라 아이들이 다양한 동요를 즐길 수가 없는 상황을 문제점으로 인식하여 🧐 이를 해결하기 위하여 해당 프로젝트 주제를 선정하였습니다. <br><br>
  
**AIrang Project**를 통해 아이들에게 다양한 동요를 들려줄 수 있으며, 동시에 아동 관련 컨텐츠를 만드는 이들이 동요를 배경음악으로 사용할 때 드는 비용을 감소시켜줄 수 있습니다.<br><br><br>
  
  <img src="https://user-images.githubusercontent.com/52441697/120753513-3d31f980-c546-11eb-913a-5e92837a7709.png" width="70%"><br><br><br>

- **AIrang Project**를 직접 사용해볼 수 있는 주소 🤝 https://airang-project.herokuapp.com/client/index.html
- **AIrang Project**의 시연 영상 :tv: https://youtu.be/OROdh0IuZTo <br><br><br>  

#
<h2>with AIrang you can : <br><br></h2><br>
  
- 😎 **play 버튼** 하나로 인공지능을 통해 많은 동요를 손쉽고 빠르게 작사 작곡할 수 있습니다.<br><br><br>
<img src="https://user-images.githubusercontent.com/52441697/120755666-3bb60080-c549-11eb-94e6-70e8f54dbb4f.png" width="70%"><br><br><br>
- 🎧 **play 버튼**을 누르면 작곡이 시작되고 작곡된 곡이 오디오를 통해 출력됩니다.<br><br><br>
<img src="https://user-images.githubusercontent.com/52441697/120756241-f80fc680-c549-11eb-8fa3-3842153077f3.png" width="70%"><br><br><br>
- ✍ 작곡된 결과물의 길이에 맞추어 **적절한 길이**의 가사를 작사하여 텍스트로 출력합니다.<br><br><br>
 
<h6>⚠️ 유의사항<br><br>
오디오로 작곡된 곡이 끝까지 재생될 때까지 Play 버튼이 비활성화됩니다. <br>
곡이 끝까지 재생된 이후, 다시 Play 버튼을 누를 수 있습니다.<br><br><br><br><br><br><br><br>
  
#
<h2>AIrang DONE List : <br><br></h2><br>
  
> 협업 파트<br>
</br>

- [x] 주제선정 및 자료조사<br><br>
  지도교수님과의 면담 이후, 동요 창작 AI라는 주제를 선정하였습니다.<br>
  주제를 선정하고 다시 지도교수님과 면담을 통해 각자 세부적으로 자료조사할 내용을 선정해 각자 30분 가량의 발표를 하였습니다.

  - 작곡 AI SW
  - 작곡 Open SW, Data Set
  - 작곡 AI 논문
  - 작사 AI 논문
  
  더해서 현존하는 작곡 AI 서비스를 사용하여 팀원들이 각각 노래를 한 곡 씩 창작하여 공유할 수 있도록 하였습니다.<br><br><br>

- [x] 웹 프로토타이핑<br><br>
  웹 프론트 플로우를 볼 수 있는 디자인, 프로토 타입을 Adobe XD를 사용하여 제작하였습니다.<br><br><br>
  
- [x] 웹 페이지 구현<br><br>
  HTML, CSS로 틀을 잡고 React와 NodeJS를 통해 웹 페이지를 구축했습니다.<br>
  작사 결과 출력의 경우, javascript async를 사용하여 서버에서 GPT-3의 결과값을 받고 원하는 파일(들)을 가상 주소로 보내서 출력합니다.<br><br><br><br>
 
  

> 작사 파트<br>
</br>

- [x] 동요 Data Set 수집<br><br>
  구글 검색을 통해 동요 165곡의 가사를 수집하였습니다.<br>
  이후 파랑새 창작 동요회, 한국 동요 작곡가 협회의 홈페이지를 통해 공개된 창작 동요 약 200곡의 가사를 수집하였습니다.<br><br><br>
  
- [x] 동요 keyword 설정<br><br>
  데이터 셋 수집 과정에서 동요 가사의 응집성 등을 위해서는 키워드가 필요하다는 것을 알게 되었습니다.<br>
  이를 위해 수집한 동요 가사 데이터 셋에서의 핵심 키워드를 추출하고자 KRWordRank를 사용하였습니다.<br>
  추출된 핵심 키워드들 중, 명사들을 키워드로 선정하였습니다. <br>
  선정된 명사 키워드들을 자연, 가족, 동물, 계절 및 시간, 사람, 감정 및 감각의 메인 키워드로 분류하였습니다.<br><br><br>

- [x] KRWordRank<br><br> 
  관련 github https://github.com/lovit/KR-WordRank <br><br><br>

- [x] HITS algorithm<br><br><br>

- [x] WordCloud<br><br> 
  추출한 keyword들을 시각화하기 위해 WordCloud를 사용했습니다.<br><br><br>

- [x] KoGPT2<br><br> 
  관련 github 
  - github.com/SKT-AI/KoGPT2<br>
  - github.com/gyunggyung/KoGPT2-FineTuning<br><br><br>
  
- [x] GPT3<br><br> 
  temperature와 frequenctPenalty를 적절하게 조정해 표절율을 0%로 낮췄습니다.<br>
  관련 github https://github.com/shreyashankar/gpt3-sandbox <br><br><br>

> 작곡 파트<br>
</br>

- [x] 동요 Data Set 수집<br><br>
  악보이미지와 동요 음원을 다운받아 182곡의 동요를 midi파일로 변환했습니다.<br>
  이후 182곡의 midi파일을 모델에 학습시킬 수 있도록 각 파일을 NoteSequence로 변환한뒤, tfrecord파일로 변환하였습니다. <br><br><br>
  
 - [x] Google Magenta <br><br>
  마젠타는 구글에서 제공하는 오픈 소스 머신 러닝 라이브러리로 음악, 이미지, 그림을 생성하는 딥러닝 알고리즘을 제공합니다.<br>
  작곡에는 RNN 중 LSTM language 모델을 이용하여 작곡을 하는 하나의 노트(음표)를 생성할 때 이전 멜로디 구성을 반영하여 음악의 특성을 반영합니다.<br>
  LSTM은 네트워크가 정보를 오랜 시간동안 기억하는 모델이기 때문에 연속된 데이터의 구조인 음악 작곡에 알맞다고 판단되어 동요 작곡에 알맞다고 판단되었습니다.<br>
  관련 Github - https://github.com/magenta/magenta<br><br><br>
  
 - [x] Magenta - MelodyRnn<br><br>
  tfrecord 형식으로 변환된 동요를 MelodyRnn모델에 학습시켰습니다.<br>
  eval_ratio=0.1로 설정하여 train_data/eval_data를 나누었습니다.<br>
  Input으로 num_steps, primer_melody(첫음 이나 midi), temperature 등을 넣어주어 다양한 멜로디 결과물에 대한 시도를 할 수 있었습니다.<br><br><br>
  
 - [x] Magenta - ImprovRnn<br><br>
  MelodyRnn에서 코드 진행이 추가된 모델로, 생성하는 step마다 input으로 주어진 코드에 따라 멜로디 음을 생성하는 모델입니다.<br>
  코드의 진행에는 1000개 이상의 곡을 학습한 Chord Pitches Improv configuration을 사용하였습니다.<br>
  Input으로 backing_chord(eg.CCGCCCGC - 산토끼의 코드진행)를 입력해주었는데, 동요에서 주로 사용되는 코드진행을 입력하여 코드진행에 따른 동요결과물을 출력하였습니다.<br><br><br>
  
  - [x] Magenta-js <br><br>
  웹페이지 생성을 위해 Magenta-js를 통해 javascript로 웹에서 작곡을 구현하였습니다.<br>
  관련 Github - https://github.com/magenta/magenta-js<br><br><br>
  
   - [x] 작곡의 Validation <br><br>
  작사와 마찬가지로 창작AI의 결과물에 대한 validation을 표절의 여부에 따라 확인하였습니다.<br>
  Magenta 모델에서 음을 생성하는 경우의 수와 이 음의 구성이 기존의 음의 구성과 3마디이상 일치할 확률을 구했을 때, 0%에 수렴하는 것을 기반으로 validation을 진행하였습니다.<br><br><br>
  

#
<h2>AIrang project architecture : <br><br></h2><br>
<img src="https://user-images.githubusercontent.com/52441697/120763934-addf1300-c552-11eb-9cbd-fcbe546debae.png" width="70%"><br><br><br>
1️⃣   &nbsp;&nbsp;&nbsp;&nbsp;AIrang의 시스템은 사용자가 웹에서 동요의 작곡 및 작사를 요청하면서 시작됩니다. <br><br>
2️⃣   &nbsp;&nbsp;&nbsp;&nbsp;이 요청을 관리자가 받으면 작곡은 마젠타에, 작사는 GPT3에 각각 input을 보내어 결과물을 받습니다. <br><br>
3️⃣   &nbsp;&nbsp;&nbsp;&nbsp;이때, 작곡은 step과 반주 코드를 입력하며, 작사는 task description과 예제, 그리고 prompt를 입력합니다. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여기서 step은 반주 코드 하나가 담당하는 스텝의 수로, 1박에 4개의 step으로 구성되어 있기 때문에 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;총 4박을 하나의 반주 코드가 커버하게 됩니다. <br><br> 
4️⃣   &nbsp;&nbsp;&nbsp;&nbsp;작곡은 MIDI로 결과를 전달해주며, GPT3는 작사한 결과를 TXT로 전달해줍니다. <br><br>
5️⃣   &nbsp;&nbsp;&nbsp;&nbsp;이를 받아 관리자가 다시 사용자에게 이 창작 결과를 전달하는 것이 전체적인 시스템의 구조입니다. <br><br><br><br><br><br><br>


#
<h2>our Award Performance : <br><br></h2><br>

- 🥉 창업 경진 대회 장려상
- 🥉 포스터 세션 장려상<br><br><br><br><br>

#
<h2>Contact Us : <br><br></h2><br>

* 김선우
  - ✉ 0725sunwoo@ewhain.net
  - 🖥️ https://sunwoo-725.tistory.com/<br><br>
* 김채윤
  - ✉ yunyuno3o@ewhain.net
  - 🖥️ https://yunyuno3o.tistory.com/<br><br>
* 민은영
  - ✉ bear0369@ewhain.net
  - 🖥️ https://blog.naver.com/bear0369<br><br>
* 정혜민
  - ✉ heyhmin@ewhain.net
  - 🖥️ https://codeinleonis.tistory.com/<br><br><br><br><br>


















<!-- #### :book: 참고
* [음성 데이터셋](https://github.com/danbom/emotiontts_open_db)
* [자연어 처리](https://github.com/danbom/soynlp)
* [키워드 추출을 위한 KRWordRank](https://github.com/lovit/KR-WordRank)
* [마르코프 체인 작곡](https://github.com/danbom/MarkovMusic)
* [마젠타 작곡(RNN) 1](https://github.com/magenta/magenta)
* [마젠타 작곡(RNN) 2](https://colab.research.google.com/notebooks/magenta/hello_magenta/hello_magenta.ipynb)
* [작사 알고리즘 참고](https://github.com/danbom/hiphop)
* [작사 알고리즘 참고 2](https://github.com/forus-ai/KoGPT2-Lyrics-Generation-FineTuning-Version1)

### 2020 졸업프로젝트 진행 과정<br>
#### 📅 10.16 프로토타입 만들기 시작<br>
* Adobe XD 활용해 구현<br>
  - [1018 Adobe XD](https://xd.adobe.com/view/c1ddf3a1-8039-43de-966e-4c6cf48756b6-948e/)
#### 📅 10.22 작곡소프트웨어 발표<br>
* 작곡소프트웨어.pdf
#### 📅 10.23 1차 멘토링 및 사업계획서 작성, 프로토타입 장면 연결 시작<br>
#### 📅 10.24 프로토타입 1차 완성<br>
* Adobe XD 활용해 구현<br>
  - [1024 Adobe XD](https://xd.adobe.com/view/6d4ea879-0b66-4ed4-bbe9-1455d4917689-381d/?fullscreen&hints=off)
#### 📅 10.30 사업계획서 제출 및 중간발표 자료(+ 창업경진대회 본선진출)<br>
#### 📅 11.03 중간발표<br>
* [발표자료](https://github.com/danbom/capstonedesign/blob/main/airang.pdf)
#### 📅 11.06 창업 경진 대회 발표<br>
* 장려상 수상
#### 📅 11.13 추가 데이터셋, 알고리즘 회의<br>
* 작사 데이터셋(은영,혜민) [관련 스프레드시트](https://docs.google.com/spreadsheets/d/1ot7RgS7kaz1GI-OhT3EXO5I805EZs1rsqfFV1MLsa60/edit?usp=sharing)
* 작곡 데이터셋(선우,채윤) [관련 스프레드시트](https://docs.google.com/document/d/1D_6VYXj-haVLZm-3O4KSS6XG96-zDQht/edit)
* 알고리즘 [관련 스프레드시트](https://docs.google.com/spreadsheets/d/1LDNTvfOhnJw_W6Rfeia6OdszMlUh3J3pT3UqdmKehQ0/edit?usp=sharing)
#### 📅 11.20 작사, 작곡 회의<br>
* [관련 스프레드시트](https://docs.google.com/spreadsheets/d/1LDNTvfOhnJw_W6Rfeia6OdszMlUh3J3pT3UqdmKehQ0/edit#gid=1287511031)
#### 📅 11.27 2차 멘토링<br>
#### 📅 12.03 AIrang 깃허브 리모델링<br>
#### 📅 12.08 AIrang 기말발표 <br>
#### 📅 12.10 AIrang 최종 프로토타입 완성 <br>
* Adobe XD 활용해 구현<br>
  - [1210 Adobe XD](https://xd.adobe.com/view/426227ad-93fa-4798-9171-028710f34c23-1731/?fullscreen&hints=off)
#### 📅 12.28 방학 중 프로젝트 일정 계획 및 1차 기술 확정 <br>
* [관련 스프레드시트](https://docs.google.com/spreadsheets/d/1qB-PMVqswNSAqiWbsIZ2ohPrGPZt5f3bQUlnmdW-W8E/edit#gid=0)
 -->
