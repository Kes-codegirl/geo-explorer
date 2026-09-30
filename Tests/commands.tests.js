const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log("Iniciando os testes do Geo-Explorer...\n");

try {
    // Teste 1: Verificar se o arquivo JSON existe
    const dataPath = path.join(__dirname, '../data/trilhas.json');
    const arquivoExiste = fs.existsSync(dataPath);
    assert.strictEqual(arquivoExiste, true, "Erro: O arquivo trilhas.json não foi encontrado.");
    console.log("✅ Teste 1 passou: Base de dados encontrada.");

   // Teste 2: Verificar se a estrutura dos dados está correta
    const dados = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    assert.ok(dados.mitologia, "Erro: A trilha de 'mitologia' está faltando.");
    console.log("✅ Teste 2 passou: Estrutura das trilhas validada com sucesso.");

    console.log("\n🎉 Todos os testes passaram!");
} catch (erro) {
    console.error("❌ Falha no teste:", erro.message);
}