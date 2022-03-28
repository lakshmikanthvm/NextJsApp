import { useRouter } from "next/router";
import React, { FC, useState, useEffect } from "react";
import { CarDetail, CarDetailCard } from "../../src/components/pages/CarDetailCard/CarDetailCard";
import { fetchCars } from "../../util/api";

const Shop: FC = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [carData, setCarData] = useState<CarDetail[] | []>([])

  useEffect(() => {
    fetchCars(id)
      .then((data: CarDetail[]) => {
        setCarData(data);
      })
      .catch((e) => console.log("Error:", e));
  }, [id])

  if(carData?.length === 0) return null;

  return (
    <CarDetailCard {...carData?.[0]} />
  );
};

export default Shop;