"use server";
import { commonResType, IsFavoriteType } from "@/types/ResponseType";
import { getData } from "./CommonGet";

export const getIsFavorite = async (
  productCode: string,
): Promise<IsFavoriteType> => {
  "use server";
  const data = await getData<commonResType<IsFavoriteType>>(
    `/api/v1/favorite/${productCode}`,
    "productFavorite",
  );
  console.log("함수에서 찍음", data);
  return data.data;
};
