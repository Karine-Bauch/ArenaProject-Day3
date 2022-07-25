export type CallbackFn = (elem: unknown) => unknown;
export type MapFn = (arr: unknown[], cb: CallbackFn) => unknown[];

export const doble: CallbackFn = (elem: unknown) => {
    return elem as number * 2;
} 

export const map: MapFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i: number = 0;
    let mapedArr: unknown[] = [];
    while (i <= length - 1) {
        // process.stdout.write(arr[i] + '');
        mapedArr[i] = cb(arr[i]) // Je réutilise le kata06 (pushFn)
        i++;
    }

    return mapedArr;
}
