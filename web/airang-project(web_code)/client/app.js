const theme = '어린이들이 좋아하는 동요 베스트 가사\n\n';
const prompts = [
  "input: 봄볕\noutput: 파란잔디가 핀 봄언덕에 봄볕이 딩군다 잔디를 사르르 쓰다듬어 내리는 바람\n\ninput: 봄비\noutput: 봄비는 소곤소곤 노래하며 내려와 예쁜 꽃잎 피우고 새싹 돋게 하지요\n\ninput: 봄바람\noutput: 봄바람이 살랑살랑 부는 아침에 하얀 꽃망울이 송이송이 맺혔어요\n\ninput: 봄빛\noutput: ",
  "input: 해님\noutput: 어서 일어나세요 방긋 웃는 웃음쟁이 해님 엄마 아빠도 일어나세요 해님이 인사해요 기지개를 쭉쭉 켜요 쑥쑥 자라는 우리들 행복한 아침 인사해요\n\ninput: 햇살\noutput: 아침 햇살이 찾아들면 가슴을 펴고 햇살을 흔들며 노래하는 나무 오늘은 날씨가 좋아요 햇살이 눈부셔요\n\ninput: 햇빛\noutput: ",
  "input: 꽃\noutput: 나는 꽃들의 천사가 되어 정다운 얘기 나누며 예쁜 꽃처럼 고운 마음으로 사랑의 꽃 뿌려요\n\ninput: 초롱꽃\noutput: 산 속 마을에 밤깊어 별내리는 뜨락에 예쁜 초롱꽃 한 송이 호롱불을 밝혀요\n\ninput: 꽃망울\noutput: 하늘 위에 피는 별처럼 미소를 걸고 있는 꽃망울 내게 전해요\n\ninput: 꽃잎\noutput: ",
  "input: 친구\noutput: 나는 친구의 고운 눈빛을 가만히 바라보았지 초롱 초롱 빛나는 꿈 간직한 나의 친구야\n\ninput: 친구야\noutput: 친구야 햇살이 따사로운 날이면 내가 너에게 구름이 되어줄게 친구야 보슬보슬 비오는 날이면 내가 너에게 우산이 되어줄게\n\ninput: 친구\noutput: ",
  "input: 자연의 향기\noutput: 꽃으로 뛰노는 바다 자연의 향기가 샘솟는 푸른 나라\n\ninput: 자연의 노래\noutput: 우리들의 웃음이 햇살로 꽃피는 들판 자연의 노래가 샘솟는 푸른 나라\n\ninput: 자연의 사랑\noutput: 향긋한 꽃들이 노래해요 팔랑팔랑 나비들이 춤을 춰요 자연의 사랑을 느끼며 모두 함께 즐겨요\n\ninput: 자연의 행복\noutput: ",
  "input: 아침 노래\noutput: 산새가 아침을 노래하네 들새가 아침을 노래하네\n\ninput: 이른 아침\noutput: 이슬비 내리는 이른 아침에 우산 셋이 나란히 걸어갑니다 파란 우산 검정 우산 찢어진 우산\n\ninput: 아침 햇빛\noutput: 봄을 맞이하는 아침 햇빛은 따사로워요 여름을 맞이하는 아침 햇빛은 싱그러워요\n\ninput: 아침 사랑\noutput: ",
  "input: 달님\noutput: 달님은 영창으로 은구슬 금구슬을 보내는 이 한밤 잘 자라 우리 아가\n\ninput: 달빛\noutput: 어제밤엔 달빛도 아빠의 웃음처럼 나의 창에 기대어 포근히 날 재워줬어요\n\ninput: 둥근 달\noutput: 달 달 무슨 달 쟁반같이 둥근 달 어디 어디 떳나 남산 위에 떳지\n\ninput: 새벽 달\noutput: ",
  "input: 아기 곰\noutput: 동그란 눈에 까만 작은 코 하얀 털옷을 입은 예쁜 아기 곰 언제나 너를 바라보면서 작은 소망 얘기하지\n\ninput: 아기 곰\noutput: 너의 곁에 있으면 나는 행복해 어떤 비밀이라도 말할 수 있어 까만 작은 코에 입을 맞추면 수줍어 얼굴을 붉히는 예쁜 아기 곰\n\ninput: 아기 곰\noutput: ",
  "input: 사랑\noutput: 사랑해요 이 한마디 참 좋은 말 우리 식구 자고 나면 주고받는 말\n\ninput: 온종일\noutput: 이 말이 좋아서 온종일 일 맛나지요 이 말이 좋아서 온종일 가슴이 콩닥콩닥 뛴데요\n\ninput: 좋은 말\noutput: 사랑해요 이 한마디 참 좋은 말 나는 나는 이 한 마디가 정말 좋아요\n\ninput: 사랑\noutput: ",
  "input: 밝은\noutput: 행운을 가져다 준다는 수줍은 얼굴의 미소 빛처럼 밝은 마음으로 너를 닮고 싶어\n\ninput: 파란\noutput: 산도 들도 나무도 파란 잎으로 파랗게 덮인 속에서 파아란 하늘보고 자라니까요\n\ninput: 하얀\noutput: 산도 들도 지붕도 하얀 눈으로 하얗게 덮인 속에서 깨끗한 마음으로 자라니까요\n\ninput: 밝은\noutput: ",
  "input: 꿈나라\noutput: 어젯밤 꿈나라에 작은 코끼리가 춤을 추었고 크레파스 병정들은 나뭇잎을 타고 놀았죠\n\ninput: 파란나라\noutput: 파란나라를 보았니 꿈과 사랑이 가득한 맑은 강물이 흐르는 울타리가 없는 나라\n\ninput: 파란나라\noutput: 나 파랑새를 알아요 저 무지개 넘어 파란 하늘에 파란나라 있나요\n\ninput: 꿈나라\noutput: ",
  "input: 꿈나라\noutput: 어젯밤 꿈나라에 작은 코끼리가 춤을 추었고 크레파스 병정들은 나뭇잎을 타고 놀았죠\n\ninput: 새파란나라\noutput: 우리가 한번 해봐요 온세상 모두 손잡고 새파란 마음 한마음 새파란나라 지어요 우리 손으로 지어요 어린이 손에 주세요\n\ninput: 꿈나라\noutput: ",
  "input: 푸른하늘\noutput: 마음을 열어 하늘을 보라 넓고 높고 푸른하늘 우리들은 새싹들이다\n\ninput: 파란하늘\noutput: 파란하늘 드리운 푸른 언덕에 아기 염소 여럿이 풀을 뜯고 놀아요 해처럼 밝은 얼굴로\n\ninput: 솜사탕\noutput: 나뭇가지에 실처럼 날아든 솜사탕 하얀 눈처럼 희고도 깨끗한 솜사탕\n\ninput: 푸른 하늘\noutput: ",
  "input: 해\noutput: 해가 반짝 곱게 피어나면 너무나 기다렸나 봐 신나는 친구들\n\ninput: 햇살\noutput: 탐스런 나뭇잎만큼 가득 열린 참새들 열린 참새만큼 고운노래 들려주는 나무 하늘에 그려지는 오선지엔 햇살 한 줌 내 노래 한 가락\n\ninput: 햇살\noutput: 햇살을 흔들며 노래하는 나무\n\ninput: 햇살\noutput: ",
  "input: 숲 속\noutput: 숲 속을 걸어요 산새들이 속삭이는 꽃향기가 그윽한 햇님도 쉬었다 가는 다람쥐가 넘나드는 길\n\ninput: 숲 속\noutput: 정다운 얼굴로 우리 모두 맑은 바람 솔바람이는 숲 속을 걸어요\n\ninput: 숲 속\noutput: 달님도 쉬었다 가는 산노루가 넘나드는 길 웃음띤 얼굴로 우리 모두 숲속을 걸어요\n\ninput: 숲 속\noutput: ",
  "input: 색종이\noutput: 색종이를 곱게 접어서 물감으로 예쁘게 색칠하고 알록달록 오색실 꼬리 달아 비행기를 만들자\n\ninput: 바닷가\noutput: 파란 바닷물은 꽃무늬 만드네 모래마저 금같은 바닷가에서\n\ninput: 희망\noutput: 희망과 사랑을 심어주면서 아하 신나게 달린다 귀여운 꼬마 자동차 붕붕\n\ninput: 희망\noutput: ",
  "input: 구름\noutput: 푸른꿈이 자란다 곱고 고운꿈 두리둥실 떠간다 구름이 되어\n\ninput: 구름모자\noutput: 구름모자 썼네 나비같이 훨훨 날아서 살금살금 다가가서 구름모자 벗겨오지\n\ninput: 구름\noutput: 꿈 속에 나는 날개 달고 구름보다 더 높이 올라 올라 무지개 동산에서 놀고 갔지요\n\ninput: 구름\noutput: ",
  "input: 작은별\noutput: 반짝반짝 작은별 아름답게 비치네 동쪽하늘에서도 서쪽하늘에서도 반짝반짝 작은 별 아름답게 비치네\n\ninput: 별님\noutput: 햇님 되자 달님 되자 별님이 되자 너른세상 불을 밝힐 큰빛이 되자 무지개 빛깔 아름다운꿈 모두 우리 차지다 너와 나 함께 우리가 되어 힘차게 나가자\n\ninput: 별님\noutput: ",
  "input: 다람쥐\noutput: 나는 숲 속의 음악가 조그만 다람쥐 아주 익숙한 솜씨로 바이올린 켜지요\n\ninput: 다람쥐\noutput: 산골짝에 다람쥐 아기 다람쥐 도토리 점심가지고 소풍을 간다\n\ninput: 다람쥐\noutput: 쪼로로롱 산새가 노래하는 숲 속에 예쁜 아기 다람쥐가 살고 있었어요\n\ninput: 다람쥐\noutput: ",
  "input: 친구\noutput: 나는 행복해 정말 행복해 내 친구와 함께라면\n\ninput: 친구\noutput: 솔솔 바람부는 뒷동산에 동네 친구 모두 모여서 파란 하늘 향해 날리면 새처럼 날아간다 하늘 끝까지 날아라 높이 더 높이\n\ninput: 친구\noutput: 한줄기의 따스한 햇살 받으며 희망으로 가득한 나의 친구야\n\ninput: 친구\noutput: ",
  "input: 눈\noutput: 펄펄 눈이 옵니다 바람 타고 눈이 옵니다 하늘나라 선녀님들이 송이송이 하얀 솜을 자꾸자꾸 뿌려줍니다 자꾸자꾸 뿌려줍니다\n\ninput: 흰 눈\noutput: 흰 눈 사이로 썰매를 타고 달리는 기분 상쾌도 하다 종이 울려서 장단 맞추니 흥겨워서 소리 높여 노래부른다 종소리 울려라\n\ninput: 흰 눈\noutput: ",
  "input: 눈꽃송이\noutput: 송이송이 눈꽃송이 하얀꽃송이 하늘에서 내려오는 하얀꽃송이 나무에도 들판에도 동구밖에도 골고루 나부끼네 아름다워라\n\ninput: 눈\noutput: 나는 눈이 좋아서 꿈에 눈이 오나 봐 온 세상이 모두 하얀 나라였지 어젯밤 꿈 속에\n\ninput: 눈꽃송이\noutput: ",
  "input: 노오란 꽃\noutput: 개나리 노오란 꽃 그늘 아래 가지런히 놓여 있는 꼬까신 하나 아기는 살짝 신벗어 놓고 맨발로 한들 한들 나들이 갔나 가지런히 가다리는 꼬까신 하나\n\ninput: 아카시아 꽃\noutput: 얼굴 마주 보며 생긋 아카시아 꽃 하얗게 핀 먼 옛날에 과수원길\n\ninput: 노오란 꽃\noutput: ",
  "input: 하얀 꽃\noutput: 하얀 꽃 이파리 눈송이처럼 날리네 향긋한 꽃냄새가 실바람타고 솔솔\n\ninput: 예쁜 꽃\noutput: 깊고 작은 산골짜기 사이로 맑은 물 흐르는 작은 샘터에 예쁜 꽃들 사이에 살짝 숨겨진 이슬 먹고 피어난 네잎 클로버\n\ninput: 하얀 꽃\noutput: ",
  "input: 봄나들이\noutput: 나리나리 개나리 입에따다 물고요 병아리떼 쫑쫑쫑 봄나들이 갑니다\n\ninput: 봄바람\noutput: 봄바람에 꽃잎도 방긋방긋 웃으며 참새도 짹짹짹 노래하며 춤춘다\n\ninput: 봄바람\noutput: 솔솔 부는 봄바람 쌓인 눈 녹이고 잔디밭엔 새싹이 파릇파릇 나고요\n\ninput: 봄바람\noutput: "
];

