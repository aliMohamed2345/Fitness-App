import axios from "axios";
const baseURL = `https://exercisedb.p.rapidapi.com`;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
  timeout: 10000,
  method: "GET",
});

//Global Error Handler 
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error.message);
  },
);

export const apiEndpoints = {
  TargetList: `/targetList`,
  Status: `/status`,
  Target: (targetVal: string) => `/target/${targetVal}`,
  Name: (nameVal: string) => `/name/${nameVal}`,
  Exercises: `/exercises`,
  Exercise: (exerciseName: string) => `/exercise/${exerciseName}`,
  EquipmentList: `/exercises/equipmentList`,
  Equipment: (equipmentName: string) => `/exercises/equipment/${equipmentName}`,
  BodyPartList: `/exercises/bodyPartList`,
  BodyPart: (bodyPartName: string) => `/exercises/bodyPart/${bodyPartName}`,
};
