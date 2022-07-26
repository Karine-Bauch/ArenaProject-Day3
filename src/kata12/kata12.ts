export type CallbackFn = (elem: unknown) => boolean;
export type FindFn = (arr: unknown[], cb: CallbackFn) => unknown;

export const superior: CallbackFn = (elem: unknown) => {
    if (elem as number > 8) {
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

export const find: FindFn = (arr: unknown[], cb: CallbackFn) => {

    let length: number = arrLength(arr);

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
