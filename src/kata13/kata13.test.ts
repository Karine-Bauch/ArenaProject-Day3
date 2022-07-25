
import { some, isEqual } from "./kata13";
// Tu peux utiliser ce fichier pour tester ton code.
// À toi de t'organiser pour tester comme tu le souhaites.
// Mais attention, l'heure tourne...
process.stdout.write(some([2, 5, 8, 10, 65, 23], isEqual) + '\n');

process.stdout.write(some([2, 5, 10, 65, 23], isEqual) + '\n');

// PS : la commande suivante peut être utile...
// tsc src/kata00/kata00.test.ts --outDir dist && node dist/kata00.test.js
