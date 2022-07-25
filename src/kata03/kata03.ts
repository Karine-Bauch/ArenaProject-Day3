export type StrLengthFn = (str: string) => number;

export const strLength: StrLengthFn = (str: string) => {
    let length: number = 0;
    while (str[length] !== undefined) {
        length++;
    };
    return length;
}
