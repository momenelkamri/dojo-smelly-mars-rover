export enum Heading {
    East = "E",
    North = "N",
    West = "W",
    South = "S"
}

// export type Instructions = "L" | "R" | "M";

export enum Instructions {
    L = "L",
    R = "R",
    M = "M"
}

type Coordinate = {
    x: number;
    y: number;
};

export class RoverState {
    private coordinate: Coordinate;
    currentHeading: Heading;

    constructor(xCoordinate: number, yCoordinate: number, currentHeading: Heading) {
        this.coordinate = { 
            x: xCoordinate, 
            y: yCoordinate,
        };

        this.currentHeading = currentHeading;
    }

    public setCoordinate(coordinate: Coordinate): void {
        this.coordinate = coordinate;
    }

    public getCoordinate(): Coordinate {
        return this.coordinate;
    }
} 