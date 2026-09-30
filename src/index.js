const trilhaCmd = require('./commands/trilha');
const desafioCmd = require('./commands/desafio');
const certificadoCmd = require('./commands/certificado');

// Pega os argumentos passados no terminal (ignorando 'node' e 'index.js')
const args = process.argv.slice(2);
const comando = args[0];

function exibirAjuda() {
    console.log(`
🌍 Bem-vindo ao Geo-Explorer! 🌍
Uso: node src/index.js <comando> [argumentos]

Comandos disponíveis:
  trilha <tecnologia> <nivel>    - Mostra o plano de estudos
  desafio <tecnologia> <nivel>   - Gera um desafio de código
  certificado <nome> <tecnologia> - Gera um certificado de conclusão
    `);
}

switch (comando) {
    case 'trilha':
        trilhaCmd(args[1], args[2]);
        break;
    case 'desafio':
        desafioCmd(args[1], args[2]);
        break;
    case 'certificado':
        certificadoCmd(args[1], args[2]);
        break;
    default:
        exibirAjuda();
        break;
}