export type SplitFn = (str: string) => string[];

export const split: SplitFn = (str: string) => {
    let i: number = 0;
    let strArr: string[] = [];
    while (str[i] !== undefined) {
        strArr[i] = str[i];
        i++;
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
