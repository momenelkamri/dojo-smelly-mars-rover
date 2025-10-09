import { RoverState } from "./RoverState";
  
export class Rover {
  
    constructor(startingPosition: string = "") {
      const startingPositionParts = startingPosition.split(" ");
      if (startingPositionParts.length >= 3) {
        this.rs.xx = parseInt(startingPositionParts[0], 10);
        this.rs.yy = parseInt(startingPositionParts[1], 10);
        this.rs.dd = startingPositionParts[2][0];
      }
    }
  
    public go(instructions: string): void {
      for (let i = 0; i < instructions.length; i++) {
        const currentInstruction = instructions[i];
        if (currentInstruction === "L") {
          if (this.rs.dd === "E")      { this.rs.dd = "N"; }
          else if (this.rs.dd === "N") { this.rs.dd = "W"; }
          else if (this.rs.dd === "W") { this.rs.dd = "S"; }
          else if (this.rs.dd === "S") { this.rs.dd = "E"; }
        } else if (currentInstruction === "R") {
          if (this.rs.dd === "E")      { this.rs.dd = "S"; }
          else if (this.rs.dd === "S") { this.rs.dd = "W"; }
          else if (this.rs.dd === "W") { this.rs.dd = "N"; }
          else if (this.rs.dd === "N") { this.rs.dd = "E"; }
        } else if (currentInstruction === "M") {
          if (this.rs.dd === "E")      { this.rs.xx++; }
          if (this.rs.dd === "S")      { this.rs.yy--; }
          if (this.rs.dd === "W")      { this.rs.xx--; }
          if (this.rs.dd === "N")      { this.rs.yy++; }
        }
      }
    }
  
    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.rs.xx} ${this.rs.yy} ${this.rs.dd}`;
    }

    public pos(): string {
      return this.XYD;
    }

    private rs: RoverState = new RoverState();
  }