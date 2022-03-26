function convert_currency(from, to, amount) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
        .then(resp => resp.json())
        .then((data) => {
        document.getElementById('convert').innerHTML = "Voici la conversion en " + to +" : " + data.rates[to];
    });

}
