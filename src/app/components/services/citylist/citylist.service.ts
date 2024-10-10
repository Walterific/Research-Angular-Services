import { Injectable } from "@angular/core";

export interface CityList {
    id: string;
    city: string;
}

@Injectable({
    providedIn: 'root',
})

export class CityListService {
    private cities: CityList[] = [];

    addCity(id: string, city: string): void {
        this.cities.push({
            id,
            city
        });
    }

    getCities(): CityList[] {
        return this.cities;
    }
}