import axios from "axios";
import moment from "moment";

export const authHttpRequest = (url, data = {}, method, params = {}) => {
  return axios({
    url,
    method,
    data,
    params,
    headers: {
      Accept: "application/json, text/plain */*",
      "Content-Type": "application/json",
      Pragma: "no-cache",
    },
  }).then((res) => res);
};

const user = JSON.parse(sessionStorage.getItem("PEP_XX_Token"));
console.log(user, 'to')
export const makeHttpRequest = (url, data, method, params = {}) => {
  return axios({
    url,
    data,
    method,
    params,
    headers: {
      Accept: "application/json, text/plain */*",
      // "Content-Type": contentType,
      Authorization: `Bearer ${user !== null && user.token}`,
      Pragma: "no-cache",
    },
  }).then((res) => res);
};

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const deleteToken = () => JSON.parse(sessionStorage.getItem("PEP_XX_Token"));

export const validateToken = () => {
  const token = user.token;
  if (token) {
    const tokenData = parseJwt(token);
    if (tokenData) {
      const { exp } = tokenData;
      if (!exp) {
        deleteToken();
        return false;
      }
      const hasExpired = moment(exp).isBefore(Date.now());
      if (hasExpired) {
        deleteToken();
        return false;
      }
      return true;
    }
  }
  return false;
};
