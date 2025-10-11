import { RoverState } from "./RoverState";
  
type Heading = "E" | "N" | "W" | "S";

export class Rover {
  
    constructor(startingPosition: string = "") {
      const startingPositionParts = startingPosition.split(" ");
      const MIN_STARTING_POSITION_PARTS = 3;
      
      if (startingPositionParts.length >= MIN_STARTING_POSITION_PARTS) {
        this.roverState.xCoordinate = parseInt(startingPositionParts[0], 10);
        this.roverState.yCoordinate = parseInt(startingPositionParts[1], 10);
        this.roverState.currentHeading = startingPositionParts[2][0] as Heading;
      }
    }
  
    public go(instructions: string): void {
      const validInstructions = ["L", "R", "M"];

      const leftTurn: Record<Heading, Heading> = { E: "N", N: "W", W: "S", S: "E" };
      const rightTurn: Record<Heading, Heading> = { E: "S", S: "W", W: "N", N: "E" };
      const moveStep = { 
        E: { x: 1, y: 0 }, 
        S: { x: 0, y: -1 }, 
        W: { x: -1, y: 0 }, 
        N: { x: 0, y: 1 } 
      };

      for (const instruction of instructions) {
        switch (instruction) {
          case "L":
            this.roverState.currentHeading = leftTurn[this.roverState.currentHeading as Heading];
            break;
          case "R":
            this.roverState.currentHeading = rightTurn[this.roverState.currentHeading as Heading];
            break;
          case "M":
            const step = moveStep[this.roverState.currentHeading as Heading];
            this.roverState.xCoordinate += step.x;
            this.roverState.yCoordinate += step.y;
            break;
        }
      }


      // for (let i = 0; i < instructions.length; i++) {
      //   const currentInstruction = instructions[i];
      //   if (currentInstruction === "L") {
      //     if (this.roverState.currentHeading === "E")      { this.roverState.currentHeading = "N"; }
      //     else if (this.roverState.currentHeading === "N") { this.roverState.currentHeading = "W"; }
      //     else if (this.roverState.currentHeading === "W") { this.roverState.currentHeading = "S"; }
      //     else if (this.roverState.currentHeading === "S") { this.roverState.currentHeading = "E"; }
      //   } else if (currentInstruction === "R") {
      //     if (this.roverState.currentHeading === "E")      { this.roverState.currentHeading = "S"; }
      //     else if (this.roverState.currentHeading === "S") { this.roverState.currentHeading = "W"; }
      //     else if (this.roverState.currentHeading === "W") { this.roverState.currentHeading = "N"; }
      //     else if (this.roverState.currentHeading === "N") { this.roverState.currentHeading = "E"; }
      //   } else if (currentInstruction === "M") {
      //     if (this.roverState.currentHeading === "E")      { this.roverState.xCoordinate++; }
      //     if (this.roverState.currentHeading === "S")      { this.roverState.yCoordinate--; }
      //     if (this.roverState.currentHeading === "W")      { this.roverState.xCoordinate--; }
      //     if (this.roverState.currentHeading === "N")      { this.roverState.yCoordinate++; }
      //   }
      // }
    }

    public get COORDINATES_WITH_HEADING(): string {
      return `${this.roverState.xCoordinate} ${this.roverState.yCoordinate} ${this.roverState.currentHeading}`;
    }

    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }

    private roverState: RoverState = new RoverState();
  }