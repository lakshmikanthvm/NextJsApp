import { CarDetail } from "../src/components/pages/CarDetailCard/CarDetailCard";

export const fetchCars = async (id?: string | string[]): Promise<CarDetail[]> => {
    const carsList: CarDetail[] = await fetch("../api/cars.json", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((e) => { 
            console.log("Error:", e);
            return null;
        });
    if(!id) return carsList;
    return carsList.filter((car: CarDetail) => car.id === id);
}