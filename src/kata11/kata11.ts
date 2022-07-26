export type CallbackFn = (elem: unknown) => boolean;
export type FilterFn = (arr: unknown[], cb: CallbackFn) => unknown[];

export const isEqual: CallbackFn = (elem: unknown) => {
    if (elem as number <= 5) {
        return true;
    } else {
        return false;
    }
} 

const arrLength = (arr: unknown[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
}

const push = (arr: any, x: number, item: any) => {
    arr[x] = item;
    return arr;
}

export const filter: FilterFn = (arr: unknown[], cb: CallbackFn) => {

    let length: number = arrLength(arr);

    let iArr: number = 0;
    let iFilter: number = 0;
    let filteredArr: unknown[] = [];
    while (iArr <= length - 1) {
        if (cb(arr[iArr])) {
            push(filteredArr, iFilter, arr[iArr]); // Je réutilise le kata06 (pushFn)
            iFilter++;
        }
        iArr++;
    }

    return filteredArr;
}
