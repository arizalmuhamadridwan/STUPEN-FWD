import { useJwt } from "react-jwt";
import API from "../_api";

// export const login = async ({email, password}) => {
//   try {
//     const {data} = await API.post("/login", {email, password});
//     return data;
//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// }

// export const login = async (formData) => {
//   const { data } = await API.post("/login", formData);
//   return data; 
// };

export const logout = async () => {
  try {
    const { data } = await API.post('/logout', {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userInfo')
    return data
  } catch (error) {
    console.error("Logout gagal:", error)
    throw error
  }
}

import API from "../_api";

export const register = async (formData) => {
  try {
    const { data } = await API.post("/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    return data;
  } catch (error) {
    console.error("Error saat register:", error);
    throw error;
  }
};

export const login = async (formData) => {
  try {
    const { data } = await API.post("/login", {
      email: formData.email,
      password: formData.password,
    });
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};


// export const register = async ({ name, email, password }) => {
//   try {
//     const { data } = await API.post("/register", { name, email, password })
//     return data
//   } catch (error) {
//     console.error("Error saat register:", error)
//     throw error
//   }
// }



export const useDecodeToken = (token) => {
  const { decodeToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        succes: false,
        message: "Token Expired",
        data: null
      }
    }

    return {
        succes: true,
        message: "Token valid",
        data: decodeToken
    }
  } catch (error) {
    return {
      succes: false,
      message: error.message,
      data: null
    }
  }
}