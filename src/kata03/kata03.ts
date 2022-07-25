export type StrLengthFn = (str: string) => number;

export const strLength: StrLengthFn = (str: string) => {

    // Pour moi pas de différence avec le kata02
    let length: number = 0;
    while (str[length] !== undefined) {
        length++;
    };
    return length;
}