function getLyricRandom() {
  return theme + prompts[Math.floor(Math.random() * prompts.length)];
}

const chords = [
   [ 'D', 'Bm', 'D', 'G', 'A7', 'G', 'D', 'D', 'Bm', 'A', 'D', 'G', 'D', 'Bm', 'A7', 'G', 'D', 'A', 'D', 'A7', 'D' ],
   [ 'C', 'C', 'G', 'G', 'C', 'C', 'G', 'C' ],
   [ 'C', 'F', 'C', 'C', 'G', 'C', 'F', 'G', 'C' ],
   [ 'C', 'C', 'C', 'G', 'C7', 'F', 'G', 'C' ],
   [ 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'Bm', 'C7', 'F', 'F', 'F', 'C' ],
   [ 'D', 'D', 'A7', 'A7', 'D', 'D', 'D', 'D', 'D', 'D', 'A7', 'A7', 'C', 'C', 'C', 'G', 'C', 'C', 'G7', 'C'],
   [ 'F', 'F', 'F', 'Bm', 'F', 'F', 'C7', 'F' ],
   [ 'C', 'C', 'G7', 'G7', 'C', 'C', 'G7', 'G7', 'F',  'C', 'F', 'F', 'F', 'C', 'F', 'C' ],
   [ 'C', 'G7', 'C', 'C', 'C', 'G7', 'F', 'G7', 'C', 'F', 'C', 'G7', 'C', 'G7', 'C', 'C', 'G7', 'F', 'G7' , 'C' ],
   [ 'F', 'Bm', 'F', 'C', 'F', 'F', 'Bm', 'F', 'C', 'C7', 'F', 'F7', 'Bm', 'F', 'C', 'C7', 'F', 'F', 'C7', 'F' ],
   [ 'F', 'Bm', 'F', 'C7', 'F', 'F', 'F', 'F', 'C7' , 'F', 'F', 'F', 'F', 'Bm', 'F', 'C', 'C7', 'F', 'Gm', 'F', 'C7', 'F'],
   [ 'F', 'Bm', 'C', 'F', 'F', 'Bm', 'C', 'C', 'F', 'Bm', 'Bm', 'C',  'F', 'F', 'Bm', 'C', 'C', 'C', 'F' ],
   [ 'F', 'F', 'F', 'Bm', 'Bm', 'Bm', 'Bm', 'Bm', 'F', 'F', 'F', 'Bm', 'Bm', 'F', 'C7', 'F', 'F', 'F', 'F', 'F', 'Bm', 'Bm', 'F', 'C', 'F', 'F', 'B', 'B', 'Bm', 'Bm', 'C7', 'F' ],
   [ 'C', 'G7', 'C', 'G', 'C', 'C', 'G7', 'C', 'G7', 'C', 'G', 'C', 'B7', 'E', 'G', 'D', 'G', 'D', 'G', 'G7' ],
   [ 'F', 'F', 'F', 'F', 'C7', 'F', 'F', 'C', 'F', 'F', 'C7', 'F' ],
   [ 'F', 'F', 'Bm', 'C7', 'F', 'F', 'Bm', 'C7', 'F', 'F', 'C7', 'C7', 'F', 'F', 'C7', 'C7', 'F', 'F', 'Bm', 'F', 'C7', 'F', 'F', 'C7', 'C7', 'F', 'F', 'C7', 'C7', 'C7', 'F', 'F' ],
   [ 'D', 'A7', 'D', 'D', 'A7', 'D', 'D', 'A', 'D' ],
   [ 'C', 'F', 'G', 'C', 'C', 'G', 'C', 'G7', 'F', 'C', 'G7', 'G7', 'C', 'C', 'C', 'F', 'C', 'F', 'C', 'C', 'F', 'C', 'F', 'C' ],
   [ 'C', 'F', 'G7', 'C', 'Am7', 'Dm7', 'G7', 'C', 'C', 'F', 'D7', 'G', 'G7', 'C', 'F', 'G', 'C', 'C', 'Dm7', 'G', 'G7', 'C', 'C', 'F', 'G', 'G7', 'C' ],
   [ 'F', 'C', 'F', 'C7', 'F', 'C', 'F', 'C', 'F', 'F', 'C', 'F', 'C7', 'F', 'C', 'F', 'C', 'F' ],
   [ 'A', 'D', 'B7', 'E', 'A', 'D', 'E7', 'A', 'D', 'A', 'D', 'E', 'A', 'D', 'A', 'E7', 'A', 'A', 'D', 'D', 'E', 'A', 'D', 'E7', 'A' ],
   [ 'G', 'C', 'A7', 'D7', 'G', 'C', 'D', 'D7', 'G', 'C', 'G', 'Em', 'A', 'D7', 'G', 'B', 'Em', 'A', 'D7', 'G' ],
   [ 'C', 'C', 'F', 'C', 'F', 'C', 'G7', 'C', 'G7', 'C', 'F', 'G7', 'C', 'F', 'G7', 'C' ],
   [ 'C', 'F', 'C', 'G7', 'C', 'C', 'F', 'C', 'G7', 'C', 'C', 'F', 'G7', 'C' ],
   [ 'C', 'C', 'G7', 'C', 'C', 'C', 'G7', 'G7', 'C', 'C', 'G', 'G', 'C', 'G7', 'C' ],
   [ 'F', 'Bm', 'F', 'C7', 'F', 'Bm', 'F', 'C', 'F', 'Bm', 'F', 'C7', 'F', 'Bm', 'F', 'G7', 'C7', 'F', 'Bm', 'F', 'C', 'F', 'Bm', 'F', 'C7', 'F' ],
   [ 'C', 'F', 'C', 'G7', 'C', 'F', 'C', 'G7', 'C', 'G7', 'G7', 'C', 'C', 'F', 'C', 'G7', 'C' ],
   [ 'C', 'C', 'F', 'G7', 'C', 'F', 'C', 'G', 'C', 'G', 'C', 'F', 'G', 'C', 'F', 'G7', 'C' ],
   [ 'C', 'C', 'G7', 'C', 'C', 'C', 'G7', 'C', 'F', 'C', 'G7', 'C', 'F', 'C', 'G7', 'C' ],
   [ 'F', 'C', 'Bm', 'C', 'F', 'C', 'F', 'C', 'F', 'Bm', 'F', 'C7', 'F', 'C', 'F', 'C', 'F' ],
   [ 'C', 'G7', 'G7', 'C', 'C', 'F', 'C', 'G7', 'C', 'C', 'Dm', 'G7', 'C', 'C', 'C7', 'F', 'G', 'C' ],
   [ 'F', 'C7', 'C7', 'F', 'F7', 'Bm', 'F', 'C7', 'F' ],
   [ 'C', 'G7', 'C', 'G7', 'C', 'G7', 'F', 'G7', 'C', 'F', 'C', 'F', 'C', 'G7', 'C', 'G7', 'C', 'G7', 'C', 'G7', 'F', 'G7', 'C' ]
];

