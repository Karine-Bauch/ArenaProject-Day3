
import { forEach } from "./kata09";
import { printString } from "./kata00";

// Tu peux utiliser ce fichier pour tester ton code.
// À toi de t'organiser pour tester comme tu le souhaites.
// Mais attention, l'heure tourne...
forEach(['ceci', 'est', 'un', 'test'], printString);
// J'ai dû passer ma fonction en unknown pour ne pas avoir d'erreur de type.
// Il y avait conflit entre string (du kata00) et unknown (de la consigne kata09)

forEach([5, 7, 6, 25], printString);
// Test avec des n ombres, cela fonctionne également

// PS : la commande suivante peut être utile...
// tsc src/kata00/kata00.test.ts --outDir dist && node dist/kata00.test.js
