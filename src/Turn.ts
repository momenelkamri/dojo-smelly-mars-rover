import { Heading, RoverState } from "./RoverState";


export class Turn {
    public turnLeft(roverState: RoverState): void {
      const nextTurns: Record<Heading, Heading> = {
        [Heading.East]: Heading.North,
        [Heading.North]: Heading.West,
        [Heading.West]: Heading.South,
        [Heading.South]: Heading.East,
      };

      this.turn(nextTurns, roverState);
    }

    public turnRight(roverState: RoverState): void {
      const nextTurns: Record<Heading, Heading> = {
        [Heading.East]: Heading.South,
        [Heading.South]: Heading.West,
        [Heading.West]: Heading.North,
        [Heading.North]: Heading.East,
      };

      this.turn(nextTurns, roverState);
    }

    

    private turn(nextTurns: Record<Heading, Heading>, roverState: RoverState): void {
      const current = roverState.getCurrentHeading();
      roverState.updateCurrentHeading(nextTurns[current]);
    }
}