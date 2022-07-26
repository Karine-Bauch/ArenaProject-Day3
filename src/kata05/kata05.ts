
export type ReverseStringFn = (str: string) => string;

const strLength = (str: string) => {
    let length: number = 0;
    while (str[length] !== undefined) {
        length++;
    };
    return length;
};

export const reverseString: ReverseStringFn = (str: string) => {
    
    // j'utilise le kata03 (strLength)
    let length: number = strLength(str);
    // process.stdout.write(length + '\n')

    let reverseStr: string = '';
    let i: number = length - 1;
    // process.stdout.write(str[i] + '\n')
    while (str[i] !== undefined) {
        // process.stdout.write(str[i] + '\n')
        reverseStr += str[i];
        i--;
    };
    return reverseStr;
}
