
export type ReverseNumbersFn = (numbers: number[]) => number[];

const arrLength = (arr: number[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
}

export const reverseNumbers: ReverseNumbersFn = (numbers: number[]) => {
    
    // J'utilise le kata02 (arrLength)
    let length: number = arrLength(numbers);

    let i:number = 0;
    let iReverse: number = length - 1;
    let reverseNumbersArr: number[] = [];
    // process.stdout.write(iReverse + '\n');
    while (iReverse !== -1) {
        reverseNumbersArr[i] = numbers[iReverse];
        // process.stdout.write(i + '\n');
        // process.stdout.write(iReverse + '\n');
        i++;
        iReverse--;
    }
    return reverseNumbersArr;
}
