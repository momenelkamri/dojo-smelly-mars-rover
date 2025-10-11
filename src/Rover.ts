import { RoverState, Heading, Instructions } from "./RoverState";

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

    public go(instructions: Instructions | string): void {
      for (const instruction of instructions) {
        this.executeInstruction(instruction as Instructions);
      }
    }

    private executeInstruction(instruction: Instructions): void {
      const instructions = {
        L: () => this.turnLeft(),
        R: () => this.turnRight(),
        M: () => this.moveForward()
      };
      
      instructions[instruction]();
    }

    private turnLeft(): void {
      const leftTurn: Record<Heading, Heading> = { E: "N", N: "W", W: "S", S: "E" };
      this.roverState.currentHeading = leftTurn[this.roverState.currentHeading as Heading];
    }
    
    private turnRight(): void {
      const rightTurn: Record<Heading, Heading> = { E: "S", S: "W", W: "N", N: "E" };
      this.roverState.currentHeading = rightTurn[this.roverState.currentHeading as Heading];
    } 

    private moveForward(): void {
      const moveStep = { 
        E: { x: 1, y: 0 }, 
        S: { x: 0, y: -1 },
        W: { x: -1, y: 0 }, 
        N: { x: 0, y: 1 } 
      };
      const step = moveStep[this.roverState.currentHeading as Heading];
      this.roverState.xCoordinate += step.x;
      this.roverState.yCoordinate += step.y;
    }


    public get COORDINATES_WITH_HEADING(): string {
      return `${this.roverState.xCoordinate} ${this.roverState.yCoordinate} ${this.roverState.currentHeading}`;
    }

    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }

    private roverState: RoverState = new RoverState();
  }