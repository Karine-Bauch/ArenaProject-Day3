export type PrintStringFn = (str: unknown) => void;

export const printString: PrintStringFn = (str: unknown) => {
    // Si seulement tu pouvais faire un console.log(str)
    // ça serait beaucoup plus simple...
    // Mais ici, on n'aime pas la simplicité.
    // À toi de jouer :)
    //console.log(str); // << interdit.

    process.stdout.write(str + '\n');
}
