
export type PushFn = (arr: any) => void;

const arrLength = (arr: unknown[]) => {
    let length: number = 0;
    while (arr[length] !== undefined) {
        length++;
    };
    return length;
};

export const push: PushFn = (arr: any) => {
    
    let length: number = arrLength(arr);

    arr[length] = 'Poisson rouge'
    return arr;
}
