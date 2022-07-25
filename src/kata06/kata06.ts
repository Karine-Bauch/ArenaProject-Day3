
export type PushFn = (arr: any) => void;

export const push: PushFn = (arr: any) => {
    
    // J'utilise le kata02 (arrLength)
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };

    arr[length] = 'Poisson rouge'
    return arr;
}
