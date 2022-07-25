
export type ReverseNumbersFn = (numbers: number[]) => number[];

export const reverseNumbers: ReverseNumbersFn = (numbers: number[]) => {
    
    let length: number = 0;
    while (numbers[length] !== undefined) {
        length++;
    };

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
