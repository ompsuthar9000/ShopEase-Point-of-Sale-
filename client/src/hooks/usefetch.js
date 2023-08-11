import axios from "axios";

const usefetchget = async (url) => {
  const data = await axios.get(url).catch((err) => {
    console.log(err);
    if (err) return err;
  });
  return data;
};

export const usefetchpost = async (url, data) => {
  const res = await axios.post(url, data).catch((err) => {
    console.log(err);
    if (err) return err;
  });
  return res;
};

export default usefetchget;
