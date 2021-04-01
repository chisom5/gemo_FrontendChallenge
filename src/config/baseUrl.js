// const getBaseUrl = () => {
//   const url = window.location.href;
//   const base = url.split("#")[0];
//   const baseWithoutHttp = base.split("/")[2];
//   switch (baseWithoutHttp) {
//     case "192.168.0.4":
//       return "http://api.github.com";
//     default:
//     return "http://api.github.com"
//   }
// };

// const baseUrl = getBaseUrl();

const baseUrl = "http://api.github.com"
export default baseUrl;
