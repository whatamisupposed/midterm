class Computer {
    constructor(make, model, capacity) {
        this.make = make;
        this.model = model;
        this.driveCapacity = capacity;
        this.batteryPercent = 100; // Default battery percent to 100 when the computer is turned on
        this.status = false; // Default status is off
    }

    getBatteryPercent() {
        return this.batteryPercent + "%";
    }

    getStatus() {
        return this.status ? "ON" : "OFF";
    }
}

// Example usage:
const myComputer = new Computer("Brand", "Model XYZ", 512); // Creating an instance of Computer
console.log(myComputer.getBatteryPercent()); // Output: 100%
console.log(myComputer.getStatus()); // Output: OFF
