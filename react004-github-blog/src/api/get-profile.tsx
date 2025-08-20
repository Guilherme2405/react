import axios from "axios";

export const getProfile = async () => {
  const response = await axios.get(
    "https://api.github.com/users/Guilherme2405"
  );
  console.log(response.data);
  return response.data;
};
