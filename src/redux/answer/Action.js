import { SET_ANSWER } from "../constants";

export const setAnswer = (question, code) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "ARRAffinity=37f0e8b044345d077c92cbb7bb45df3a89d21273533dac633adea9a6d484fdee; ARRAffinitySameSite=37f0e8b044345d077c92cbb7bb45df3a89d21273533dac633adea9a6d484fdee"
    );
    const urlencoded = new URLSearchParams();
    urlencoded.append("question", question);
    urlencoded.append("code", code);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://codelinea.azurewebsites.net/ask",
        requestOptions
      );
      const result = await response.text();
      console.log(result)
      dispatch({
        type: SET_ANSWER,
        answer: result,
      });
    } catch (error) {
      alert("An error has occurred ", error);
      // handle error appropriately
    }
  };
};
