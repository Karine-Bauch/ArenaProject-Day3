export type ArrLengthFn = (arr: number[]) => number;

export const arrLength: ArrLengthFn = (arr: number[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
}
