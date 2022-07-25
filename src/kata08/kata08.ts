
export type IndexOfFn = (arr: unknown[], elem: unknown) => number;

export const indexOf: IndexOfFn = (arr: unknown[], elem: unknown) => {
    
    // j'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    let i:number = 0;
    let index: number = -1
    while (i <= length - 1) {
        if (arr[i] === elem) {
            index = i;   
        };
        i++;
    }
    return index;
}
