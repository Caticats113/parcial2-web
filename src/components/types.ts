interface Data {
    name: string,
    engName: string,
    bodyType: string,
    mass: {
        massExponent: number,
        massValue: number
    },
    gravity: number,
    density: number,
}

export type { Data }