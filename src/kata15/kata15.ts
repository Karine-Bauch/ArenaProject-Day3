
export type DiffFn = (arrA: number[], arrB: number[]) => number[];



export const diff: DiffFn = (arrA: number[], arrB: number[]) => {
        
    let lengthA: number = 0;
    while (arrA[lengthA] !== undefined) {
        lengthA++;
    };

    let lengthB: number = 0;
    while (arrB[lengthB] !== undefined) {
        lengthB++;
    };

    let a: number = 0;
    let b: number = 0;
    let nonCommon: number[] = [];
    let nc: number = 0;
    
   
    while (a <= (lengthA - 1)) {
        while (b <= lengthB -1) {
            while (nonCommon[nc] !== undefined) {
                if (arrB[b] !== arrA[a]) {
                    nonCommon[nc] = arrA[a];
                };
                nc++;
            };
            nc = 0;
            b++;
        };
        b = 0;
        a++;
    };   
    
    return nonCommon;
};
