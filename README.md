## 개선했으면 좋겠다고 생각했던 부분

### global style과 관련

1. 폰트 사이즈와 색깔

font-family, 폰트 사이즈, 색깔이 모든 요소마다 다르게 적용되고 있어 불필요하게 비슷한 style 코드를 입력해야 하기에

global하게 적용할 수 있는 보편적 스타일을 하나두고 그걸 기준으로

제목과 경고문구 같은 부분 이외에는 통일화하는 것이 장기적인 페이지의 일관성을 유지하고 불필요한 css 코드도 줄일 수 있지 않을까? 하는 생각이 들었습니다.

2. Material-Ui

홈페이지에 통일성을 위해서 Input, radio, button 같은 걸 styled-components처럼 js파일에 바로 작성해 사용할 수 있게 통일적인 component를 만들어서 import해 온 페이지에서만 약간 조정해서 만들면 불필요하게 value, className, variant 등의 inline요소들이 반복되어

가독성이 떨어지는 코드를 만들지 않을 수 있지 않을까? 하는 생각이 들었습니다.

material-ui를 사용하여 페이지에 일관성을 주고 자동으로 반응형으로 적용되는 것은 편리하지만 라이브러리 자체가 가볍지는 않은 것으로 알고 있습니다.

material-ui로 global styles를 적용하는 것도 애매해서 어차피 다른 CSS 파일을 사용해야 한다면 통일성있게 하나로 가는게 장기적으로 좋지 않을까? 했습니다.

###

label을 선택? placeholder?
warning 글자크기 조정
나중에 placeholder 로 바꾸기

화면에 글자가 너무 많아서 value에 length가 생기면
warning letter가 나타나게 하려고 했는데
그러면 회사이름, 설립일 같이 원래 필수 입력 사항부분과
통일성을 이룰 수 없었다.
차라리 필수입력 사항들은 옆에 \*마크로 표시하고
email, password 같은 부분에는 사용자가 글자를 입력하기 시작하는
순간 warning letter가 나타났다가 해당 validation에 맞으면
사라지는 형식으로 하는 게 사용자가 화면을 보기에
복잡해보이지 않지 않을까?하는 생각이 들었다.

///^(?=._?[A-Z])(?=._?[a-z])(?=._?[0-9])(?=._?[^\w\s]).{8,}\$/

inputBase로 할 경우 textFeild와 달리 클릭시 파란 보더가 없음.

Dropbox <Autocomplete>으로 만들면 삭제도 가능

모든 State를 하나의 useState로 관리하고 들어오는 event를 파악해서 업데이트할 수 잇겠지만
혹시나 모를 오류 또는 이후 수정시 로직 자체를 수정하는 일이 더 어려울 것 같아 state 따로 관리
