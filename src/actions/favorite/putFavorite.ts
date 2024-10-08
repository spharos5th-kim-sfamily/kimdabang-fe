"use server";
import { commonResType, IsFavoriteType } from "@/types/ResponseType";
import { revalidateTag } from "next/cache";
import { fetchData } from "../common/common";

export const putFavorite = async (productCode: string) => {
  const data = await fetchData<commonResType<IsFavoriteType>>(
    `/api/v1/favorite/${productCode}`,
    "PUT",
    "",
    "no-store",
  );

  revalidateTag("productFavorite");
  return;
};
