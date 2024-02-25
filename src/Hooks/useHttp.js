import axios from "axios";
const useHttp = () => {
  const GetRequest = async (url, params = {}, headers = {}) => {
    try {
      const response = await axios({
        method: "get",
        url,
        params,
        headers,
      });
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: err,
      };
    }
  };

  const PostRequest = async (url, data, headers = {}) => {
    try {
      const response = await axios({
        method: "post",
        url,
        data,
        headers,
      });
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: err.response,
      };
    }
  };

  const PutRequest = async (url, data, headers = {}) => {
    try {
      const response = await axios({
        method: "put",
        url,
        data,
        headers,
      });
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: headers,
        error: err.response,
      };
    }
  };

  const DeleteRequest = async (url, headers = {}) => {
    try {
      const response = await axios({
        method: "delete",
        url,
        headers,
      });
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: err.response,
      };
    }
  };
  const PatchRequest = async (url, data, params = {}, headers = {}) => {
    try {
      const response = await axios({
        method: "patch",
        url,
        data,
        headers,
      });
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: err.response,
      };
    }
  };

  return {
    GetRequest,
    PutRequest,
    PostRequest,
    DeleteRequest,
    PatchRequest,
  };
};
export default useHttp;
