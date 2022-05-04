import axios from "axios";

export default axios.create({
  baseURL: 'https://api-free.deepl.com/v2',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
});
