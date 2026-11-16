
import { vehicles } from "./vehicles.js";

const SpecificBrand = vehicles.filter(vehicle => vehicle.brand === "Chery");

const VehicleById = vehicles.find(vehicle => vehicle.id === 1);

const AvailableVehicles = vehicles.filter(vehicle => vehicle.status === "Available");

const ValidPricing = vehicles.every(vehicle => vehicle.price > 0);

const OneVehicle = vehicles.some(vehicle => vehicle.status === "Available");

const AveragePrice = vehicles.reduce((acc, vehicle) => acc + vehicle.price, 0) / vehicles.length;

const TotalInventoryValue = vehicles.reduce((acc, vehicle) => acc + vehicle.price, 0);

const OnlyVehicleBrand = vehicles.map(vehicle => `${vehicle.brand} ${vehicle.model}`);


const getVehiclesByPriceRange = (min, max) => {
    return vehicles.filter(vehicle => vehicle.price >= min && vehicle.price <= max);
};

const getVehiclesByYear = (year) => {
    return vehicles.filter(vehicle => vehicle.year === year);
};

const getVehiclesByBrand = (brand) => {
    return vehicles.filter(vehicle => vehicle.brand === brand);
};

const getMostExpensiveVehicle = () => {
    return vehicles.reduce((acc, vehicle) => {
        if (vehicle.price > acc.price) {
            return vehicle;
        }
        return acc;
    });
};

const getCheapestAvailableVehicle = () => {
    const available = vehicles.filter(vehicle => vehicle.status === "Available");

    if (available.length === 0) {
        return null;
    }

    return available.reduce((acc, vehicle) => {
        if (vehicle.price < acc.price) {
            return vehicle;
        }
        return acc;
    });
};

const getInventoryStatistics = () => {
    const totalVehicles = vehicles.length;

    const availableVehicles = vehicles.filter(vehicle => vehicle.status === "Available").length;

    const reservedVehicles = vehicles.filter(vehicle => vehicle.status === "Reserved").length;

    const soldVehicles = vehicles.filter(vehicle => vehicle.status === "Sold").length;

    const totalInventoryValue = vehicles.reduce((acc, vehicle) => acc + vehicle.price, 0);

    const averagePrice = totalInventoryValue / totalVehicles;

    return {
        totalVehicles,
        availableVehicles,
        reservedVehicles,
        soldVehicles,
        averagePrice,
        totalInventoryValue
    };
};


console.log("Part 2 - Functional Array Methods");

console.log(SpecificBrand);
console.log(VehicleById);
console.log(AvailableVehicles);
console.log(ValidPricing);
console.log(OneVehicle);
console.log(AveragePrice);
console.log(TotalInventoryValue);
console.log(OnlyVehicleBrand);


console.log("Part 3 - Advanced Operations");

console.log(getVehiclesByPriceRange(80000, 120000));
console.log(getVehiclesByYear(2024));
console.log(getVehiclesByBrand("Chery"));
console.log(getMostExpensiveVehicle());
console.log(getCheapestAvailableVehicle());
console.log(getInventoryStatistics());
