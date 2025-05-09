// const fetchApi = (url: string, options: RequestInit = {}) => {
//   return fetch(`${API_KEY}${url}`, {
//     ...options,
//   });
// };
import { makeBlogError } from "@/lib/utils";

// export default fetchApi;

class FetchApi {
  private static API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  private static headerJson = {
    "Content-Type": "application/json",
  };

  private static apiInstance = async <T>(
    method: string,
    url: string,
    options: RequestInit = {},
  ) => {
    const res = await fetch(`${this.API_KEY}${url}`, {
      method,
      ...options,
    });

    if (!res) {
      // TODO : Error Control
      throw new Error(`API Error : ${url}`);
    }

    if (!res.ok) {
      const { code } = await res.json();

      const error = makeBlogError({ code });
      console.log("making error", error);

      throw new Error(JSON.stringify(error));
    }

    const result: T = await res.json();
    return result;
  };

  get = async <T>(url: string, options: RequestInit = {}) => {
    return await FetchApi.apiInstance<T>("GET", url, {
      headers: {
        ...FetchApi.headerJson,
        ...options.headers,
      },
      ...options,
    });
  };
}

const fetchApi = new FetchApi();
export default fetchApi;
