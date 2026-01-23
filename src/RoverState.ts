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
    // coordinate: { x: number; y: number } = { x: 0, y: 0 };

    xCoordinate: number;
    yCoordinate: number;
    currentHeading: Heading;

    constructor(xCoordinate: number, yCoordinate: number, currentHeading: Heading) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.currentHeading = currentHeading;
    }

    public setCoordinate(coordinate: Coordinate): void {
        this.xCoordinate = coordinate.x;
        this.yCoordinate = coordinate.y;
    }
} 