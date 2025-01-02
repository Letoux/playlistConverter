"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
// Créer une instance de Commander
const program = new commander_1.Command();
// Ajouter une commande qui utilise Inquirer
program
    .command('ask')
    .description('Demander une information à l\'utilisateur')
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    // Utiliser Inquirer pour demander une entrée utilisateur
    const answers = yield inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'userResponse',
            message: 'Quelle est votre première réponse ?'
        }
    ]);
    // Afficher la réponse de l'utilisateur
    console.log(`Vous avez répondu : ${answers.userResponse}`);
}));
// Parser les arguments de la ligne de commande
program.parse(process.argv);
