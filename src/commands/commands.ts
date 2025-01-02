import inquirer from "inquirer";

export const clientId = async (answers: Record<string, any>) => {
    // Étape 1 : Demander le clientID Spotify
    const clientId = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Renseignez votre clientId Spotify?',
        },
    ]);
    answers.name = clientId.name;

}

export const playlistName = async (answers: Record<string, any>) => {

    // Étape 2 : Demander un âge
    const ageAnswer = await inquirer.prompt([
        {
            type: 'number',
            name: 'age',
            message: `Bonjour ${answers.name}, quel âge avez-vous ?`,
        },
    ]);
    answers.age = ageAnswer.age;

}

export const qcm = async (answers: Record<string, any>) => {

    // Étape 3 : Proposer un choix
    const colorAnswer = await inquirer.prompt([
        {
            type: 'list',
            name: 'color',
            message: 'Quelle est votre couleur préférée ?',
            choices: ['Rouge', 'Vert', 'Bleu'],
        },
    ]);
    answers.color = colorAnswer.color;

}