function getChordsRandom() {
  return chords[Math.floor(Math.random() * chords.length)];
}

// import * as OpenAI from 'https://cdn.jsdelivr.net/npm/openai-api@1.1.2/index.js'
class OpenAI {
    constructor(api_key) {
        this._api_key = api_key;
    }

    _safe_cast(number) {
        return isNaN(Number(number)) ? null : Number(number);
    }

    _construct_parameter(name, value) {
        return (typeof value === 'undefined' || value === null) ? null : { [name]: value };
    }

    _send_request(opts) {
        const url = `https://api.openai.com/v1/engines/davinci/completions`
        const reqOpts = {
            headers: {
                'Authorization': `Bearer ${this._api_key}`,
                'Content-Type': 'application/json'
            }
        };
        const data = Object.assign({},
            this._construct_parameter("prompt", opts.prompt),
            this._construct_parameter("stream", opts.stream),
            this._construct_parameter("stop", opts.stop),
            this._construct_parameter("max_tokens", this._safe_cast(opts.maxTokens)),
            this._construct_parameter("temperature", this._safe_cast(opts.temperature)),
            this._construct_parameter("top_p", this._safe_cast(opts.topP)),
            this._construct_parameter("presence_penalty", this._safe_cast(opts.presencePenalty)),
            this._construct_parameter("frequency_penalty", this._safe_cast(opts.frequencyPenalty)),
            this._construct_parameter("best_of", this._safe_cast(opts.bestOf)),
            this._construct_parameter("n", this._safe_cast(opts.n)),
            this._construct_parameter("logprobs", this._safe_cast(opts.logprobs)),
            this._construct_parameter("echo", opts.echo),
        );
        return axios.post(url, data, reqOpts);
    }

