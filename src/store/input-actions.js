import { inputAction } from "./input-slice";
import { uiActions } from "./ui-slice";

export const fetchReviewList = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json"
    );
    const reviewListData = await response.json();
    if (!reviewListData) {
      return;
    }
    dispatch(inputAction.replaceReviewList(reviewListData));
  };
};

export const sendReviewList = (reviewList) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      dispatch(
        uiActions.errorManagement({
          title: "진행중",
          message: "진행중입니다.",
        })
      );

      const response = await fetch(
        "https://react-http-miniproject-default-rtdb.firebaseio.com/reviewList.json",
        {
          method: "PUT",
          body: JSON.stringify(reviewList),
        }
      );

      if (!response.ok) {
        console.log("문제가 있음");
      }
    };

    try {
    await  sendRequest();

      dispatch(
        uiActions.errorManagement({
          title: "성공",
          message: "성공!!!",
        })
      );

    } catch (error) {
      dispatch(
        uiActions.errorManagement({
          title: "실패",
          message: "실패!!!",
        })
      );
    }

    // sendRequest().catch((error) => {
    //   dispatch(
    //     uiActions.errorManagement({
    //       title: "실패",
    //       message: "실패!!!",
    //     })
    //   );
    // });
  }
}