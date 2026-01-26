import { axiosInstance, apiEndpoints } from "./axios";

export const ExerciseAPI = {
  getAll: () => axiosInstance.get(apiEndpoints.Exercises),
  getByName: (name: string) => axiosInstance.get(apiEndpoints.Name(name)),
  getByBodyPart: (part: string) =>
    axiosInstance.get(apiEndpoints.BodyPart(part)),
  getEquipmentList: () => axiosInstance.get(apiEndpoints.EquipmentList),
};


