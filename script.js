const precos = {
    ant_lata: 5, ant_cx: 50, skol_lata: 5, skol_cx: 50, ams_lata: 5, ams_cx: 50,
    c2l: 14, clata: 5, p3l: 12, gua: 10, fanta: 5, cac: 12, cig: 10, ski: 2.5
};

function mudar(id, val) {
    let input = document.getElementById(id);
    let total = parseInt(input.value) + val;
    if (total >= 0) {
        input.value = total;
        atualizarTotal();
    }
}

function atualizarTotal() {
    let soma = 0;
    for (let item in precos) {
        let qtd = parseInt(document.getElementById(item).value);
        soma += qtd * precos[item];
    }
    document.getElementById('res').innerText = soma.toFixed(2).replace('.', ',');
}

function zap(numero) {
    let mensagem = "*NOVO PEDIDO - BAR DO TIO CHICO* 🍻\n\n";
    let temAlgo = false;

    for (let item in precos) {
        let qtd = document.getElementById(item).value;
        if (qtd > 0) {
            mensagem += `✅ ${item.toUpperCase()}: ${qtd}\n`;
            temAlgo = true;
        }
    }

    if (!temAlgo) return alert("Adicione itens ao seu pedido primeiro!");

    mensagem += `\n💰 *TOTAL: R$ ${document.getElementById('res').innerText}*`;
    
    let fone = (numero === 1) ? "5568992380864" : "5568992569482";
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(mensagem)}`, '_blank');
}