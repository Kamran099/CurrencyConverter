const dropList = document.querySelectorAll(".drop-list select");

for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        let selected;
        if (i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        } else if (i == 1) {
            selected = currency_code == "GBP" ? "selected" : "";
        }
        let optionTag = ` <option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // select options of various currencies
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}