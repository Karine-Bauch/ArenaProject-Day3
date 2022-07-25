
import { indexOf } from "./kata08";

// Tu peux utiliser ce fichier pour tester ton code.
// À toi de t'organiser pour tester comme tu le souhaites.
// Mais attention, l'heure tourne...
process.stdout.write(indexOf([2, 3, 4, 5, 6], 4) + '\n');

process.stdout.write(indexOf([2, 3, 4, 5, 6], 10) + '\n');

process.stdout.write(indexOf([2, 3, 4, 5, 6], '4') + '\n');


// PS : la commande suivante peut être utile...
// tsc src/kata00/kata00.test.ts --outDir dist && node dist/kata00.test.js
