import axios from 'axios';
import { data } from "@/data";
import { Profile } from "@/types/fetchedData";

const END_POINT = "https://portfolio-second-version-backend-3.onrender.com/profile";

export const fetchPortfolioData = async (): Promise<Profile[]> => {
  try {
    const res = await axios.get<Profile[]>(END_POINT);
    if (res.status === 200) {      
      return res.data;
    }
    throw new Error(`Unexpected response status: ${res.status}`);
  } catch {
    return data;
  }
};