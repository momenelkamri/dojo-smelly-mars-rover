import { IInstructionStrategy } from "./Move";
import { Heading, RoverState } from "./RoverState";

export class TurnRight implements IInstructionStrategy {
    public update(roverState: RoverState): void {
        const nextTurns: Record<Heading, Heading> = {
        [Heading.East]: Heading.South,
        [Heading.South]: Heading.West,
        [Heading.West]: Heading.North,
        [Heading.North]: Heading.East,
        };

        this.turn(nextTurns, roverState);
    }
    
    private turn(nextTurns: Record<Heading, Heading>, roverState: RoverState): void {
      const current = roverState.currentHeading;
      roverState.currentHeading = nextTurns[current];
    }
}