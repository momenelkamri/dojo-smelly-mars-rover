import { Heading, RoverState } from "./RoverState";

export class RoverStateFactory {

    public create(startingPosition: string): RoverState {
        
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
            const xCoordinate = parseInt(startingPositionParts[0], 10);
            const yCoordinate = parseInt(startingPositionParts[1], 10);
            const currentHeading = myHeading;
            
            const roverState = new RoverState(xCoordinate, yCoordinate, currentHeading);

            return roverState;
        }

        return new RoverState(0, 0, Heading.North);
    } 
}