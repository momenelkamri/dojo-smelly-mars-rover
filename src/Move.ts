import { Heading, RoverState, Instructions } from './RoverState';

export interface IInstructionStrategy {
    update(roverState: RoverState): void;
    canUpdate(instruction: Instructions): boolean;
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
      const newXCoordinate = roverState.xCoordinate + moveStep.x;
      const newYCoordinate = roverState.yCoordinate + moveStep.y;

      roverState.setCoordinate({ x: newXCoordinate, y: newYCoordinate });
    }

    public canUpdate(instruction: Instructions): boolean {
      return instruction === Instructions.M;
    }

}