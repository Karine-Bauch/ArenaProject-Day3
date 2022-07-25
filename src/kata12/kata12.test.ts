
import { filter, isEqual } from "./kata12";
// Tu peux utiliser ce fichier pour tester ton code.
// À toi de t'organiser pour tester comme tu le souhaites.
// Mais attention, l'heure tourne...
process.stdout.write(filter([2, 5, 6, 7], isEqual) + '\n');

// PS : la commande suivante peut être utile...
// tsc src/kata00/kata00.test.ts --outDir dist && node dist/kata00.test.js