    complete(opts) {
        return this._send_request(opts);
    }

    encode(str) {
        // This method is no longer supported in Node>=v14. See
        return Promise.resolve(new Array(2047).fill(""));
    }
}

//const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
//const openai = new OpenAI(OPENAI_API_KEY);

// Mindless Improv Begin
// Number of steps to play each chord.
const STEPS_PER_CHORD = 16;
const STEPS_PER_PROG = 4 * STEPS_PER_CHORD;

// Number of times to repeat chord progression.
// NUM_REPS = 4;
const NUM_REPS = 1;
//import * as mm from '@magenta/music';
// Set up Improv RNN model and player.
const model = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv');
const playerCore = new core.SoundFontPlayer('https://storage.googleapis.com/download.magenta.tensorflow.org/soundfonts_js/salamander');
const playerMm = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/salamander');
//
var playing = false;

// Current chords being played.
var currentChords = getChordsRandom()

// Play when play button is clicked.
document.getElementById('play').onclick = () => {
  playing = true;
  document.getElementById('play').disabled = true;
  currentChords = getChordsRandom()
  mm.Player.tone.context.resume();
  playerMm.stop();
  playOnce();
}

// Initialize model then start playing.
model.initialize().then(() => {
  document.getElementById('message').innerText = 'Done loading model.'
  document.getElementById('play').disabled = false;
});

