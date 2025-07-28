
export interface SpireCharacterList {
    ironclad: SpireCharacter,
    silent: SpireCharacter,
    defect: SpireCharacter,
    watcher: SpireCharacter
}

export interface GenericSpireChallenge {
    challenges: string[],
    uniqueChallenges: SpireUniqueChallenge[]
}

export interface SpireCharacter extends GenericSpireChallenge {
    intro: string,
    imageName: string
}

export interface SpireUniqueChallenge {
    challengeName: string,
    challenges: string[]
}