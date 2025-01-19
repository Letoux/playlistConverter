import chalk from 'chalk';
import fs, { access } from 'fs';
import { clientId, clientSecret, qcm } from './commands/commands';
import { program } from 'commander';
import { loadResponses } from './commands/commands';
import { askPermission } from './spotify';

const log = console.log;

program
    .description('Démarrage normal du converter, création du cache si inexistant')
    .action(() => stepperQuestions())

program
    .command('--no-cache')
    .description('Démarrage du converter sans donnée préalable')
    .action(() => {
        cleanCache()
        stepperQuestions()
    })

program
    .command('--clean-cache')
    .description("Nettoyage du cache de l'utilisateur")
    .action(() => cleanCache())

// Définir une séquence de questions
const stepperQuestions = async () => {
  const answers: Record<string, any> = loadResponses();

  log(chalk.greenBright(fs.readFileSync("./misc/asciiArtV2.txt", 'utf-8'), '\n'))
  log(chalk.bold.blue.bgGreenBright("   playlistConverter est un outil qui permet de convertir une playlist Apple Music en une playlist Spotify   "));
  
  await clientId(answers)
  await clientSecret(answers)
  await qcm(answers)

  askPermission(answers)

  // Résumé
//   console.log('\nRésumé de vos réponses :', answers);
};

// Nettoyage du cache utilisateur
const cleanCache = () => {
    console.log('TOTO');

}

program.parse(process.argv);