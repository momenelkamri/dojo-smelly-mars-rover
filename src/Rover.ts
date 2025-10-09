import { RoverState } from "./RoverState";
  
export class Rover {
  
    constructor(startingPosition: string = "") {
      const startingPositionParts = startingPosition.split(" ");
      if (startingPositionParts.length >= 3) {
        this.roverState.xx = parseInt(startingPositionParts[0], 10);
        this.roverState.yy = parseInt(startingPositionParts[1], 10);
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
          if (this.roverState.currentHeading === "E")      { this.roverState.xx++; }
          if (this.roverState.currentHeading === "S")      { this.roverState.yy--; }
          if (this.roverState.currentHeading === "W")      { this.roverState.xx--; }
          if (this.roverState.currentHeading === "N")      { this.roverState.yy++; }
        }
      }
    }
  
    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.currentHeading}`;
    }

    public pos(): string {
      return this.XYD;
    }

    private roverState: RoverState = new RoverState();
  }