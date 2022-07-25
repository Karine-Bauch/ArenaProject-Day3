
export type ReverseStringFn = (str: string) => string;

export const reverseString: ReverseStringFn = (str: string) => {
    
    // j'utilise le kata03 (strLength)
    let length: number = 0;
    while (str[length] !== undefined) {
        length++;
    };
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
