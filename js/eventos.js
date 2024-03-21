const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Mis presidentes";
    setTimeout(function(){
        subtitle2.textContent = "Y sus calificaciones";
    }, 1000);
}, 1000);

//arrays de presidentes del peru desde FUJIMORI

const presidentes = [
    {
        "nombre": "Fujimori Fujimori Alberto",
        "periodo": "1990 - 2001",
        "anios_gobierno": 11,
        "isCorrupto": true
    },
    {
        "nombre": "Toledo Manrique Alejandro",
        "periodo": "2001 - 2006",
        "anios_gobierno": 5,
        "isCorrupto": true
    },
    {
        "nombre": "Garcia Alan",
        "periodo": "2006 - 2011",
        "anios_gobierno": 5,
        "isCorrupto": true
    },
    {
        "nombre": "Heredia Nadine",
        "periodo": "2011 - 2016",
        "anios_gobierno": 5,
        "isCorrupto": true
    },
    {
        "nombre": "Kukinshky Pedro Pablo",
        "periodo": "2016 - 2018",
        "anios_gobierno": 2,
        "isCorrupto": true
    },
    {
        "nombre": "Vizcarra Martin",
        "periodo": "2018 - 2020",
        "anios_gobierno": 2,
        "isCorrupto": true
    },
    {
        "nombre": "Merino Manuel",
        "periodo": "2020 - 2020",
        "anios_gobierno": 0,
        "isCorrupto": false
    },
    {
        "nombre": "Sagasti Francisco",
        "periodo": "2020 - 2021",
        "anios_gobierno": 1,
        "isCorrupto": false
    },
    {
        "nombre": "Castillo Pedro",
        "periodo": "2021 - 2022",
        "anios_gobierno": 1,
        "isCorrupto": true
    },
    {
        "nombre": "Boluarte Dina",
        "periodo": "2022 - 2024",
        "anios_gobierno": 2,
        "isCorrupto": false
    }
];


const presidenteElement = document.getElementById("presidents");
let contenido = "";
presidentes.forEach(function(presidente) {    
    let claseicon = "corrupto";
    if (presidente.isCorrupto) {
        claseicon = "corrupto";
    } else {
        claseicon = "no-corrupto";
    }
    let cantidadanios = presidente.anios_gobierno + " años";
    if (presidente.anios_gobierno == 0) {
        cantidadanios = "No goberno ni un año";
    }
    const template = `
        <div class="presidente">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${presidente.nombre}</h4>
                <p>Goberno: ${presidente.periodo}</p>
            </div>
            <div class="gobierno">
                ${cantidadanios}
            </div>
        </div>
    `;
    contenido = contenido + template;
});

presidenteElement.innerHTML = contenido;