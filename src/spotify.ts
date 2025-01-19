// export const askPermission = (answers: Record<string, any>) => {
//     // https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI

//     const clientId = answers.clientId;
//     const redirectUri = 'http://localhost:3000/callback'; // Rediriger vers une URL après l'autorisation
//     const scopes = [
//       'playlist-modify-public',
//       'playlist-modify-private',
//     ];

//     const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes.join(' '))}&redirect_uri=${encodeURIComponent(redirectUri)}`;
//     }


import express from 'express';
import open from 'open';

export const askPermission = (answers: Record<string, any>) => {

    const app = express();
    const port = 3000;

    // Paramètres de l'application Spotify
    const redirectUri = `http://localhost:${port}/callback`;

    // Construire l'URL d'autorisation Spotify
    const scopes = ['playlist-modify-private'];
    console.log(`==${encodeURIComponent(scopes.join(' '))}==`);
    
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${answers.clientId}&redirect_uri=${encodeURIComponent(
        redirectUri
    )}&scope=${encodeURIComponent(scopes.join(' '))}`;

    // Démarrer le processus OAuth
    app.get('/', async (req, res) => {
        console.log('Redirection vers la page d\'autorisation Spotify...');
        await open(authUrl); // Ouvre l'URL dans le navigateur
        res.send('Veuillez autoriser l\'application Spotify dans votre navigateur.');
    });

    // Callback pour capturer le code
    app.get('/callback', (req, res) => {
        const { code } = req.query;

        if (!code) {
            res.send('Erreur : aucun code d\'autorisation fourni.');
            return;
        }

        console.log('Code d\'autorisation reçu :', code);
        res.send('Autorisation réussie ! Vous pouvez fermer cette page.');
    });

    // Lancer le serveur local
    app.listen(port, () => {
        console.log(`Serveur local en écoute sur http://localhost:${port}`);
    });
}