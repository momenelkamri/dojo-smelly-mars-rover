import { RoverState,Instructions, Heading } from "./RoverState";
import { InstructionsHandler } from "./instructionsHandler";

export class Rover {
    // Internal state of the rover
    private roverState: RoverState = new RoverState();
    private instructionHandler: InstructionsHandler;
  
    // Initialize rover with starting position (x, y, heading)
    constructor(startingPosition: string, instructionHandler: InstructionsHandler ) {
      this.instructionHandler = instructionHandler;

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
        this.instructionHandler.executeInstruction(instruction as Instructions, this.roverState);
      }
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