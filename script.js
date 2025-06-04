const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 4.7
    


    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }



    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}
function changeCurrency(){
    const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector(".currency-img")



    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src="./assets/estados-unidos (1) 1.png"
    
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro" 
        currencyImage.src="assets/Design sem nome 3.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina" 
        currencyImage.src="assets/libra 1.png"
    }
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
