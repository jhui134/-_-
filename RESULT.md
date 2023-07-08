# RESULT.md

## 구현의도

- 상태관리는 `redux`와 `redux-thunk`를 사용하였습니다. `redux-persist`는 요구사항의 내용만 구현하기에는 사용하지 않아도 되어 사용하지 않았습니다. `redux-saga`는 `redux-thunk` 사용으로 그 목적을 대신하였습니다.
- 요구기술에 `firebase`는 사용할 부분이 없어 사용하지 않았습니다.
- [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos) 해당 URL은 API 통신시 토큰에 대한 제한 사항이 없기 때문에 `jwt` 관련 내용은 들어가지 않았습니다.
- 화면 구성 이후 `Lottie.json`을 애니메이션 기능에 적용하라는 내용이 있는데 구체적인 내용이 없어 상세 화면에 적용하였습니다.

## 풀이과정

- Bottom Tab Navigation에 들어가는 아이콘 적용을 위해 `react-native-vector-icons` 라이브러리를 이용하였습니다.
- 가로 리스트 구현 시 자사 앱 배너 형태를 참고하라고 나와있는데 자사 앱에 배너 형태가 없어 임의로 스크롤시 하나씩 걸리며 페이지네이션 될 수 있게 만들었습니다.
- 세로 리스트 구현에는 일반적인 스크롤로 구현하였습니다.
- 가로 리스트와 세로 리스트의 상태관리를 따로 하였는데 추후 유지 보수를 위해 타입으로 나누지 않았습니다.

## 실행방법

1. 루트 디렉토리에서 `npm install`로 라이브러리를 받아주세요.
2. 루트 디렉토리에서 `npx pod-install`로 iOS 앱 구동을 위한 설치를 진행해주세요.
3. `npm run ios`, `npm run android`를 통해 각 OS에 맞는 앱을 실행시켜주세요.
