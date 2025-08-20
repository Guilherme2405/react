import axios from "axios";

export const postRepos = async (id: string | undefined) => {
  const response = await axios.get(
    `https://api.github.com/repos/Guilherme2405/${id}`
    
  );
  console.log(response.data);
  return response.data;
};
export const getRepoFiles = async (repoName: string | undefined) => {
  const response = await axios.get(
    `https://api.github.com/repos/Guilherme2405/${repoName}/contents`
  );
  console.log(response.data);
  return response.data;
};