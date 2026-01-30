import { IInstructionStrategy } from "./Move";
import { Heading, Instructions, RoverState } from "./RoverState";


export class TurnLeft implements IInstructionStrategy {
    public update(roverState: RoverState): void {
        const nextTurns: Record<Heading, Heading> = {
            [Heading.East]: Heading.North,
            [Heading.North]: Heading.West,
            [Heading.West]: Heading.South,
            [Heading.South]: Heading.East,
        };

        this.turn(nextTurns, roverState);
    }

    public canUpdate(instruction: Instructions): boolean {
        return instruction === Instructions.L;
    }

    public turn(nextTurns: Record<Heading, Heading>, roverState: RoverState): void {    
        const current = roverState.getCurrentHeading();
        roverState.updateCurrentHeading(nextTurns[current]);
    }
}