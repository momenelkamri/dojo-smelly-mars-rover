import { InstructionsHandler } from '../src/instructionsHandler';
import { Move } from '../src/Move';
import { Rover } from '../src/Rover';
import { RoverStateFactory } from '../src/RoverStateFactory';
import { TurnLeft } from '../src/TurnLeft';
import { TurnRight } from '../src/TurnRight';

describe("MarsRoverShould", () => {
   const instructionHandler = new InstructionsHandler({ strategies: [ new Move(), new TurnLeft(), new TurnRight() ]  });
   const roverStateFactory = new RoverStateFactory(); 
     
    test.each([
      ["1 2 N", "", "1 2 N"],
      ["1 2 N", "L", "1 2 W"],
      ["1 2 W", "L", "1 2 S"],
      ["1 2 S", "L", "1 2 E"],
      ["1 2 E", "L", "1 2 N"],
      ["1 2 N", "R", "1 2 E"],
      ["1 2 E", "R", "1 2 S"],
      ["1 2 S", "R", "1 2 W"],
      ["1 2 W", "R", "1 2 N"],
      ["1 2 N", "M", "1 3 N"],
      ["1 2 E", "M", "2 2 E"],
      ["1 2 S", "M", "1 1 S"],
      ["1 2 W", "M", "0 2 W"],
      ["1 2 N", "LMLMLMLMM", "1 3 N"],
      ["3 3 E", "MMRMMRMRRM", "5 1 E"]
    ])(
      "start at '%s', with instructions '%s' => '%s'",
      (startingPosition, instructions, expectedOutput) => {
        const roverState = roverStateFactory.create(startingPosition);
        const rover = new Rover(instructionHandler, roverState);
        rover.go(instructions);        
        expect(rover.getCoordinatesWithHeading()).toBe(expectedOutput);
      }
    );
  });