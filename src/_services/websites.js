import API from "../_api";

export const getWebsites = async () => {
  const { data } = await API.get("/websites");
  return data.data;
};


export const createWebsite = async (data) => {
  try {
    const response = await API.post("/websites", data);
    return response.data;
  } catch (error) {
    console.error("Error creating website:", error);
    throw error;
  }
}

export const showWebsite = async (id) => {
  try {
    const {data} = await API.get(`/websites/${id}`)
    return data.data;
  } catch (error) {
    console.error("Error show website:", error);
    throw error;
  }
}

export const updateWebsite = async (id, data) => {
  try {
    const response = await API.post(`/websites/${id}`, data)
    return response.data;
  } catch (error) {
    console.error("Error show website:", error);
    throw error;
  }
}

export const deleteWebsite = async (id) => {
  try {
    await API.delete(`/websites/${id}`)
  } catch (error) {
    console.error("Error show website:", error);
    throw error;
  }
}

