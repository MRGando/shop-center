export function addOrder(items, setItems, values, totalPrice, setTotalPrice) {
    setItems([...items, { ...values, orderId: items.length + 1 }]);
    setTotalPrice(totalPrice + values.price);
}

export function currencyFormat(amount) {
    const splited = amount.toString().split("");
    switch (splited.length) {
        case 4:
            splited.splice(1, 0, ",");
            break;
        case 5:
            splited.splice(2, 0, ",");
            break;
        case 6:
            splited.splice(3, 0, ",");
            break;
        case 7:
            splited.splice(1, 0, ",");
            splited.splice(5, 0, ",");
            break;
        case 8:
            splited.splice(2, 0, ",");
            splited.splice(6, 0, ",");
            break;
        case 9:
            splited.splice(3, 0, ",");
            splited.splice(7, 0, ",");
            break;
        case 10:
            splited.splice(1, 0, ",");
            splited.splice(5, 0, ",");
            splited.splice(9, 0, ",");
            break;
        case 11:
            splited.splice(2, 0, ",");
            splited.splice(6, 0, ",");
            splited.splice(10, 0, ",");
            break;
    }
    return splited.join("");
}