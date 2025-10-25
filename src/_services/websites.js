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
};
