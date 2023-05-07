import { SET_QUESTION } from "../constants/index";

export const setQuestion = (text) => ({
type: SET_QUESTION,
question:text
})