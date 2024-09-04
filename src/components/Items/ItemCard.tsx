import Image from "next/image";

import { ItemCardType } from "@/types/items/ItemCard";

import Cart from "../icons/Cart";
import Hearts from "../icons/Hearts";

import ReviewPreview from "./ReviewPreview";

export default function ItemCard({ item }: { item: ItemCardType }) {
  return (
    <div className="w-[100%] border-slate-950 flex flex-col justify-start">
      <div className="relative w-full aspect-square">
        <Image
          src={item.imgUrl}
          alt={item.ProductName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex justify-between pt-1">
        <p className="text-[#777777] text-[12px] pt-1 ">{item.largeCategory}</p>
        <div className="flex gap-2">
          <Hearts color="black" />
          <Cart color="black" />
        </div>
      </div>
      <p className="text-[13px] ">{item.ProductName}</p>
      <p className="font-semibold ">{item.price}원</p>
      <ReviewPreview productCode={item.ProductCode} visible={false} />
    </div>
  );
}
