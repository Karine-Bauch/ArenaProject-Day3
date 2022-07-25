
export type CallbackFn = (elem: unknown) => boolean;
export type DiffFn = (arrA: number[], arrB: number[]) => number[];

const filter = (arr: unknown[], cb: CallbackFn) => {

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

const find = (arr: unknown[], cb: CallbackFn) => {

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

export const diff: DiffFn = (arrA: number[], arrB: number[]) => {    
    return filter(arrA, (itemA) => !find(arrB, (itemB) => itemA === itemB)) as number[];
};
