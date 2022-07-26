
export type IndexOfFn = (arr: unknown[], elem: unknown) => number;

const arrLength = (arr: unknown[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
}

export const indexOf: IndexOfFn = (arr: unknown[], elem: unknown) => {
    
    // j'utilise le kata02 (arrLength)
    let length: number = arrLength(arr);

    let i:number = 0;
    let index: number = -1
    while (i <= length - 1) {
        if (arr[i] === elem) {
            index = i;
            return index; // si on veut que la recherche s'arrête au premier élément trouvé. Sinon il renverra l'index du dernier élément trouvé.
        };
        i++;
    }
    return index;
}
