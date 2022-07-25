export type PrintNumberFn = (nbr: number) => void;

export const printNumber: PrintNumberFn = (nbr: number) => {
    // Si seulement tu pouvais faire un console.log(str)
    // ça serait beaucoup plus simple...
    // Mais ici, on n'aime pas la simplicité.
    // À toi de jouer :)
    //console.log(str); // << interdit.
    let nbrString: string = nbr + '';
    process.stdout.write(nbrString);
}
