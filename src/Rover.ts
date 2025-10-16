import { RoverState, Heading, Instructions, HeadingEnum } from "./RoverState";

export class Rover {
  
    // Initialize rover with starting position (x, y, heading)
    constructor(startingPosition: string) {
      const startingPositionParts = startingPosition.split(" ");
      const MIN_STARTING_POSITION_PARTS = 3;

      // <string, HeadingEnum> = generics for Map
      const stringToHeadingEnum: Map<string, HeadingEnum> = new Map([
        ["E", HeadingEnum.East],
        ["N", HeadingEnum.North],
        ["W", HeadingEnum.West],
        ["S", HeadingEnum.South]
      ]);

      const myHeading = stringToHeadingEnum.get(startingPositionParts[2]);

      if (startingPositionParts.length >= MIN_STARTING_POSITION_PARTS) {
        this.roverState.xCoordinate = parseInt(startingPositionParts[0], 10);
        this.roverState.yCoordinate = parseInt(startingPositionParts[1], 10);
        this.roverState.currentHeading = myHeading || HeadingEnum.North;
      }
    }

    // Process a string of instructions (L, R, M)
    public go(instructions: Instructions | string): void {
      for (const instruction of instructions) {
        this.executeInstruction(instruction as Instructions);
      }
    }

    // Execute a single instruction: turn left/right or move forward
    private executeInstruction(instruction: Instructions): void {
      const left = "L";
      const right = "R";
      const instructions = {
        L: () => this.turn(left),
        R: () => this.turn(right),
        M: () => this.headingMove()
      };
      
      instructions[instruction]();
    }

    // Turn left or right based on current heading
    private turn(direction: "L" | "R"): void {
      const turns = {
        L: { E: "N", N: "W", W: "S", S: "E" },
        R: { E: "S", S: "W", W: "N", N: "E" },
      };

      const current = this.roverState.currentHeading;
      this.roverState.currentHeading = turns[direction][current] as HeadingEnum;
    }

    // Move one step in the current heading direction
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

    // Return the current coordinates and heading as a formatted string
    public get COORDINATES_WITH_HEADING(): string {
      return `${this.roverState.xCoordinate} ${this.roverState.yCoordinate} ${this.roverState.currentHeading}`;
    }

    // Public method to get the current coordinates and heading
    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }

    // Internal state of the rover
    private roverState: RoverState = new RoverState();
  }