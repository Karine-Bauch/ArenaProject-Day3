export type CallbackFn = (elem: unknown) => boolean;
export type FilterFn = (arr: unknown[], cb: CallbackFn) => unknown[];

export const isEqual: CallbackFn = (elem: unknown) => {
    if (elem as number <= 5) {
        return true;
    } else {
        return false;
    }
} 

export const filter: FilterFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i: number = 0;
    let filteredArr: unknown[] = [];
    while (i <= length - 1) {
        if (cb(arr[i])) {
            filteredArr.push(arr[i]) // Je réutilise le kata06 (pushFn)
        }
        i++;
    }

    return filteredArr;
}
