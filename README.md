## 개선했으면 좋겠다고 생각했던 부분

### global style과 관련

1. 폰트 사이즈와 색깔

폰트 사이즈, 색깔이 모든 요소마다 다르게 적용되고 있어 불필요하게 비슷한 style 코드를 입력해야 하기에

global하게 적용할 수 있는 보편적 스타일을 하나두고 그걸 기준으로

제목과 경고문구 같은 부분 이외에는 통일화하는 것이 장기적인 페이지의 일관성을 유지하고 불필요한 css 코드도 줄일 수 있지 않을까? 하는 생각이 들었습니다.

2. Material-Ui

홈페이지에 통일성을 위해서 Input, radio, button 같은 걸 styled-components처럼 js파일에 바로 작성해 사용할 수 있게 통일적인 component를 만들어서 import해 온 페이지에서만 약간 조정해서 만들면 불필요하게 value, className, variant 등의 inline요소들이 반복되어

가독성이 떨어지는 코드를 만들지 않을 수 있지 않을까? 하는 생각이 들었습니다.

material-ui를 사용하여 페이지에 일관성을 주고 자동으로 반응형으로 적용되는 것은 편리하지만 라이브러리 자체가 가볍지는 않은 것으로 알고 있습니다.

material-ui로 global styles를 적용하는 것도 애매해서 어차피 다른 CSS 파일을 사용해야 한다면 통일성있게 하나로 가는게 장기적으로 좋지 않을까? 했습니다.

###

label을 선택? placeholder?
