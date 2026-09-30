const fs = require('fs');
const path = require('path');

module.exports = function(tecnologia, nivel) {
    if (!tecnologia || !nivel) {
        console.log("❌ Erro: Deves informar a tecnologia e o nível. Ex: node src/index.js trilha javascript iniciante");
        return;
    }

    // Caminho para aceder ao nosso ficheiro JSON
    const dataPath = path.join(__dirname, '../../data/trilhas.json');
    const dados = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    if (dados[tecnologia] && dados[tecnologia][nivel]) {
        console.log(`\n📚 Trilha de Estudos: ${tecnologia.toUpperCase()} (${nivel})`);
        console.log("Módulos:");
        dados[tecnologia][nivel].modulos.forEach((mod, index) => {
            console.log(`  ${index + 1}. ${mod}`);
        });
        console.log("\n");
    } else {
        console.log("❌ Erro: Tecnologia ou nível não encontrados na nossa base de dados.");
    }
};