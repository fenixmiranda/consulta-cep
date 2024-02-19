
    let resultadosCEP = []; // Array para armazenar os resultados dos CEPs pesquisados

    function consultarCEP() {
        const cep = document.getElementById('cepInput').value;
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            limparTabela(); // Limpa a tabela antes de adicionar novos resultados
            resultadosCEP.push(data); // Adiciona o resultado do CEP ao array
            preencherTabela(); // Chama a função para preencher a tabela com os resultados
            limparCampos(); // Limpa os campos de entrada
        })
        .catch(error => console.error('Erro ao consultar o CEP:', error));
    }

    function preencherTabela() {
        const tableBody = document.querySelector('.tablesorter tbody');
        resultadosCEP.forEach(cepData => {
            const newRow = tableBody.insertRow();
            for (const key in cepData) {
                if (cepData.hasOwnProperty(key)) {
                    const cell = newRow.insertCell();
                    cell.textContent = cepData[key];
                }
            }
        });
    }

    function limparTabela() {
        const tableBody = document.querySelector('.tablesorter tbody');
        tableBody.innerHTML = ''; // Limpa o conteúdo atual da tabela
    }

    function limparCampos() {
        document.getElementById('cepInput').value = '';
        document.getElementById('numeroInput').value = '';
    }

