class Product {
    constructor(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
}

class CopyBook extends Product {
    constructor(code, name, price, type) {
        super(code, name, price);
        this.type = type;
    }
}

class Pen extends Product {
    constructor(code, name, price, color) {
        super(code, name, price)
        this.color = color;
    }
}

let pens = [];

document.getElementById("addPen").addEventListener('click', () => {
    let code = document.getElementById("codePen").value;
    let name = document.getElementById("namePen").value;
    let color = document.getElementById("colorPen").value;
    let price = document.getElementById("pricePen").value;

    let pen = new Pen(code, name, color, price);

    pens.push(pen);
    restructureTablePen();
    document.getElementById("pricePen").value = "";
    document.getElementById("colorPen").value = "";
    document.getElementById("namePen").value = "";
    document.getElementById("codePen").value = "";
})


function restructureTablePen() {
    let tableBody = document.getElementById('tablePen');
    tableBody.innerHTML = "";
    for (let i = 0; i < pens.length; i++) {
        let code = pens[i].code
        let name = pens[i].name
        let color = pens[i].color
        let price = pens[i].price

        let tr = document.createElement('tr');

        let thCode = document.createElement('th');
        thCode.innerHTML = code;
        let thName = document.createElement('th');
        thName.innerHTML = name;
        let thPrice = document.createElement('th');
        thPrice.innerHTML = price;
        let thColor = document.createElement('th');
        thColor.innerHTML = color;
        let button = document.createElement("button");
        button.innerText = "Удалить";
        button.id = code;
        button.addEventListener('click', deleteRow);
        tr.append(thCode, thName, thPrice, thColor, button);
        tableBody.append(tr)

    }
}

function deleteRow(event) {
    let elId = event.currentTarget.id;
    let index = pens.findIndex((el) => el.code === elId);
    pens.splice(index, 1);
    restructureTablePen();
}


let copyBooks = [];

document.getElementById("addCopyBook").addEventListener('click', () => {
    let code = document.getElementById("codeCopyBook").value;
    let name = document.getElementById("nameCopyBook").value;
    let price = document.getElementById("priceCopyBook").value;
    let type = document.getElementById("typeCopyBook").value;

    let copyBook = new CopyBook(code, name, price, type);

    copyBooks.push(copyBook);
    restructureTableCopyBook();
    document.getElementById("codeCopyBook").value = "";
    document.getElementById("nameCopyBook").value = "";
    document.getElementById("priceCopyBook").value = "";
    document.getElementById("typeCopyBook").value = "";
})

function restructureTableCopyBook() {
    let tableBody = document.getElementById('tableCopyBook');
    tableBody.innerHTML = "";
    for (let i = 0; i < copyBooks.length; i++) {
        let code = copyBooks[i].code;
        let name = copyBooks[i].name;
        let price = copyBooks[i].price;
        let type = copyBooks[i].type;


        let tr = document.createElement('tr');

        let thCode = document.createElement('th');
        thCode.innerHTML = code;
        let thName = document.createElement('th');
        thName.innerHTML = name;
        let thPrice = document.createElement('th');
        thPrice.innerHTML = price;
        let thType = document.createElement('th');
        thType.innerHTML = type;
        let button = document.createElement('button');
        button.innerText = 'Удалить';
        button.id = code;
        button.addEventListener('click', deleteString);
        tr.append(thCode, thName, thPrice, thType, button);
        tableBody.append(tr);
    }
}
function deleteString(event) {
	let copId = event.currentTarget.id;
    let ind = copyBooks.findIndex((cop) => cop.code === copId);
   copyBooks.splice(ind, 1);
   restructureTableCopyBook();
}




