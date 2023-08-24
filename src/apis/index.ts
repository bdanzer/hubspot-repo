import { APIResponse, IConversationsReturnType } from "../@types";
import axios from "axios";

const GET_API_URL =
  "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=a5eb087901cf870da4343bad18f5";
const POST_RESULT_API_URL =
  "https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=a5eb087901cf870da4343bad18f5";

export async function fetchInboxData(): Promise<APIResponse | null> {
  try {
    const response = await axios.get(GET_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching inbox data:", error);
    return null;
  }
}

export async function sendResultToAPI(resultData: IConversationsReturnType) {
  try {
    const response = await axios.post(POST_RESULT_API_URL, resultData);
    console.log("Result sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending result:", error);
  }
}
