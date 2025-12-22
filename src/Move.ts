import { Heading, RoverState } from './RoverState';

export interface IInstructionStrategy {
    update(roverState: RoverState): void;
}

export class Move implements IInstructionStrategy {
    public update(roverState: RoverState): void {
      const headingMoveStep: Record<Heading, { x: number; y: number }> = {
        [Heading.East]: { x: 1, y: 0 },
        [Heading.South]: { x: 0, y: -1 },
        [Heading.West]: { x: -1, y: 0 },
        [Heading.North]: { x: 0, y: 1 },
      };
      const moveStep = headingMoveStep[roverState.currentHeading];
      roverState.xCoordinate += moveStep.x;
      roverState.yCoordinate += moveStep.y;
    }
}