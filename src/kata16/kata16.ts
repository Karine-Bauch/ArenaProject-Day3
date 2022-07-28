
export type CallbackFn = (elem: any) => boolean;
export type DiffFn = (arrA: string[], arrB: string[]) => string[];
export type IsAlphaFn = (str: string) => boolean;

const arrLength = (arr: unknown[]) => {
  let length: number = 0;
  while (arr[length] !== undefined) {
      length++;
  };
  return length;
};

const find = (arr: unknown[], cb: CallbackFn) => {

  let length: number = arrLength(arr);

  let i: number = 0;
  let findedElem: any;
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
};

const push = (arr: any, x: number, item: any) => {
    arr[x] = item;
    return arr;
};

const filter = (arr: unknown[], cb: CallbackFn) => {

    let length: number = arrLength(arr);

    let iArr: number = 0;
    let iFilter: number = 0;
    let filteredArr: unknown[] = [];
    while (iArr <= length - 1) {
        if (cb(arr[iArr])) {
            push(filteredArr, iFilter, arr[iArr]); // Je réutilise le kata06 (pushFn)
            iFilter++;
        }
        iArr++;
    }

    return filteredArr;
};

const split = (str: string) => {
    let i: number = 0;
    let strArr: string[] = [];
    while (str[i] !== undefined) {
        strArr[i] = str[i];
        i++;
    };
    return strArr;
};

const diff: DiffFn = (arrA: string[], arrB: string[]) => {
    return filter(arrA, (itemA) => find(arrB, (itemB) => (itemA === itemB))) as string[]; 
    // Avec filter, je boucle sur chaque élément de arrA.
    // Avec find, je prend cet item et cherche si je le trouve dans arrB
    // Avec !find, je récupère les éléments qui n'ont pas été toruvé dans arrB
};

export const isAlpha: IsAlphaFn = (str: string) => {

    let strArr: string[] = split(str);
    let alpha: string = 'abcdefghijklmnopqrstuvwxyzéèàêëùïöABCDEFGHIJKLMNOPQRSTUVWXYZÉÈÀÊËÙÏÖ'; // Plus pratique de l'écrire ainsi et d'ensuite utiliser le fn split :p
    let alphaArr: string[] = split(alpha);

    // console.log(strArr, alphaArr);
    // console.log(diff(strArr, alphaArr));

    let comparedStr = diff(strArr, alphaArr);

    if (arrLength(comparedStr) === arrLength(strArr)) {
        return true;
    }
    return false;
};