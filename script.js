function btnAdd(price) {
    var soLuong = parseInt(document.getElementById("so-luong").value) + 1;
    document.getElementById("so-luong").value = soLuong;



    var newPrice = price * soLuong;
    console.log(newPrice);

    const numberFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });


    // const format = newPrice.toString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    document.getElementById("tong-tien").innerHTML = String(numberFormat.format(newPrice));
    console.log(numberFormat.format(newPrice)); // 1,234,567,890

}
// var element = document.getElementById("so-luong");
// var value = element.innerHTML;
// parseInt(value) += parseInt(value);
// console.log(value);




function btnMinutes(min, price) {
    var soLuong = parseInt(document.getElementById("so-luong").value) - 1;

    if (soLuong < parseInt(min)) {
        soLuong = min;
    }
    document.getElementById("so-luong").value = soLuong;

    var newPrice = price * soLuong;

    const numberFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    console.log(newPrice);
    document.getElementById("tong-tien").innerHTML = String(numberFormat.format(newPrice));
}

function submitBtn() {
    var nameInput = document.getElementById('name');

}