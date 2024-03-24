// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Truck);
// It comes 0 because enum starting counting from 0
// Here, we're just checking what number the car category got in our list