// Sample over chord progression.
const playOnce = () => {
  const chords = currentChords;

  // Prime with root note of the first chord.
  const root = mm.chords.ChordSymbols.root(chords[0]);
  const seq = {
    quantizationInfo: {stepsPerQuarter: 4},
    notes: [],
    totalQuantizedSteps: 1
  };

  document.getElementById('message').innerText = 'Improvising over: ' + chords;
  model.continueSequence(seq, currentChords.length * STEPS_PER_CHORD - 1, 1.1, chords)
    .then((contSeq) => {
      // Add the continuation to the original.
      contSeq.notes.forEach((note) => {
        note.quantizedStartStep += 1;
        note.quantizedEndStep += 1;
        seq.notes.push(note);
      });

      const roots = chords.map(mm.chords.ChordSymbols.root);
      for (var i=0; i<currentChords.length; i++) {
        // Add the bass progression.
        seq.notes.push({
          instrument: 1,
          program: 32,
          pitch: 36 + roots[i],
          quantizedStartStep: i*STEPS_PER_CHORD,
          quantizedEndStep: i*STEPS_PER_CHORD + STEPS_PER_CHORD
        });
      }

      // Set total sequence length.
      seq.totalQuantizedSteps = currentChords.length * STEPS_PER_CHORD;

      // run openAi GPT3
      /*
      (async () => {
          const gptResponse = await openai.complete({
              engine: 'davinci',
              prompt: getLyricRandom(),
              maxTokens: Math.floor(seq.totalQuantizedSteps / 5 * 3),
              temperature: 0.3, // 0.5
              frequencyPenalty: 0.4 // 0.2
          });

          openai.encode(gptResponse).then((result) => {
            console.log(gptResponse.data['choices'][0]['text']);
            console.log("Number of tokens for string:" + gptResponse.data['choices'][0]['text'].length);
            console.log("maxTokens:" + Math.floor(seq.totalQuantizedSteps / 5 * 3));

            // text replacing
            const reg = /input: .*\noutput: /gi
            const reg2 = /\n\n/gi
            const reg3 = /i.*|o.* /gi // edit white space
            var replaced = gptResponse.data['choices'][0]['text'].replace(reg, '');
            var replaced2 = replaced.replace(reg2, '\n')
            var replaced3 = replaced2.replace(reg3, '')

            document.getElementById('lyric').innerText = chords + '\n\n' + replaced3;
          });
      })();
      */

      // Play it!
      playerMm.start(seq, 120).then(() => {
        playing = false;
        document.getElementById('play').disabled = false;
        document.getElementById('message').innerText = 'Change chords and play again!';
      });
    })
}





