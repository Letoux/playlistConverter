import chalk from 'chalk';
import fs, { access } from 'fs';
import { clientId, playlistName, qcm } from './commands/commands';
import { program } from 'commander';

const log = console.log;


program
    .command('')
    .description('Démarrage normal du converter')
    .action(() => stepperQuestions())

program
    .command('no-cache')
    .description('Démarrage du converter sans donnée préalable')
    .action(() => {
        cleanCache()
        stepperQuestions()
    })

program
    .command('clean-cache')
    .description("Nettoyage du cache de l'utilisateur")
    .action(() => cleanCache())

// Définir une séquence de questions
const stepperQuestions = async () => {
  const answers: Record<string, any> = {};

  log(chalk.greenBright(fs.readFileSync("./misc/asciiArtV2.txt", 'utf-8'), '\n'))
  log(chalk.bold.blue.bgGreenBright("   playlistConverter est un outil qui permet de convertir une playlist Apple Music en une playlist Spotify   "));
  

  await clientId(answers)
  await playlistName(answers)
  await qcm(answers)

  // Résumé
  console.log('\nRésumé de vos réponses :', answers);
};

// Nettoyage du cache utilisateur
const cleanCache = () => {

}