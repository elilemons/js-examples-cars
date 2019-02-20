class Car {
    constructor(name) {
        this.name = name;
        this.speed = 0;
        this.driveModes = {
            drive: "drive",
            reverse: "reverse",
            parked: "parked"
        };
    }

    accelerate() {
        this.speed++;
    }

    decelerate() {
        this.speed--;
    }

    getDriveMode() {
        if (this.speed < 0) {
            return this.driveModes.reverse;
        } else if (this.speed > 0) {
            return this.driveModes.drive;
        } else {
            return this.driveModes.parked;
        }
    }
}

class SUV extends Car {
    constructor(name, isSnowing) {
        super();
        this.name = name;
        this.type = "SUV";
        this.driveModes["fourwheel"] = "four wheel drive";
        this.isSnowing = isSnowing;
    }

    getSUVDriveMode() {
        if (this.isSnowing) {
            return this.driveModes.fourwheel;
        } else {
            return this.getDriveMode();
        }
    }
}

let lisasCar = new Car("Allistair");

for (let i = 0; i < 50; i++) {
    lisasCar.accelerate();
}

console.log(`Lisa's car is going ${lisasCar.speed}MPH. She is in ${lisasCar.getDriveMode()} mode.`);

for (let i = 50; i > 0; i--) {
    lisasCar.decelerate();
}

console.log(`Lisa's car is going ${lisasCar.speed}MPH. She is in ${lisasCar.getDriveMode()} mode.`);

let katiesCar = new SUV("Betty", true);

console.log(`Katie's ${katiesCar.type} is going ${katiesCar.speed}MPH. She is in ${katiesCar.getSUVDriveMode()} mode.`);