import axios from 'axios';
import { Profile } from "@/types/fetchedData";

const END_POINT = "http://127.0.0.1:8000/profile";

export const fetchPortfolioData = async (): Promise<Profile[]> => {
  try {
    const res = await axios.get<Profile[]>(END_POINT);
    if (res.status === 200) {
      return res.data;
    }
    throw new Error(`Unexpected response status: ${res.status}`);
  } catch (error) {
    throw error;
  }
};