/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MODEL = 'a1';
const NUM_MODEL_FILES = 99975;
const FILE_PREFIX = 'https://magentadata.storage.googleapis.com/piano_transformer/midi/';

 // Update this if the format we store the data into local storage has changed.
const STORAGE_VERSION = '0.0.2';

const STORAGE_KEYS = {FAVES: 'faves', VERSION: 'data_version'};
const EVENTS = {
  START: 'start', COMPLETE: 'complete',
  NEXT: 'next', PREVIOUS: 'previous',
  FAVE: 'fave', UNFAVE: 'unfave',
  SAVE:'save'};

const allData = [];  // [ {path, fileName, sequence} ]
let currentSongIndex;
let secondsElapsed, progressInterval;
const canvas =  new p5(sketch, document.querySelector('.canvas-container'));
const HAS_LOCAL_STORAGE = typeof(Storage) !== 'undefined';

// FML, these p5 canvases are async?
setTimeout(init, 200);

function init() {
  // Event listeners.
  document.getElementById('btnPlay').addEventListener('click', playOrPause);
  document.getElementById('btnFave').addEventListener('click', faveOrUnfaveSong);
  document.getElementById('btnPlaylist').addEventListener('click', togglePlaylist);
  document.getElementById('btnSave').addEventListener('click', save);
  document.getElementById('btnHelp').addEventListener('click', toggleHelp);
  document.getElementById('btnCloseHelp').addEventListener('click', toggleHelp);
  document.getElementById('btnShare').addEventListener('click', toggleShare);

  document.getElementById('btnNext').addEventListener('click', () => {
    tagClick(EVENTS.NEXT, true);
    nextSong()
  });
  document.getElementById('btnPrevious').addEventListener('click', () => {
    tagClick(EVENTS.PREVIOUS, true);
    previousSong();
  });

  const hash = window.location.hash.substr(1).trim();
  let initialMidi;
  if (hash !== '') {
    const parts = hash.split('_');  // [model, filename];
    initialMidi = `${FILE_PREFIX}${parts[0]}/${parts[1]}`;
  }

  getSong(initialMidi).then(() => changeSong(0, true));

  // If we don't have local storage, we don't have playlists.
  if (!HAS_LOCAL_STORAGE) {
    document.getElementById('btnFave').hidden = true;
    document.getElementById('btnPlaylist').hidden = true;
  } else {
    // Check if we have to nuke the playlists because they're in the wrong format.
    const version = getFromLocalStorage(STORAGE_KEYS.VERSION);
    if (version !== STORAGE_VERSION) {
      window.localStorage.clear();
      saveToLocalStorage(STORAGE_KEYS.VERSION, STORAGE_VERSION);
    }
  }
}

async function getSong(path) {
  if (!path) {
    path = getRandomMidiFilename();
  }
  const songData = {};
  allData.push(songData);
  songData.path = path;
  songData.fileName = songData.path.replace(`${FILE_PREFIX}${MODEL}/`, '');
  const ns = await core.urlToNoteSequence(path);
  const quantized = core.sequences.quantizeNoteSequence(ns, 4);
  songData.sequence = quantized;
  return quantized;
}

/*
 * Event listeners.
 */
function playOrPause() {
  const state = playerCore.getPlayState();
  if (state === 'started') {
    pausePlayer();
  } else {
    startPlayer();
  }
}

function faveOrUnfaveSong(event) {
  const btn = event.target;
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    tagClick(EVENTS.UNFAVE, true);
    removeSongFromPlaylist(currentSongIndex);
  } else {
    tagClick(EVENTS.FAVE, true);
    btn.classList.add('active');
    addSongToPlaylist(currentSongIndex);
  }

  if (document.querySelector('.playlist').classList.contains('showing')) {
    refreshPlayListIfVisible();
  }
}

function save() {
  tagClick(EVENTS.SAVE);
  const song = allData[currentSongIndex];
  window.saveAs(
    new File([window.core.sequenceProtoToMidi(song.sequence)],
    song.fileName));
}

function togglePlaylist(event) {
  // If the share dialog is open, close it.
  document.querySelector('.share').classList.remove('showing');
  document.querySelector('#btnShare').classList.remove('active');

  event.target.classList.toggle('active');
  const el = document.querySelector('.playlist');
  el.classList.toggle('showing');
  refreshPlayListIfVisible();
}

