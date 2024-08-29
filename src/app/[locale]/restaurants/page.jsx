import React from "react";
import { useTranslations } from "next-intl";
import RestaurantCard from "../../components/RestaurantCard";
import AddBtn from "../../components/buttons/AddBtn";
import SearchInput from "@/app/components/SearchInput";
import FilterDropDown from "../../components/buttons/FilterDropDown";

const Page = () => {
  const t = useTranslations('restaurants')
  return (
    <div className="bg-bg-highlight w-full max-w-[1150px] mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-[32px] font-semibold">{t("restaurantListing")}</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <SearchInput width="100%" smWidth="379px" height="44px" />
          <FilterDropDown />
          <AddBtn />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Page;