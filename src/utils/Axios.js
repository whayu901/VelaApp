import axios from "axios";

const queryParser = (params) => {
  let queryParams = "";
  for (let key in params) {
    if (!queryParams) {
      queryParams = queryParams.concat(`?${key}=${params[key]}`);
    } else {
      queryParams = queryParams.concat(`&${key}=${params[key]}`);
    }
  }
  return queryParams;
};

const defaultHeaders = {
  "Content-Type": "application/json",
  // Authorization: "Basic ZGVtbzpkZW1v"
};

// const multipartHeaders = {
//   Accept: 'application/json',
//   "Content-Type": "multipart/form-data",
//   Authorization: "Basic ZGVtbzpkZW1v"
// };

const getUserToken = () => {
  let userToken = "";

  return userToken;
};

const Axios = {
  Get: ({ url, params, token, cancelToken }) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "GET",
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Post: ({ url, data, cancelToken, token }) => {
    const userToken = getUserToken();
    // if (userToken) {
    //   data['x-access-token'] = userToken;
    // }
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  PostFormData: ({ url, data, cancelToken, token }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  PostMultipart: ({ url, data, cancelToken }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            ...multipartHeaders,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Put: ({ url, params, data, token, cancelToken }) => {
    const userToken = getUserToken();
    if (userToken) {
      data["x-access-token"] = userToken;
    }

    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PUT",
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          cancelToken: cancelToken,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Patch: ({ url, params, data, cancelToken }) => {
    const userToken = getUserToken();
    if (userToken) {
      data["x-access-token"] = userToken;
    }

    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PATCH",
          headers: {
            ...defaultHeaders,
          },
          cancelToken: cancelToken,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Delete: ({ url, params, data, cancelToken }) => {
    const userToken = getUserToken();
    if (userToken) {
      data["x-access-token"] = userToken;
    }

    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "DELETE",
          headers: {
            ...defaultHeaders,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  All: ({ promises }) => {
    return new Promise((resolve, reject) => {
      axios
        .all(promises)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default Axios;
