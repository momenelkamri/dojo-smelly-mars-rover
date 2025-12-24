import { IInstructionStrategy } from "./Move";
import { Instructions, RoverState } from "./RoverState";

export class InstructionsHandler {
    private readonly strategies: IInstructionStrategy[] 

    constructor({ strategies }: { strategies: IInstructionStrategy[] }) {
        this.strategies = strategies
    }
    
    // Execute a single instruction: turn left/right or move forward
    public executeInstruction(instruction: Instructions, roverState: RoverState): void {
      for (const strategy of this.strategies) {
        if (strategy.canUpdate(instruction)) {
          strategy.update(roverState);
          break;
        }
      }
    }
}