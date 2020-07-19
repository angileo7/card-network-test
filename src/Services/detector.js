/*test_Cases [
    ["341234567890123", "American Express"],
    ["371234567890123", "American Express"],
    ["38123456789012", "Diners Club"],
    ["5112345678901245", "MasterCard"],
    ["5212345678901245", "MasterCard"],
    ["5312345678901245", "MasterCard"],
    ["5412345678901245", "MasterCard"],
    ["5512345678901245", "MasterCard"],
    ["4512345678901", "Visa"],
    ["4512345678901345", "Visa"],
    ["4512345678901345345", "Visa"],

];*/

const creditCard = (card_number) => {
    if (card_number.match(RegExp("^(34|37)(\\d{13})$"))) {
        return "American Express"
    } else if (card_number.match(RegExp("^(38|39)(\\d{12})$"))) {
        return "Diners Club"
    } else if (card_number.match(RegExp("^(4)(\\d{12}|\\d{15}|\\d{18})$"))) {
        return "Visa"
    } else if (card_number.match(RegExp("^(51|52|53|54|55)(\\d{14})$"))) {
        return "MasterCard"
    }
}

export default creditCard;
