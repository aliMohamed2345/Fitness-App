import { ExerciseAPI } from "./fetchData";
export async function fetchExercisesBatch(ids: string[]) {
  try {
    const results = await Promise.all(
      ids.map((id) => ExerciseAPI.getExerciseById(id)),
    );

    return results.map((r) => r.data);
  } catch (err) {
    console.log(err);
    return [];
  }
}
