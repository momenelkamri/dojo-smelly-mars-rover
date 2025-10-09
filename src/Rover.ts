import { RoverState } from "./RoverState";
  
export class Rover {
  
    constructor(startingPosition: string = "") {
      const startingPositionParts = startingPosition.split(" ");
      if (startingPositionParts.length >= 3) {
        this.roverState.xCoordinate = parseInt(startingPositionParts[0], 10);
        this.roverState.yCoordinate = parseInt(startingPositionParts[1], 10);
        this.roverState.currentHeading = startingPositionParts[2][0];
      }
    }
  
    public go(instructions: string): void {
      for (let i = 0; i < instructions.length; i++) {
        const currentInstruction = instructions[i];
        if (currentInstruction === "L") {
          if (this.roverState.currentHeading === "E")      { this.roverState.currentHeading = "N"; }
          else if (this.roverState.currentHeading === "N") { this.roverState.currentHeading = "W"; }
          else if (this.roverState.currentHeading === "W") { this.roverState.currentHeading = "S"; }
          else if (this.roverState.currentHeading === "S") { this.roverState.currentHeading = "E"; }
        } else if (currentInstruction === "R") {
          if (this.roverState.currentHeading === "E")      { this.roverState.currentHeading = "S"; }
          else if (this.roverState.currentHeading === "S") { this.roverState.currentHeading = "W"; }
          else if (this.roverState.currentHeading === "W") { this.roverState.currentHeading = "N"; }
          else if (this.roverState.currentHeading === "N") { this.roverState.currentHeading = "E"; }
        } else if (currentInstruction === "M") {
          if (this.roverState.currentHeading === "E")      { this.roverState.xCoordinate++; }
          if (this.roverState.currentHeading === "S")      { this.roverState.yCoordinate--; }
          if (this.roverState.currentHeading === "W")      { this.roverState.xCoordinate--; }
          if (this.roverState.currentHeading === "N")      { this.roverState.yCoordinate++; }
        }
      }
    }
  
    public G(z: string): void {
      this.go(z[0]);
    }

    public get COORDINATES_WITH_HEADING(): string {
      return `${this.roverState.xCoordinate} ${this.roverState.yCoordinate} ${this.roverState.currentHeading}`;
    }

    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }

    private roverState: RoverState = new RoverState();
  }