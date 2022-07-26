export type CallbackFn = (elem: unknown) => boolean;
export type EveryFn = (arr: unknown[], cb: CallbackFn) => boolean;



export const isEqual: CallbackFn = (elem: unknown) => {
    if (elem as number === 5) {
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

export const every: EveryFn = (arr: unknown[], cb: CallbackFn) => {

    let length: number = arrLength(arr);

    let i: number = 0;
    let isConditionOk: boolean = true;
    while (i <= length - 1) {

        if (!cb(arr[i])) {
            isConditionOk = false;
            return isConditionOk;
        }
        i++;
    }
    return isConditionOk;
}
