export type Heading = "E" | "N" | "W" | "S";

export enum HeadingEnum {
    East = "E",
    North = "N",
    West = "W",
    South = "S"
}

export type Instructions = "L" | "R" | "M";

export class RoverState {
    xCoordinate: number = 0;
    yCoordinate: number = 0;
    currentHeading: HeadingEnum = HeadingEnum.North;
} 