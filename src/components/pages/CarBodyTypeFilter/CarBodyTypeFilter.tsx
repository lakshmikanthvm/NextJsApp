import React, { FC, useState } from "react";
import { Flex, TabNavItem } from "vcc-ui";
import { CarDetail } from "../CarDetailCard/CarDetailCard";

export const CarBodyTypeFilter: FC<{ carsData: CarDetail[], handleFilteredCarsData: (filteredCars: CarDetail[]) => void, carBodyTypes: string[] }> = ({ 
    carsData, 
    handleFilteredCarsData,
    carBodyTypes
}) => {
    const [carBodyType, setCarBodyType] = useState<string>('');
    const carsCountByBodyType = (bodyType: string): number => {
        const filteredCars = carsData?.filter((carData: CarDetail) => carData.bodyType === bodyType);
        return filteredCars?.length;
    }

    const handleSelectedCarBodyType = (selectedBodyType: string) => {
        setCarBodyType(selectedBodyType);
        let filteredCarsList = [];
        if(selectedBodyType === '') {
            filteredCarsList = [...carsData];
        } else {
            filteredCarsList = carsData.filter((carData: CarDetail) => carData.bodyType === selectedBodyType);
        }
        handleFilteredCarsData(filteredCarsList);
    }

    
    return (
        <Flex extend={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Flex extend={{ margin: '10px', textAlign: 'justify' }}>
                <TabNavItem 
                    onClick={() => handleSelectedCarBodyType('')} 
                    isActive={carBodyType === ''}
                >
                    ALL ({ carsData?.length})
                </TabNavItem>
            </Flex>
            {carBodyTypes?.map((item: string) => (
                <Flex key={item} extend={{ margin: '10px', textAlign: 'justify' }}>
                    <TabNavItem 
                        key={item} 
                        onClick={() => handleSelectedCarBodyType(item)} 
                        isActive={carBodyType === item}
                    >
                        {item.toLocaleUpperCase()} ({ carsCountByBodyType(item) })
                    </TabNavItem>
                </Flex>))}
        </Flex>
    );
};