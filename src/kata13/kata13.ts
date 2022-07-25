export type CallbackFn = (elem: unknown) => boolean;
export type SomeFn = (arr: unknown[], cb: CallbackFn) => boolean;

export const isEqual: CallbackFn = (elem: unknown) => {
    if (elem as number === 8) {
        return true;
    } else {
        return false;
    }
} 

export const some: SomeFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i: number = 0;
    
    while (i <= length - 1) {
        // process.stdout.write(cb(arr[i]) + '\n');
        // process.stdout.write(arr[i] + '\n');

        if (cb(arr[i])) {
            return true;
        }
        i++;
    }

    return false;
}
