let input = document.querySelector('input[type="number"]')
let output = document.querySelector("p span")
fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_R2LeyJKSHS3OT24UsHGXKTmfgVy7BhsIPhRsGS8O").then((result) => {
    return result.json()
}).then((currency) => {
    return currency.data
}).then((currency) => {
    input.addEventListener("keyup", () => {
        output.innerHTML = Math.round(currency["EGP"].value * input.value * 100) / 100
    })
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
        }
    })
})