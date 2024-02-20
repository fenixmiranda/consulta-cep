async function fetchAddressAndPopulateTable(cep) {
    try {
        const response = await fetch(`https://ag97sao0aa.execute-api.sa-east-1.amazonaws.com/addresses?postalCode=${cep}`);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
}