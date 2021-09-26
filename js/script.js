let maior = 0;

for (let i = 0; i < 4; i++) {
    document.getElementById("box" + (i + 1)).style.backgroundColor = "rgb(119, 147, 60)";
    document.getElementById("boxTxt" + (i + 1)).style.color = "black";
    document.getElementById("boxText" + (i + 1)).style.color = "black";
}

function backOver(type) {
    document.getElementById("box" + type).style.backgroundColor = "black";
    document.getElementById("boxTxt" + type).style.color = "white";
    document.getElementById("boxText" + type).style.color = "white";
}

function backOut(type) {
    let numVotos = document.getElementById("contVotosBol" + type).innerHTML;
    if (numVotos == maior) {
        document.getElementById("box" + type).style.backgroundColor = "rgb(119, 147, 60)";
        document.getElementById("boxTxt" + type).style.color = "black";
        document.getElementById("boxText" + type).style.color = "black";
    } else {
        document.getElementById("box" + type).style.backgroundColor = "rgb(195, 214, 155)";
        document.getElementById("boxTxt" + type).style.color = "black";
        document.getElementById("boxText" + type).style.color = "black";
    }
}

function incrementaVoto(type) {
    if (login()) {
        let numVotos = document.getElementById("contVotosBol" + type).innerHTML;
        numVotos++;
        document.getElementById("contVotosBol" + type).innerHTML = numVotos;
        if (numVotos > maior) maior = numVotos;
        for (let i = 0; i < 4; i++) {
            if (parseInt(document.getElementById("contVotosBol" + (i + 1)).innerHTML) === maior) {
                document.getElementById("box" + (i + 1)).style.backgroundColor = "rgb(119, 147, 60)";
                document.getElementById("boxTxt" + (i + 1)).style.color = "black";
                document.getElementById("boxText" + (i + 1)).style.color = "black";
            } else {
                document.getElementById("box" + (i + 1)).style.backgroundColor = "rgb(195, 214, 155)";
                document.getElementById("boxTxt" + (i + 1)).style.color = "black";
                document.getElementById("boxText" + (i + 1)).style.color = "black";
            }
        }
    } else {
        alert("Você já realizou seu voto!!")
    }

}

function login() {
    let cpf = "";
    while (cpf == "" || cpf == null) {
        cpf = prompt("Por favor, digite o seu CPF: ");
        if (cpf == "" || cpf == null) alert("Por favor preencher CPF!!");
    }

    let cpfsCadast = JSON.parse(localStorage.getItem("cpfsCadast"));
    if (cpfsCadast === null) {
        cpfsCadast = [];
        cpfsCadast.push(cpf);
        localStorage.setItem("cpfsCadast", JSON.stringify(cpfsCadast));
        return true;
    } else {
        if (cpfsCadast.includes(cpf)) {
            return false;
        } else {
            cpfsCadast.push(cpf);
            localStorage.setItem("cpfsCadast", JSON.stringify(cpfsCadast));
            return true;
        }
    }
}
