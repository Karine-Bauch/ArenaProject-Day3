export type CallbackFn = (elem: unknown) => unknown;
export type ForEachFn = (arr: unknown[], cb: CallbackFn) => void;

export const callback: CallbackFn = (elem: unknown) => {
    let mapedElem: number = elem as number * 2;
} 

export const forEach: ForEachFn = (arr: unknown[], cb: CallbackFn) => {

    // j'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i:number = 0;
    while (i <= length - 1) {
        cb(arr[i]) // je réutilise le kata01 pour afficher un string
        i++;
    }
}
