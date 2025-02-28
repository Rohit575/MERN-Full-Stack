import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const signUp = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);

    return {
      statusCode: response.data.statusCode,
      message: response.data.message,
      data: response.data.data,
      error: response.data.error,
    };
  } catch (error) {
    console.log("Error from API", error);
  }
};

const LoginAPI = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    console.log("Response from API", response);

    return {
      statusCode: response.data.statusCode,
      message: response.data.message,
      data: response.data.data,
      error: response.data.error,
    };
  } catch (error) {
    console.log("Error from API", error);
  }
};

export { signUp, LoginAPI };
