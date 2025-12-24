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

export class RoverState {
    xCoordinate: number;
    yCoordinate: number;
    currentHeading: Heading;

    constructor(xCoordinate: number, yCoordinate: number, currentHeading: Heading) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.currentHeading = currentHeading;
    }
} 