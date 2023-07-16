import axios from "axios";

const url = "https://megamouse-f5fn2kxfoq-an.a.run.app";

interface Convert {
  mode: string;
  words: string;
}

export const convert = (body: any) => {
  return axios.post(`${url}/convert`, body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
