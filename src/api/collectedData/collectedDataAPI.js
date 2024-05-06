import axios from "axios";
import { getEnvVariables } from "../../helpers/getEnvVariables";

const { VITE_DATA_API_URL } = getEnvVariables();

export const collectedDataAPI = axios.get(VITE_DATA_API_URL);