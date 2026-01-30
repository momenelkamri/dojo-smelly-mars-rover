import { RoverState, Instructions } from './RoverState';
import { InstructionsHandler } from "./instructionsHandler";

export class Rover {
    // Internal state of the rover
    private roverState: RoverState;
    private instructionHandler: InstructionsHandler;
  
    // Initialize rover with starting position (x, y, heading)
    constructor(instructionHandler: InstructionsHandler, roverState: RoverState ) {
      this.instructionHandler = instructionHandler;
      this.roverState = roverState;
    }

    // Process a string of instructions (L, R, M)
    public go(instructions: Instructions | string): void {   
      for (const instruction of instructions) {
        this.instructionHandler.executeInstruction(instruction as Instructions, this.roverState);
      }
    }

    // Return the current coordinates and heading as a formatted string
    public get COORDINATES_WITH_HEADING(): string {
      const currentCoordinates = this.roverState.getCoordinate();
      return `${currentCoordinates.x} ${currentCoordinates.y} ${this.roverState.currentHeading}`;
    }

    // Public method to get the current coordinates and heading
    public getCoordinatesWithHeading(): string {
      return this.COORDINATES_WITH_HEADING;
    }
  }