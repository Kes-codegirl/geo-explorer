module.exports = function(nome, tecnologia) {
    if (!nome || !tecnologia) {
        console.log("❌ Erro: Deves informar o teu nome e a tecnologia. Ex: node src/index.js certificado 'O Teu Nome' javascript");
        return;
    }

    console.log(`
====================================================
🎓 CERTIFICADO DE CONCLUSÃO 🎓
====================================================
Certificamos que

           ${nome.toUpperCase()}

concluiu com êxito a trilha de exploração 
na tecnologia: ${tecnologia.toUpperCase()}.

Parabéns pela dedicação e excelente trabalho!
====================================================
    `);
};