function toggleShare(event) {
  // If the playlist is open, close it.
  document.querySelector('.playlist').classList.remove('showing');
  document.querySelector('#btnPlaylist').classList.remove('active');

  event.target.classList.toggle('active');
  document.querySelector('.share').classList.toggle('showing');
}

function toggleHelp() {
  const el = document.querySelector('.splash');
  document.querySelector('.main').hidden = el.hidden;
  el.hidden = !el.hidden;

  const btn = document.getElementById('btnCloseHelp');
  if (btn.textContent === 'close') {
    return;
  } else {
    btn.textContent = 'close';
    startPlayer();
  }
}

/*
 * Helpers.
 */
function pausePlayer(andStop = false) {
  if (andStop) {
    playerCore.stop();
    document.querySelector('.current-time').textContent = '0:00';
    document.querySelector('progress').value = 0;
    secondsElapsed = 0;
  } else {
    playerCore.pause();
  }
  clearInterval(progressInterval);
  progressInterval = null;
  document.getElementById('btnPlay').classList.remove('active');
  document.querySelector('.album').classList.remove('rotating');
}

function startPlayer() {
  const state = playerCore.getPlayState();
  if (state === 'stopped') {
    tagClick(EVENTS.START);
    secondsElapsed = 0;
    playerCore.start(allData[currentSongIndex].sequence).then(
      () => {
        tagClick(EVENTS.COMPLETE);
        nextSong();
      });
  } else {
    playerCore.resume();
  }

  clearInterval(progressInterval);
  progressInterval = setInterval(updateProgressBar, 1000);
  document.getElementById('btnPlay').classList.add('active');
  document.querySelector('.album').classList.add('rotating');
}

const progressBar = document.querySelector('progress');
const currentTime = document.querySelector('.current-time');

function updateProgressBar() {
  secondsElapsed++;
  progressBar.value = secondsElapsed;
  currentTime.textContent = formatSeconds(secondsElapsed);
}

// Next/previous should also start the song.
function nextSong() {
  getSong().then(() => changeSong(currentSongIndex + 1));
}

function previousSong() {
  changeSong(currentSongIndex - 1);
}

function changeSong(index, noAutoplay = false) {
  // Update to this song.
  currentSongIndex = index;

  // If this is the first song, we don't get a previous button.
  if (currentSongIndex === 0) {
    document.getElementById('btnPrevious').setAttribute('disabled', true);
  } else {
    document.getElementById('btnPrevious').removeAttribute('disabled');
  }

  pausePlayer(true);
  const hash =  MODEL + '_' + allData[index].fileName;
  window.location.hash = hash;

  // Update the share dialog with this index.
  const twitterPrefix = 'https://twitter.com/intent/tweet?hashtags=madewithmagenta&text=Listen%20to%20this%20Piano%20Transformer%20composition%21%20';
  const fbPrefix = 'https://www.facebook.com/sharer/sharer.php?u=';
  const url = `https://g.co/magenta/listen#${hash}`;
  document.querySelector('a.twitter').href =  `${twitterPrefix}${escape(url)}`;
  document.querySelector('a.fb').href = `${fbPrefix}${url}`;

  const sequence = allData[index].sequence;

  // Set up the progress bar.
  const seconds = Math.round(sequence.totalTime);
  const totalTime = formatSeconds(seconds);
  document.querySelector('.total-time').textContent = totalTime;
  const progressBar = document.querySelector('progress');
  progressBar.max = seconds;
  progressBar.value = 0;

  // Get ready for playing, and start playing if we need to.
  // This takes the longest so start early.
  playerCore.loadSamples(sequence).then(() => {
    if (!noAutoplay) {
      startPlayer();
    }
  });

  // Set up the album art.
  updateCanvas(allData[index]);
  updateFaveButton();
}

