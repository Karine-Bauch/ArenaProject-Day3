export type CallbackFn = (elem: unknown) => boolean;
export type EveryFn = (arr: unknown[], cb: CallbackFn) => boolean;



export const isEqual: CallbackFn = (elem: unknown) => {
    if (elem as number === 5) {
        return true;
    } else {
        return false;
    }
} 

export const every: EveryFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata09 (forEach)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i: number = 0;
    let isConditionOk: boolean = true;
    while (i <= length - 1) {
        // process.stdout.write(cb(arr[i]) + '\n');
        // process.stdout.write(arr[i] + '\n');

        if (!cb(arr[i])) {
            isConditionOk = false;
            return isConditionOk;
        }
        i++;
    }

    return isConditionOk;
}
