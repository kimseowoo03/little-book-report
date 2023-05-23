## 구조 설명서
```bash
src
 ┣ components
 ┃ ┣ Review
 ┃ ┃ ┣ MyReviewList.js
 ┃ ┃ ┣ ReviewItem.js
 ┃ ┃ ┣ UserForm.js
 ┃ ┃ ┣ UserForm.module.css
 ┃ ┃ ┗ UserReviewList.js
 ┃ ┣ UI
 ┃ ┃ ┣ Button.js
 ┃ ┃ ┣ Header.js
 ┃ ┃ ┣ Loading.js
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
 ┃ ┣ SignIn.js
 ┃ ┗ SignUp.js
 ┣ store
 ┃ ┣ review-actions.js
 ┃ ┣ review-slice.js
 ┃ ┣ store.js
 ┃ ┣ ui-slice.js
 ┃ ┗ user-slice.js
 ┣ styles
 ┃ ┣ Button.module.scss
 ┃ ┣ Header.module.scss
 ┃ ┣ Loading.module.scss
 ┃ ┣ ReviewHome.module.scss
 ┃ ┣ ReviewItem.module.scss
 ┃ ┗ UserReviewList.module.scss
 ┣ App.js
 ┣ firebase-config.js
 ┣ index.js
 ┗ index.scss
```

## 파이어베이스에서 사용하는 기능에 대한 레퍼런스

`UserSignUp.js` - 회원가입(createUserWithEmailAndPassword)
사용자가 입력한 값을 ref로 읽어와 매개변수에 넣어주면 전달되어, 신규 계정을 생성한다.
![createUserWithEmailAndPassword](https://user-images.githubusercontent.com/102151860/193737171-fbc4d2ae-94db-474a-b010-3a0cd0029bda.png)

`Header.js` - 로그아웃(signOut)
로그아웃 하면서, dispath로 현재 사용자를 담고 있는 상태도 null로 설정하였다.
![signOut](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)

## 폼 데이터 코딩할 때 준수할 훅 사용 패턴 가이드
`useUserForm.js` 매개변수로 받는 inputValueIsvaildFun는 빈값인지 확인하는 단순 함수입니다.
![inputValueIsvaildFun](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)

### useUserForm의 역할

1. 들어온 값의 빈 값 여부를 확인합니다.(inputValueIsvalid)
2. 값을 업데이트 해준 후 반환해 줍니다.

**inputFormIsvalid** - 불리언에 따라 input의 상태를 사용자에게 알려줍니다.

![inputFormIsvaild](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)

**inputValueIsvalid** -불리언에 따라 input이 빈 값이라면 등록하지 못하게 합니다.

![inputValueIsvalid](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)


## 디스패치시에 준수할 코드 패턴 가이드
>아래 가이드 말고는 매개변수 없이 사용해도 됩니다.

`MyReviewList.js`
현재 로그인한 사용자의 id를 꼭 매개변수로 넣어주어야 합니다.
Firestore Database에서 사용자의 데이터를 가져올 때 쿼리를 사용하여 해당 로그인한 사용자의 uid를 일치한 것을 가져옵니다. 현재 로그인한 사용자의 정보를 가져와야 하므로 사용자의 id를 꼭 매개변수로 넣어주어야 합니다.
![myReviewList](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)


`UserForm.js`
유저가 입력한 값과 유저의 Id를 꼭 매개변수로 넣어주어야 합니다(순서는 상관없습니다).
Firestore Database에 사용자의 데이터를 저장할 때, 유저가 입력한 값들이 필요하고
나중에 해당 사용자의 데이터만 불러오려면 유저의 id가 필요합니다.
![userForm](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)


`App.js`
로그인한 사용자의 정보를 가지고 있어야 하기 떄문에 currentUser 객체에 사용자의 정보를 담아서
dispatch 할 때 매개변수로 넘겨줘야 합니다.
만일, 사용자의 정보가 추가적으로 필요한 경우에 currentUser에 키와 값으로 추가만 하면 됩니다.
![app](https://user-images.githubusercontent.com/102151860/193738732-0757c066-4ad7-47e1-a19c-975b37011417.png)