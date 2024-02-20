async function fetchAddressAndPopulateTable(cep) {
    try {
        const response = await fetch(`https://mhuzrkfcqi.execute-api.sa-east-1.amazonaws.com/addresses?postalCode=${cep}`);
        const { results } = await response.json();
        // console.log(results);
       

        if (results && results.length > 0) {
            // Limpa a tabela antes de inserir os novos dados
            const tbody = document.querySelector('.box-registros tbody');
            tbody.innerHTML = '';

            results.forEach(result => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${result.postalCode}</td>
                    <td>${result.street}</td>
                    <td>${result.facadeNumber}</td>
                    <td>${result.complement !== undefined ? result.complement : ''} ${result.complement2 !== undefined ? result.complement2 : ''}</td>
                    <td>${result.neighborhood}</td>
                    <td>${result.city}</td>
                    <td>${result.state}</td>
                    <td>${decodeURIComponent(result.feasibilityType)}</td>
                    <td>${result.ucsResidential}</td>
                    <td>${result.ucsCommercial}</td>
                `;
                tbody.appendChild(row);
            });
        } else {
            console.log('Nenhum resultado encontrado para o CEP informado.');
        }
    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
}







