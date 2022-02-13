const API_BASE_URL = "http://localhost:3004/todos";

async function a() {
  const res = await fetch(API_BASE_URL);
  const data = await res.json();
  return data;
}

export const api = {
  fetchAll: async () => {
    try {
      // mdn fetch api 검색 (http method, get, post, delete, put, patch)
      const res = await fetch(API_BASE_URL);

      if (res.status === 200) {
        const data = await res.json();
        return data;
      } else {
        const error = await res.json();
        throw new Error(error);
      }
    } catch (e) {
      console.log("에러", e);
    }
  },
  update: () => {},
  add: () => {},
  delete: () => {},
};
