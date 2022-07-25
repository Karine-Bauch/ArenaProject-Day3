
import { diff } from "./kata15";
// Tu peux utiliser ce fichier pour tester ton code.
// À toi de t'organiser pour tester comme tu le souhaites.
// Mais attention, l'heure tourne...
console.log(diff([1, 5, 9, 10], [1, 3, 5, 9, 15]));

console.log(diff([1, 5, 9, 10, 13], [1, 3, 5, 9, 15]));
// process.stdout.write(diff([1, 5, 9, 10], [1, 3, 5, 9, 15]) + '\n'); // expected [10]

// PS : la commande suivante peut être utile...
// tsc src/kata00/kata00.test.ts --outDir dist && node dist/kata00.test.js