function updateFaveButton() {
  if (!HAS_LOCAL_STORAGE) return;
  const btn = document.getElementById('btnFave');
  const faves = getFromLocalStorage(STORAGE_KEYS.FAVES);
  const index = faves.findIndex(x => x.name === allData[currentSongIndex].fileName);

  // Is the current song a favourite song?
  if (index !== -1) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function refreshPlayListIfVisible() {
  if (!HAS_LOCAL_STORAGE ||
    !document.querySelector('.playlist').classList.contains('showing')) {
    return;
  }

  const faves = getFromLocalStorage(STORAGE_KEYS.FAVES);
  const ul = document.querySelector('.playlist ul');
  ul.innerHTML = '';

  // Header.
  const li = document.createElement('li');
  li.className = 'list-header';
  li.innerHTML = `<div>title</div><div>length</div><div></div>`;
  ul.appendChild(li);

  for (let i = 0; i < faves.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
    <div>${faves[i].name}</div>
    <div>${faves[i].totalTime}</div>
    <div class="horizontal">
      <button title="play song" class="play" data-path=${faves[i].path} data-filename=${faves[i].name}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <button title="un-favourite song" class="remove" data-index=${i}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
    </div>`;

    ul.appendChild(li);
    li.onclick = (event) => {
      const file = event.target.dataset.filename;
      const index = event.target.dataset.index;
      const path = event.target.dataset.path;

      const className = event.target.className;
      if (className === 'remove') {
        document.getElementById('btnFave').classList.remove('active');
        removeSongFromPlaylist(index);
        tagClick(EVENTS.UNFAVE, false, file);
      } else if (className === 'play') {
        getSong(path).then(() => changeSong(allData.length - 1));
      }
    }
  }
}

function addSongToPlaylist() {
  if (!HAS_LOCAL_STORAGE) return;
  const faves = getFromLocalStorage(STORAGE_KEYS.FAVES);
  const song = allData[currentSongIndex];
  faves.push({
    name: song.fileName,
    path: song.path,
    totalTime: formatSeconds(song.sequence.totalTime)
  });
  saveToLocalStorage(STORAGE_KEYS.FAVES, faves);
  refreshPlayListIfVisible();
}

function removeSongFromPlaylist(index) {
  if (!HAS_LOCAL_STORAGE) return;
  const fileName = allData[currentSongIndex].fileName;
  const faves = getFromLocalStorage(STORAGE_KEYS.FAVES);
  const faveIndex = faves.findIndex(x => x.name === fileName);
  faves.splice(faveIndex, 1);
  saveToLocalStorage(STORAGE_KEYS.FAVES, faves);
  refreshPlayListIfVisible();
}

function updateCanvas(songData) {
  document.querySelector('.song-title').textContent = songData.fileName
  canvas.drawAlbum(songData.sequence);
}

function getRandomMidiFilename() {
  const index = Math.floor(Math.random() * NUM_MODEL_FILES);
  return `${FILE_PREFIX}${MODEL}/${index}.mid`;
}

function getFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key) || '[]');
}

function saveToLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// From https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds.
function formatSeconds(s) {
  s = Math.round(s);
  return(s-(s%=60))/60+(9<s?':':':0')+s;
}

function tagClick(eventName, logPlayTime, filename) {
  filename = filename || allData[currentSongIndex].fileName;

  const details = {};
  details['event_category'] = MODEL;
  details['event_label'] = filename;

  if (logPlayTime) {
    details['value'] = progressBar.value;
  }
  gtag('event', eventName, details);
}

/*
 * Album art.
 */
function sketch(p) {
  const BACKGROUND = '#f2f4f6';
  const pink = '#f582ae';
  const green = '#00ebc7';
  const yellow = '#ffd803';
  const purple = '#d4d8f0';
  const dark = '#232946';
  const black = 0;
  const COLORS = [green, pink, yellow, dark, purple, black];
  const CANVAS_SIZE = 300;

  p.setup = function() {
    p.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    p.rectMode(p.CENTER);
    p.noLoop();
  };

  p.drawAlbum = function(ns) {
    p.background(BACKGROUND);

    const maxVelocity = Math.max(...ns.notes.map(n => n.velocity));

    for (let i = 0; i < ns.notes.length; i++) {
      const note = ns.notes[i];
      const size = note.quantizedEndStep - note.quantizedStartStep;

      const shape = Math.floor(Math.random() * 4);
      const c = p.color(COLORS[Math.floor(Math.random() * COLORS.length)]);
      c.setAlpha(note.velocity / maxVelocity * 255);

      const x = Math.random() * p.width;
      const y = Math.random() * p.height;

      switch(shape) {
        case 0:  // Circle
          drawCircle(x, y, size, c);
          break;
        case 1:  // Rectangle.
          drawRectangle(x, y, size, size * 2, c);
          break;
        case 2: // Rotated rectangle;
          drawRotatedRectangle(x, y, size, size * 2, c);
          break;
        case 3:
          drawRotatedRectangle2(x,y, size, size * 2,c);
          break;
      }
    }
  }

  function setupFillAndStroke(color, size, outline) {
    if (outline) {
      p.noFill();
      p.stroke(color);
      // You know, "a sensible weight".
      const weight = Math.max(1, Math.floor(size/7));
      p.strokeWeight(weight);
    } else {
      p.noStroke();
      p.fill(color);
    }
  }

  function drawCircle(x, y, size, color, outline=false) {
    setupFillAndStroke(color, size, outline);
    p.ellipse(x, y, size, size);
  }

  function _drawRotatedRectangle(x, y, w, h, color, outline=false, angle) {
    setupFillAndStroke(color, w, outline);
    p.push(); // Start a new drawing state
    p.translate(x, y);
    p.rotate(angle); // 45deg.
    p.rect(0, 0, w, h);
    p.pop();
  }

  function drawRotatedRectangle(x, y, w, h, color, outline=false) {
    _drawRotatedRectangle(x, y, w, h, color, outline, -p.PI / 4);
  }
  function drawRotatedRectangle2(x, y, w, h, color, outline=false) {
    _drawRotatedRectangle(x, y, w, h, color, outline, p.PI / 4);
  }
  function drawRectangle(x, y, w, h, color, outline=false) {
    setupFillAndStroke(color, w, outline);
    p.rect(x, y, w, h);
  }
};
