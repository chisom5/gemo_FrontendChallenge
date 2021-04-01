import { makeHttpRequest, authHttpRequest } from "../../../helpers/httpHelpers";
import baseUrl from "../../../config/baseUrl"
/**
 *
 * @param {String} url
 * @param {Object} data
 */


export const makePostRequest = (url, data, params) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "POST", params || {});

export const makeGetRequest = (url, params) =>
  makeHttpRequest(`${baseUrl}${url}`, {}, "GET", params || {});

export const makePutRequest = (url, data) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "PUT", {});

export const makeDeleteRequest = (url, params) =>
  makeHttpRequest(`${baseUrl}${url}`, {}, "DELETE", params || {});
