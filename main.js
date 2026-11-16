import { vehicles } from "./vehicles.js";

function formatVehicle(vehicle) {
    const { id, brand, model, year, price, mileage, color, status } = vehicle;

    return `${id} - ${brand} ${model} (${year}) | ${price} NIS | ${mileage} km | ${color} | ${status}`;
}

function displayVehicles(...vehicleList) {
    for (const vehicle of vehicleList) {
        console.log(formatVehicle(vehicle));
    }
}

function findVehicleById(id) {
    return vehicles.find(vehicle => vehicle.id === id);
}

const inventoryCopy = [...vehicles];

let totalVehicles = 0;

for (const vehicle of inventoryCopy) {
    totalVehicles++;
}

console.log("Vehicle Inventory:");
displayVehicles(...inventoryCopy);

console.log(`Total Vehicles: ${totalVehicles}`);

console.log("Vehicle with ID 3:");
console.log(findVehicleById(3));