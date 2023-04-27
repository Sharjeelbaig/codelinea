import { SET_OUTPUT } from "../constants";

export const setOutput = (input) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "ARRAffinity=37f0e8b044345d077c92cbb7bb45df3a89d21273533dac633adea9a6d484fdee; ARRAffinitySameSite=37f0e8b044345d077c92cbb7bb45df3a89d21273533dac633adea9a6d484fdee"
    );
    const urlencoded = new URLSearchParams();
    urlencoded.append("code", input);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://codelinea.azurewebsites.net/explain",
        requestOptions
      );
      const result = await response.text();
      console.log(result)
      const resultObject = JSON.parse(result);
      console.table(resultObject)
      dispatch({
        type: SET_OUTPUT,
        explanation: resultObject.explanation,
        language: resultObject.language,
        depthExplanation: resultObject.depthExplanation,
        sample: resultObject.sample,
        sampleExplanation: resultObject.sampleExplanation,
      });
    } catch (error) {
      alert("An error has occured ", error);
      // handle error appropriately
    }
  };
};
