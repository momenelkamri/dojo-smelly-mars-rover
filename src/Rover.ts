import { RoverState,Instructions, Heading } from "./RoverState";

export class Rover {
  
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
      const instructions = {
        L: () => this.turnLeft(),
        R: () => this.turnRight(),
        M: () => this.headingMove()
      };
      
      instructions[instruction]();
    }
    
    private turnLeft(): void {
      const nextTurns: Record<Heading, Heading> = {
        [Heading.East]: Heading.North,
        [Heading.North]: Heading.West,
        [Heading.West]: Heading.South,
        [Heading.South]: Heading.East,
      };

      this.turn(nextTurns);
    }

    private turnRight(): void {
      const nextTurns: Record<Heading, Heading> = {
        [Heading.East]: Heading.South,
        [Heading.South]: Heading.West,
        [Heading.West]: Heading.North,
        [Heading.North]: Heading.East,
      };

      this.turn(nextTurns);
    }

    private turn(nextTurns: Record<Heading, Heading>): void {
      const current = this.roverState.currentHeading;
      this.roverState.currentHeading = nextTurns[current];
    }

    // Move one step in the current heading direction
    private headingMove(): void {
      const headingMoveStep: Record<Heading, { x: number; y: number }> = {
        [Heading.East]: { x: 1, y: 0 },
        [Heading.South]: { x: 0, y: -1 },
        [Heading.West]: { x: -1, y: 0 },
        [Heading.North]: { x: 0, y: 1 },
      };
      const moveStep = headingMoveStep[this.roverState.currentHeading];
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