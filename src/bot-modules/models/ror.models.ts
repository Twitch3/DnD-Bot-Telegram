import { SpireUniqueChallenge } from "./spire.models";
export interface RoRCharacterList {
  commando: RoRCharacter;
  huntress: RoRCharacter;
  bandit: RoRCharacter;
  mult: RoRCharacter;
  engineer: RoRCharacter;
  artificer: RoRCharacter;
  mercenary: RoRCharacter;
  rex: RoRCharacter;
  loader: RoRCharacter;
  acrid: RoRCharacter;
  captain: RoRCharacter;
  heretic: RoRCharacter;
}

export interface RoRCharacter {
  intro: string;
  imageName: string;
  challenges: string[];
}

export interface GenericRoRChallenge {
  challenges: string[];
  uniqueChallenges: SpireUniqueChallenge[];
}
