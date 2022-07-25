export type SplitFn = (str: string) => string[];

export const split: SplitFn = (str: string) => {
    let iStr: number = 0;
    let iArr: number = 0;
    let strArr: string[] = [];
    while (str[iStr] !== undefined) {
        strArr[iArr] = str[iStr];
        iStr++
        iArr++;
    };
    return strArr;

    /* Methode avec push mais interdit me semble-t-il
    let i: number = 0;
    let strArr: string[] = [];
    while (str[i] !== undefined) {
        strArr.push(str[i]);
        i++;
    };
    return strArr;
    */
}
