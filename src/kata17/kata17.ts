export type DiffFn = (arrA: string[], arrB: string[]) => string[];
export type ConcatNFn = (strA: string, strB: string, n: number) => string;

const slice = (str: string, n: number) => {
    let i: number = 0;
    let arrStr: string[] = split(str);
    let newStr: string = '';
    
    while (i <= n - 1) {
        newStr += arrStr[i];
        i++;
    };
    return newStr;
};

const split = (str: string) => {
    let i: number = 0;
    let strArr: string[] = [];
    while (str[i] !== undefined) {
        strArr[i] = str[i];
        i++;
    };
    return strArr;
};

export const concatN: ConcatNFn = (strA: string, strB: string, n: number) => {
    // strA + slice(strB, index n-1)
    let newStrB: string = slice(strB, n);
    let strConcat: string = strA + newStrB;

    return strConcat;
};
