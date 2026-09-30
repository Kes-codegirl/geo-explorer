const fs = require('fs');
const path = require('path');

module.exports = function(tecnologia, nivel) {
    if (!tecnologia || !nivel) {
        console.log("❌ Erro: Deves informar a tecnologia e o nível. Ex: node src/index.js desafio python avancado");
        return;
    }

    const dataPath = path.join(__dirname, '../../data/trilhas.json');
    const dados = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (dados[tecnologia] && dados[tecnologia][nivel]) {
        console.log(`\n💻 Desafio de Código - ${tecnologia.toUpperCase()} (${nivel}):`);
        console.log(`👉 ${dados[tecnologia][nivel].desafio}\n`);
    } else {
        console.log("❌ Erro: Tecnologia ou nível não encontrados para gerar um desafio.");
    }
};