const readline = require("readline"); 

const response = fetch("https://cdn.moeda.info/api/latest.json", { 
    method: "GET"
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


rl.question("Digite o código de uma moeda: ", (res) => {
    getMoedaDados(response, res)
    rl.close();
});

async function getMoedaDados(api, b) { 
    const dados = await api.then((res) => res.json());
    const dataUpdate = new Date(dados.lastupdate);
    const dia = dataUpdate.toLocaleDateString("pt-BR");
    const hora = dataUpdate.toLocaleTimeString("pt-BR");
    const moeda = dados.rates[b];

    console.log(`A cotação do dia ${dia} às ${hora} foi ${moeda}`);
}