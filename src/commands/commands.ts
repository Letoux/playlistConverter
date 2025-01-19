import inquirer from "inquirer";
import fs from "fs/promises"

const FILE_PATH = './responses.json';

// Charger les réponses précédentes (si elles existent)
export const loadResponses = async (): Promise<Record<string, any>> => {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Retourner un objet vide si le fichier n'existe pas
        //   console.log('Aucune réponse précédente trouvée.');
        return {};
    }
};

// Sauvegarder les réponses dans le fichier JSON
const saveResponses = async (data: Record<string, any>) => {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
        //   console.log('Réponses sauvegardées dans responses.json.');
    } catch (error) {
        console.error('Erreur lors de la sauvegarde des réponses :', error);
    }
};


export const clientId = async (answers: Record<string, any>) => {
    // Étape 1 : Demander le clientID Spotify
    const clientId = await inquirer.prompt([
        {
            type: 'input',
            name: 'token',
            message: 'Renseignez votre clientId Spotify: ',
            validate: (input: string) => {
                if (input.trim() === '' && !answers.token) {
                    return 'Le CLient ID ne peut pas être vide. Veuillez entrer une valeur.';
                }
                return true; // La validation passe
            },
        },
    ]);
    if (clientId.token) {
        answers.clientId = clientId.token;
    }
    saveResponses(answers)
}

export const clientSecret = async (answers: Record<string, any>) => {

    // Étape 2 : Demander un âge
    const ageAnswer = await inquirer.prompt([
        {
            type: 'input',
            name: 'clientSecret',
            message: `Renseignez le Client Secret lié au token que vous avez renseigné: `,
        },
    ]);
    answers.age = ageAnswer.clientSecret;
    saveResponses(answers)
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
    saveResponses(answers)
}
