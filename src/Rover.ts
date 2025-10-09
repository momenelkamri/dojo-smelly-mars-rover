import { RoverState } from "./RoverState";
  
export class Rover {
  
    constructor(startingPosition: string = "") {
      const startingPositionParts = startingPosition.split(" ");
      if (startingPositionParts.length >= 3) {
        this.roverState.xx = parseInt(startingPositionParts[0], 10);
        this.roverState.yy = parseInt(startingPositionParts[1], 10);
        this.roverState.dd = startingPositionParts[2][0];
      }
    }
  
    public go(instructions: string): void {
      for (let i = 0; i < instructions.length; i++) {
        const currentInstruction = instructions[i];
        if (currentInstruction === "L") {
          if (this.roverState.dd === "E")      { this.roverState.dd = "N"; }
          else if (this.roverState.dd === "N") { this.roverState.dd = "W"; }
          else if (this.roverState.dd === "W") { this.roverState.dd = "S"; }
          else if (this.roverState.dd === "S") { this.roverState.dd = "E"; }
        } else if (currentInstruction === "R") {
          if (this.roverState.dd === "E")      { this.roverState.dd = "S"; }
          else if (this.roverState.dd === "S") { this.roverState.dd = "W"; }
          else if (this.roverState.dd === "W") { this.roverState.dd = "N"; }
          else if (this.roverState.dd === "N") { this.roverState.dd = "E"; }
        } else if (currentInstruction === "M") {
          if (this.roverState.dd === "E")      { this.roverState.xx++; }
          if (this.roverState.dd === "S")      { this.roverState.yy--; }
          if (this.roverState.dd === "W")      { this.roverState.xx--; }
          if (this.roverState.dd === "N")      { this.roverState.yy++; }
        }
      }
    }
  
    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.roverState.xx} ${this.roverState.yy} ${this.roverState.dd}`;
    }

    public pos(): string {
      return this.XYD;
    }

    private roverState: RoverState = new RoverState();
  }