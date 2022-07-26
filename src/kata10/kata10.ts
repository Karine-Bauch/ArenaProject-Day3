export type CallbackFn = (elem: unknown) => unknown;
export type MapFn = (arr: unknown[], cb: CallbackFn) => unknown[];

const arrLength = (arr: unknown[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
}

export const doble: CallbackFn = (elem: unknown) => {
    return elem as number * 2;
} 

const push = (arr: any, x: number, item: any) => {
    arr[x] = item;
    return arr;
}

export const map: MapFn = (arr: unknown[], cb: CallbackFn) => {
    
    let length: number = arrLength(arr);

    let i: number = 0;
    let mapedArr: unknown[] = [];
    while (i <= length - 1) {
        // process.stdout.write(arr[i] + '');
        push(mapedArr, i, cb(arr[i]));
        i++;
    }

    return mapedArr;
}
