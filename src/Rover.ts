import { RoverState, Heading, Instructions } from "./RoverState";

export class Rover {
  
    constructor(startingPosition: string) {
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
        M: () => this.headingMove()
      };
      
      instructions[instruction]();
    }

    private turn(direction: "L" | "R"): void {
      const turns = {
        L: { E: "N", N: "W", W: "S", S: "E" },
        R: { E: "S", S: "W", W: "N", N: "E" },
      };

      const current = this.roverState.currentHeading;
      this.roverState.currentHeading = turns[direction][current] as Heading;
    }

    private turnLeft(): void {
      this.turn("L");
      // const leftTurn: Record<Heading, Heading> = { E: "N", N: "W", W: "S", S: "E" };
      // this.roverState.currentHeading = leftTurn[this.roverState.currentHeading as Heading];
    }
    
    private turnRight(): void {
      this.turn("R");
      // const rightTurn: Record<Heading, Heading> = { E: "S", S: "W", W: "N", N: "E" };
      // this.roverState.currentHeading = rightTurn[this.roverState.currentHeading as Heading];
    } 

    private headingMove(): void {
      const headingMoveStep = { 
        E: { x: 1, y: 0 }, 
        S: { x: 0, y: -1 },
        W: { x: -1, y: 0 }, 
        N: { x: 0, y: 1 } 
      };
      const moveStep = headingMoveStep[this.roverState.currentHeading as Heading];
      this.roverState.xCoordinate += moveStep.x;
      this.roverState.yCoordinate += moveStep.y;
    }


    public get COORDINATES_WITH_HEADING(): string {
      return `${this.roverState.xCoordinate} ${this.roverState.yCoordinate} ${this.roverState.currentHeading}`;
    }

    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }

    private roverState: RoverState = new RoverState();
  }