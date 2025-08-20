import axios from "axios";

export const getReposProfile = async () => {
  const response = await axios.get(
    `https://api.github.com/users/Guilherme2405/repos`
  );
  return response.data;
};
