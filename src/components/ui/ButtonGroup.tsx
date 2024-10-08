"use client";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import { useEffect, useRef, useState } from "react";
import { useButtonGroup } from "../../context/OptionContext";
import OptionDialog from "./OptionDialog";
import { SelectButton } from "./SelectButton";
export default function ButtonGroup({
  CategoryData,
}: {
  CategoryData: CategoryType[];
}) {
  const { selectedButton, handleClick } = useButtonGroup();
  const selectedButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    handleClick(2);
  }, []);

  return (
    <section className="w-full flex flex-row items-center gap-1 pt-3 p-0">
      <nav className="w-[100%] overflow-x-auto relative scroll-item">
        <ul className="flex space-x-2">
          {CategoryData.slice(0, 5).map((category) => (
            <li key={category.id}>
              <SelectButton
                ref={selectedButton === category.id ? selectedButtonRef : null}
                type="button"
                isSelected={selectedButton === category.id}
                onClick={() => handleClick(category.id)}
                className={`border-[#E5E5E5] m-0 p-2 h-9 text-[13px] font-medium ${
                  selectedButton === category.id ? "bg-black text-white" : ""
                }`}
              >
                {category.name}
              </SelectButton>
            </li>
          ))}
        </ul>
      </nav>
      <OptionDialog />
    </section>
  );
}
