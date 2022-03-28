import React, { FC, useEffect, useState } from "react";
import { Carousal } from "../../organisms/Carousal/Carousal";
import { CarDetailCard, CarDetail } from "../CarDetailCard/CarDetailCard";
import { CarBodyTypeFilter } from "../CarBodyTypeFilter/CarBodyTypeFilter";
import { fetchCars } from "../../../../util/api";

const getCarBodyTypes = (carsList: CarDetail[]): string[] => {
    const carsBodyTypesList: string[] = Array.from(new Set(carsList.map((carData: CarDetail) => carData.bodyType)));
    return Array.from(new Set(carsBodyTypesList));
}
export const CarList: FC = () => {
    const [carsData, setCarsData] = useState<CarDetail[] | []>([]);
    const [filteredCarsData, setFilteredCarsData] = useState<CarDetail[] | []>([]);
    const [carBodyTypes, setCarBodyTypes] = useState<string[]>([]);
    useEffect(() => {
        fetchCars()
        .then((data: CarDetail[]) => {
            setCarsData(data);
            setFilteredCarsData(data);
            const carBodyTypesList: string[] = getCarBodyTypes(data);
            setCarBodyTypes(carBodyTypesList);
        })
        .catch((e) => console.log("Error:", e));
    }, []);

    return (
        <main>
            <CarBodyTypeFilter 
                carsData={carsData} 
                handleFilteredCarsData={setFilteredCarsData} 
                carBodyTypes={carBodyTypes} 
            />
            <Carousal slideToShow={filteredCarsData.length}>
                {filteredCarsData?.map((carData: CarDetail) => (
                    <CarDetailCard 
                        key={carData?.id}
                        id={carData?.id} 
                        modelName={carData?.modelName} 
                        bodyType={carData?.bodyType} 
                        modelType={carData?.modelType}  
                        imageUrl={carData?.imageUrl}
                    />
                ))}
            </Carousal>
        </main>
    )
}