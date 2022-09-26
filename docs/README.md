# 미니프로젝트

## **프로젝트 목적**

- Firebase에서 제공하는 서비스를 이용하여 Firestore(데이터 관리), Auth(사용자 관리)를 통해 기능 구현
- 상태관리할 때 리액트 훅이 아닌 리덕스를 배우고 리덕스 툴킷을 활용하여 보다 쉽게 구현
- React-router v6 를 사용하여 SPA 경험


## **구조 설명서**
src
 ┣ components
 ┃ ┣ Review
 ┃ ┃ ┣ MyReviewList.js
 ┃ ┃ ┣ Review.js
 ┃ ┃ ┣ Review.module.css
 ┃ ┃ ┣ UserForm.js
 ┃ ┃ ┣ UserForm.module.css
 ┃ ┃ ┣ UserReviewList.js
 ┃ ┃ ┗ UserReviewList.module.css
 ┃ ┣ UI
 ┃ ┃ ┣ Button.js
 ┃ ┃ ┣ Button.module.css
 ┃ ┃ ┣ Header.js
 ┃ ┃ ┣ Header.module.css
 ┃ ┃ ┣ Notification.js
 ┃ ┃ ┗ Notification.module.css
 ┃ ┗ accounts
 ┃ ┃ ┣ UserSignIn.js
 ┃ ┃ ┣ UserSignIn.module.css
 ┃ ┃ ┣ UserSignUp.js
 ┃ ┃ ┗ UserSignUp.module.css
 ┣ hooks
 ┃ ┗ useUserForm.js
 ┣ pages
 ┃ ┣ Home.js
 ┃ ┣ Home.module.css
 ┃ ┣ ReviewHome.js
 ┃ ┣ ReviewHome.module.css
 ┃ ┣ UserPageSignUp.js
 ┃ ┗ UserPageSignUp.module.css
 ┣ store
 ┃ ┣ input-actions.js
 ┃ ┣ input-slice.js
 ┃ ┣ store.js
 ┃ ┣ ui-slice.js
 ┃ ┗ user-slice.js
 ┣ App.js
 ┣ App.module.css
 ┣ firebase-config.js
 ┗ index.js

**components** -> 페이지를 구성할 컴포넌트
ㄴReview - 감상평 페이지에 필요한 기능 폴더
ㄴUI
ㄴaccount - 회원가입, 로그인 페이지 폴더

**pages**- react-router elements에 사용될 컴포넌트

**hooks**- UserForm의 input을 커스텀 훅을 이용한 폴더

**store**- RTK(ReduxToolKit)를 사용하여 상태 관리 폴더


## **파이어베이스에서 사용하는 기능에 대한 레퍼런스(참고자료) 나열 및 사용내역 정리**

**<Authentication- 비밀번호 인증>**
[공식 문서](https://firebase.google.com/docs/auth/web/password-auth
https://firebase.google.com/docs/auth/web/manage-users)

**createUserWithEmailAndPassword**

+ updateProfile (사용자 프로필 업데이트)

**(UserSignUp.js)** - 회원가입

사용자가 입력한 값을 ref로 읽어와 매개변수에 넣어주면 전달되어, 신규 계정을 생성한다.

(docs/images/FB/createUserWithEmailAndPassword.png)

**signInWithEmailAndPassword**

**(UserSignIn.js)** - 로그인

사용자가 로그인하면, 사용자의 이메일 주소와 비밀번호를 전달하여 로그인 할 수 있다.

(docs/images/FB/signInWithEmailAndPassword.png)

**signOut**

**(Header.js)** - 로그아웃

로그아웃 하면서, dispath로 현재 사용자를 담고 있는 상태도 null로 설정하였다.

(docs/images/FB/signOut.png)

### **현재 로그인한 사용자 가져오기**
**(App.js)**
[https://firebase.google.com/docs/auth/web/manage-users?hl=ko#get_the_currently_signed-in_user](https://firebase.google.com/docs/auth/web/manage-users?hl=ko#get_the_currently_signed-in_user)

(docs/images/FB/getTheCurrentlyLoggedInUser.png)

**<Firestore Database>**

[여러 문서 가져오기](https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko#get_multiple_documents_from_a_collection)

(docs/images/FB/firestoreDatabase.png)

**<Hosting>**

[공식 문서](https://pool-pantydraco-4e9.notion.site/hosting-5208ab32e0c2434bb3b1dfcb9ec856ea)


## **폼 데이터 코딩할 때 준수할 훅 사용 패턴 가이드**
(docs/images/FormDataGudie/FormDataCode.png)

useUserForm 훅이 매개변수로 받는 inputValueIsvaildFun는 빈값인지 확인하는 단순 함수입니다.
(docs/images/FormDataGuide/inputValueIsvaildFun.png)

### 역할

1. 들어온 값의 빈 값 여부를 확인합니다.(inputValueIsvalid)
2. 값을 업데이트 해준 후 반환해 줍니다.

값을 떠나 input을 한 번 터치 했는데 빈 값일 때와 아닐 때를 나타내고,

만약 값을 정상적으로 잘 보낸 경우 resetData를 사용하여 input을 초기화 합니다.

**inputFormIsvalid** - 불리언에 따라 input의 상태를 사용자에게 알려줍니다.
(docs/images/FormDataGuide/inputFormIsvaild.png)

**inputValueIsvalid** -불리언에 따라 input이 빈 값이라면 등록하지 못하게 합니다.
(docs/images/FormDataGuide/inputValueIsvalid.png)


## **디스패치시에 준수할 코드 패턴 가이드**
(아래 가이드 말고는 매개변수 없이 사용해도 됩니다) 

**(MyReviewList.js)**
현재 로그인한 사용자의 id를 꼭 매개변수로 넣어주어야 합니다.

Firestore Database에서 사용자의 데이터를 가져올 때 쿼리를 사용하여 해당 로그인한 사용자의 uid를 일치한 것을 가져옵니다. 현재 로그인한 사용자의 정보를 가져와야 하므로 사용자의 id를 꼭 매개변수로 넣어주어야 합니다.
(docs/images/DispathGuide/myReviewList.png)

**(UserForm.js)**

유저가 입력한 값과 유저의 Id를 꼭 매개변수로 넣어주어야 합니다.(순서는 상관없음)
Firestore Database에 사용자의 데이터를 저장할 때, 유저가 입력한 값들이 필요하고
나중에 해당 사용자의 데이터만 불러오려면 유저의 id가 필요합니다.
(docs/imaged/DispathGuide/userForm.png)

**(App.js)**

로그인한 사용자의 정보를 가지고 있어야 하기 떄문에 currentUser 객체에 사용자의 정보를 담아서
dispatch 할 때 매개변수로 넘겨줘야 합니다.
만일, 사용자의 정보가 추가적으로 필요한 경우에 currentUser에 키와 값으로 추가만 하면 됩니다.
(docs/imaged/DispathGuide/app.png)