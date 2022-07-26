export type CallbackFn = (elem: unknown) => unknown;
export type ForEachFn = (arr: unknown[], cb: CallbackFn) => void;

export const printString: CallbackFn = (elem: unknown) => {
    process.stdout.write(elem as string + '\n');
}

const arrLength = (arr: unknown[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
}

export const forEach: ForEachFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata02 (arrLength)
    let length: number = arrLength(arr);

    let i:number = 0;
    while (i <= length - 1) {
        cb(arr[i] as string) // je réutilise le kata01 pour afficher un string
        i++;
    }
}
