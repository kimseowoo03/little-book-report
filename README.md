# 작은 도서관
작은 도서관이라는 프로젝트는 사람들이 책을 읽고 독후감을 적어 다른 사람들과 공유할 수 있고, 본인이 쓴 독후감만 볼 수도 있습니다. 

![작은도서관 사진](https://user-images.githubusercontent.com/102151860/193737171-fbc4d2ae-94db-474a-b010-3a0cd0029bda.png)

## 프로젝트 목적
- Firebase에서 제공하는 서비스를 사용하여 Firestore(데이터 관리), Auth(사용자 관리)를 통해 기능 구현
- 백엔드에서 쿼리를 사용하여 데이터 처리
- 커스텀 훅을 이용하여 코드 재사용
- 상태관리를 Redux,  Redux-toolkit을 활용
- React-router v6 를 사용하여 SPA 경험

## 개발 환경 설정
1. [firebse](https://console.firebase.google.com/)에서 프로젝트 생성
2. 레포지토리 복제 git clone https://github.com/github_username/repo_name.git
3.  npm install
4. `.env`에 1번에서 만든 firebase의 config key를 넣어주세요(값만 넣어주세요. “값” <- 이렇게 넣으면 쌍 따옴표까지 인식돼서 에러가 발생합니다). 
```
REACT_APP_FIREBASE_API_KEY= 'ENTER YOUR API'
```
## 프로젝트 사용 방법
[프로젝트 로그인]
Email: kimseowoo03@nav.com
password: 123456789

Firebase를 처음 사용해보시는 분들은 [docs](https://github.com/kimseowoo03/react-http-miniproject/tree/master/)참고해주세요!

## 참고자료
사용 방법들은 Firebase 공식문서 또는 유데미 리액트 강의를 참고했습니다.
Authentication
[비밀번호 인증](https://firebase.google.com/docs/auth/web/password-auth)
[사용자 관리](https://firebase.google.com/docs/auth/web/manage-users)

FIrestore
[Cloud Firestore 시작하기](https://firebase.google.com/docs/firestore/quickstart?hl=ko)

Hosting
[유데미 리액트 강의](https://www.udemy.com/course/best-react/)
---
프로젝트의 구조, 훅 사용 패턴 가이드, 디스패치에 준수할 코드 패턴 가이드 [docs](https://github.com/kimseowoo03/react-http-miniproject/tree/master/docs)를 참고해주세요!