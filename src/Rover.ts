import { RoverState,Instructions, Heading } from "./RoverState";
import { TurnLeft } from "./TurnLeft";
import { TurnRight } from "./TurnRight";
import { Move } from "./Move";

export class Rover {
    // Internal state of the rover
    private roverState: RoverState = new RoverState();
  
    // Initialize rover with starting position (x, y, heading)
    constructor(startingPosition: string) {
      const startingPositionParts = startingPosition.split(" ");
      const MIN_STARTING_POSITION_PARTS = 3;

      // <string, HeadingEnum> = generics for Map
      const stringToHeadingEnum: Map<string, Heading> = new Map([
        ["E", Heading.East],
        ["N", Heading.North],
        ["W", Heading.West],
        ["S", Heading.South]
      ]);

      const myHeading = stringToHeadingEnum.get(startingPositionParts[2]) ?? Heading.North;

      if (startingPositionParts.length >= MIN_STARTING_POSITION_PARTS) {
        this.roverState.xCoordinate = parseInt(startingPositionParts[0], 10);
        this.roverState.yCoordinate = parseInt(startingPositionParts[1], 10);
        this.roverState.currentHeading = myHeading;
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
      const turnLeft = new TurnLeft();
      const turnRight = new TurnRight();
      const move = new Move();

      const instructions = {
        M: () => move.update(this.roverState),
        L: () => turnLeft.update(this.roverState),
        R: () => turnRight.update(this.roverState),
      };
      
      instructions[instruction]();
    }

    // Return the current coordinates and heading as a formatted string
    public get COORDINATES_WITH_HEADING(): string {
      return `${this.roverState.xCoordinate} ${this.roverState.yCoordinate} ${this.roverState.currentHeading}`;
    }

    // Public method to get the current coordinates and heading
    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }
  }