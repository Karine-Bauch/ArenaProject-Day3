export type CallbackFn = (elem: unknown) => boolean;
export type FindFn = (arr: unknown[], cb: CallbackFn) => unknown;

export const superior: CallbackFn = (elem: unknown) => {
    if (elem as number > 8) {
        return true;
    } else {
        return false;
    }
} 

export const find: FindFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i: number = 0;
    let findedElem: unknown;
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
}
