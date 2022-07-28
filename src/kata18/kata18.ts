
export type CallbackFn = (elem: string) => boolean;
export type CompareNFn = (strA: string, strB: string, n: number) => number;

const arrLength = (arr: unknown[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
};

const push = (arr: any, x: number, item: any) => {
    arr[x] = item;
    return arr;
}

const filter = (arr: string[], cb: CallbackFn) => {

    let length: number = arrLength(arr);

    let iArr: number = 0;
    let iFilter: number = 0;
    let filteredArr: string[] = [];
    while (iArr <= length - 1) {
        if (cb(arr[iArr])) {
            push(filteredArr, iFilter, arr[iArr]); // Je réutilise le kata06 (pushFn)
            iFilter++;
        }
        iArr++;
    }

    return filteredArr;
};

const find = (arr: string[], cb: CallbackFn) => {

    let length: number = arrLength(arr);
  
    let i: number = 0;
    let findedElem: string = '';
    while (i <= length - 1) {
        // process.stdout.write(cb(arr[i]) + '\n');
        // process.stdout.write(arr[i] + '\n');
  
        if (cb(arr[i])) {
            findedElem = arr[i]; // Je réutilise le kata06 (pushFn)
            return findedElem;
        }
        i++;
    }
    return findedElem;
  };

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

const diff = (strA: string[], strB: string[]) => {
    return filter(strA, (itemA) => !find(strB, (itemB) => (itemA === itemB))) as string[];
};


export const compareN: CompareNFn = (strA: string, strB: string, n: number) => {
    
    let arrSplicedStrA: string[] = split(slice(strA, n));
    let arrSplicedStrB: string[] = split(slice(strB, n));

    console.log(arrSplicedStrA);
    console.log(arrSplicedStrB);

    return arrLength(diff(arrSplicedStrA, arrSplicedStrB));

};