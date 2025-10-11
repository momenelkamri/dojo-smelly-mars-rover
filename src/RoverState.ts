export type Heading = "E" | "N" | "W" | "S";
export type Instructions = "L" | "R" | "M";

export class RoverState {
    xCoordinate: number = 0;
    yCoordinate: number = 0;
    currentHeading: Heading = "N";
} 