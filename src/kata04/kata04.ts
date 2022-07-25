export type SplitFn = (str: string) => string[];

export const split: SplitFn = (str: string) => {
    let iStr = 0;
    let iArr = 0;
    let strArr: string[] = [];
    while (str[iStr] !== undefined) {
        strArr[iArr] = str[iStr];
        iStr++
        iArr++;
    };
    return strArr;

    /* Methode avec push mais interdit me semble-t-il
    let i = 0;
    let strArr: string[] = [];
    while (str[i] !== undefined) {
        strArr.push(str[i]);
        i++;
    };
    return strArr;
    */
}
