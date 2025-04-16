function filtrarElementos(tipo) {
    let elementos = document.querySelectorAll('.elemento');
    let botones = document.querySelectorAll('.botones button');
    
    botones.forEach(btn => btn.classList.remove('activo'));
    document.querySelector(`.${tipo}`).classList.add('activo');
    
    elementos.forEach(el => {
        if (tipo === 'todos') {
            el.classList.remove('desactivado');
        } else {
            if (el.classList.contains(tipo)) {
                el.classList.remove('desactivado');
            } else {
                el.classList.add('desactivado');
            }
        }
    });
}
const elementos = [
    { sim: "H", nombre: "Hidrógeno",     numero: 1, masa: 1.008, grupo: 1, periodo: 1, clase: "no-metales" },
    { sim: "He", nombre: "Helio",        numero: 2, masa: 4.0026, grupo: 18, periodo: 1, clase: "gases-nobles" },
    { sim: "Li", nombre: "Litio",        numero: 3, masa: 6.94, grupo: 1, periodo: 2, clase: "metales-alcalinos" },
    { sim: "Be", nombre: "Berilio",      numero: 4, masa: 9.0122, grupo: 2, periodo: 2, clase: "metales-alcalinoterreos" },
    { sim: "B", nombre: "Boro",          numero: 5, masa: 10.81, grupo: 13, periodo: 2, clase: "metaloides" },
    { sim: "C", nombre: "Carbono",       numero: 6, masa: 12.011, grupo: 14, periodo: 2, clase: "no-metales" },
    { sim: "N", nombre: "Nitrógeno",     numero: 7, masa: 14.007, grupo: 15, periodo: 2, clase: "no-metales" },
    { sim: "O", nombre: "Oxígeno",       numero: 8, masa: 15.999, grupo: 16, periodo: 2, clase: "no-metales" },
    { sim: "F", nombre: "Flúor",         numero: 9, masa: 18.998, grupo: 17, periodo: 2, clase: "no-metales" },
    { sim: "Ne", nombre: "Neón",         numero: 10, masa: 20.180, grupo: 18, periodo: 2, clase: "gases-nobles" },
    { sim: "Na", nombre: "Sodio",        numero: 11, masa: 22.990, grupo: 1, periodo: 3, clase: "metales-alcalinos" },
    { sim: "Mg", nombre: "Magnesio",     numero: 12, masa: 24.305, grupo: 2, periodo: 3, clase: "metales-alcalinoterreos" },
    { sim: "Al", nombre: "Aluminio",     numero: 13, masa: 26.982, grupo: 13, periodo: 3, clase: "metales-transicionales" },
    { sim: "Si", nombre: "Silicio",      numero: 14, masa: 28.085, grupo: 14, periodo: 3, clase: "metaloides" },
    { sim: "P",  nombre: "Fósforo",      numero: 15, masa: 30.974, grupo: 15, periodo: 3, clase: "no-metales" },
    { sim: "S",  nombre: "Azufre",       numero: 16, masa: 32.06, grupo: 16, periodo: 3, clase: "no-metales" },
    { sim: "Cl", nombre: "Cloro",        numero: 17, masa: 35.45, grupo: 17, periodo: 3, clase: "no-metales" },
    { sim: "Ar", nombre: "Argón",        numero: 18, masa: 39.948, grupo: 18, periodo: 3, clase: "gases-nobles" },
    { sim: "K",  nombre: "Potasio",      numero: 19, masa: 39.0983, grupo: 1,  periodo: 4, clase: "metales-alcalinos" },
    { sim: "Ca", nombre: "Calcio",       numero: 20, masa: 40.078, grupo: 2,  periodo: 4, clase: "metales-alcalinoterreos" },
    { sim: "Sc", nombre: "Escandio",     numero: 21, masa: 44.956, grupo: 3,  periodo: 4, clase: "metales-transicionales" },
    { sim: "Ti", nombre: "Titanio",      numero: 22, masa: 47.867, grupo: 4,  periodo: 4, clase: "metales-transicionales" },
    { sim: "V",  nombre: "Vanadio",      numero: 23, masa: 50.942, grupo: 5,  periodo: 4, clase: "metales-transicionales" },
    { sim: "Cr", nombre: "Cromo",        numero: 24, masa: 51.996, grupo: 6,  periodo: 4, clase: "metales-transicionales" },
    { sim: "Mn", nombre: "Manganeso",    numero: 25, masa: 54.938, grupo: 7,  periodo: 4, clase: "metales-transicionales" },
    { sim: "Fe", nombre: "Hierro",       numero: 26, masa: 55.845, grupo: 8,  periodo: 4, clase: "metales-transicionales" },
    { sim: "Co", nombre: "Cobalto",      numero: 27, masa: 58.933, grupo: 9,  periodo: 4, clase: "metales-transicionales" },
    { sim: "Ni", nombre: "Níquel",       numero: 28, masa: 58.693, grupo: 10, periodo: 4, clase: "metales-transicionales" },
    { sim: "Cu", nombre: "Cobre",        numero: 29, masa: 63.546, grupo: 11, periodo: 4, clase: "metales-transicionales" },
    { sim: "Zn", nombre: "Zinc",         numero: 30, masa: 65.38, grupo: 12, periodo: 4, clase: "metales-transicionales" },
    { sim: "Ga", nombre: "Galio",        numero: 31, masa: 69.723, grupo: 13, periodo: 4, clase: "metales-transicionales" },
    { sim: "Ge", nombre: "Germanio",     numero: 32, masa: 72.63, grupo: 14, periodo: 4, clase: "metaloides" },
    { sim: "As", nombre: "Arsénico",     numero: 33, masa: 74.922, grupo: 15, periodo: 4, clase: "metaloides" },
    { sim: "Se", nombre: "Selenio",      numero: 34, masa: 78.96, grupo: 16, periodo: 4, clase: "no-metales" },
    { sim: "Br", nombre: "Bromo",        numero: 35, masa: 79.904,   grupo: 17, periodo: 4, clase: "no-metales" },
    { sim: "Kr", nombre: "Kriptón",      numero: 36, masa: 83.798,   grupo: 18, periodo: 4, clase: "gases-nobles" },
    { sim: "Rb", nombre: "Rubidio",      numero: 37, masa: 85.468,  grupo: 1,  periodo: 5, clase: "metales-alcalinos" },
    { sim: "Sr", nombre: "Estroncio",    numero: 38, masa: 87.62,    grupo: 2,  periodo: 5, clase: "metales-alcalinoterreos" },
    { sim: "Y",  nombre: "Itrio",        numero: 39, masa: 88.906,  grupo: 3,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Zr", nombre: "Circonio",     numero: 40, masa: 91.224,   grupo: 4,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Nb", nombre: "Niobio",       numero: 41, masa: 92.906,   grupo: 5,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Mo", nombre: "Molibdeno",    numero: 42, masa: 95.95,    grupo: 6,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Tc", nombre: "Tecnecio",     numero: 43, masa: 98,       grupo: 7,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Ru", nombre: "Rutenio",      numero: 44, masa: 101.07,   grupo: 8,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Rh", nombre: "Rodio",        numero: 45, masa: 102.91,   grupo: 9,  periodo: 5, clase: "metales-transicionales" },
    { sim: "Pd", nombre: "Paladio",      numero: 46, masa: 106.42,   grupo: 10, periodo: 5, clase: "metales-transicionales" },
    { sim: "Ag", nombre: "Plata",        numero: 47, masa: 107.87, grupo: 11, periodo: 5, clase: "metales-transicionales" },
    { sim: "Cd", nombre: "Cadmio",       numero: 48, masa: 112.414,  grupo: 12, periodo: 5, clase: "metales-transicionales" },
    { sim: "In", nombre: "Indio",        numero: 49, masa: 114.818,  grupo: 13, periodo: 5, clase: "metales-transicionales" },
    { sim: "Sn", nombre: "Estaño",       numero: 50, masa: 118.710,  grupo: 14, periodo: 5, clase: "metales-transicionales" },
    { sim: "Sb", nombre: "Antimonio",    numero: 51, masa: 121.760,  grupo: 15, periodo: 5, clase: "metaloides" },
    { sim: "Te", nombre: "Telurio",      numero: 52, masa: 127.60,   grupo: 16, periodo: 5, clase: "metaloides" },
    { sim: "I",  nombre: "Yodo",         numero: 53, masa: 126.90,grupo: 17, periodo: 5, clase: "no-metales" },
    { sim: "Xe", nombre: "Xenón",        numero: 54, masa: 131.293,  grupo: 18, periodo: 5, clase: "gases-nobles" },
    { sim: "Cs", nombre: "Cesio",        numero: 55, masa: 132.91, grupo: 1, periodo: 6, clase: "metales-alcalinos" },
    { sim: "Ba", nombre: "Bario",        numero: 56, masa: 137.327,  grupo: 2, periodo: 6, clase: "metales-alcalinoterreos" },
    { sim: "La", nombre: "Lantano",      numero: 57, masa: 138.91, grupo: 3, periodo: 6, clase: "lantanidos" },
    { sim: "Hf", nombre: "Hafnio",       numero: 72, masa: 178.49,   grupo: 4, periodo: 6, clase: "metales-transicionales" },
    { sim: "Ta", nombre: "Tántalo",      numero: 73, masa: 180.95,grupo: 5, periodo: 6, clase: "metales-transicionales" },
    { sim: "W",  nombre: "Wolframio",    numero: 74, masa: 183.84,   grupo: 6, periodo: 6, clase: "metales-transicionales" },
    { sim: "Re", nombre: "Renio",        numero: 75, masa: 186.21,  grupo: 7, periodo: 6, clase: "metales-transicionales" },
    { sim: "Os", nombre: "Osmio",        numero: 76, masa: 190.23,   grupo: 8, periodo: 6, clase: "metales-transicionales" },
    { sim: "Ir", nombre: "Iridio",       numero: 77, masa: 192.22,   grupo: 9,  periodo: 6, clase: "metales-transicionales" },
    { sim: "Pt", nombre: "Platino",      numero: 78, masa: 195.08,   grupo: 10, periodo: 6, clase: "metales-transicionales" },
    { sim: "Au", nombre: "Oro",          numero: 79, masa: 196.97, grupo: 11, periodo: 6, clase: "metales-transicionales" },
    { sim: "Hg", nombre: "Mercurio",     numero: 80, masa: 200.59,    grupo: 12, periodo: 6, clase: "metales-transicionales" },
    { sim: "Tl", nombre: "Talio",        numero: 81, masa: 204.38,  grupo: 13, periodo: 6, clase: "metales-transicionales" },
    { sim: "Pb", nombre: "Plomo",        numero: 82, masa: 207.2,     grupo: 14, periodo: 6, clase: "metales-transicionales" },
    { sim: "Bi", nombre: "Bismuto",      numero: 83, masa: 208.98,  grupo: 15, periodo: 6, clase: "metales-transicionales" },
    { sim: "Po", nombre: "Polonio",      numero: 84, masa: 209,       grupo: 16, periodo: 6, clase: "metaloides" },
    { sim: "At", nombre: "Astato",       numero: 85, masa: 210,       grupo: 17, periodo: 6, clase: "no-metales" },
    { sim: "Rn", nombre: "Radón",        numero: 86, masa: 222,       grupo: 18, periodo: 6, clase: "gases-nobles" },
    { sim: "Fr", nombre: "Francio",      numero: 87, masa: 223,       grupo: 1,  periodo: 7, clase: "metales-alcalinos" },
    { sim: "Ra", nombre: "Radio",        numero: 88, masa: 226,       grupo: 2,  periodo: 7, clase: "metales-alcalinoterreos" },
    { sim: "Ac", nombre: "Actinio",      numero: 89, masa: 227,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Th", nombre: "Torio",        numero: 90, masa: 232.04,  grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Pa", nombre: "Protactinio",  numero: 91, masa: 231.04, grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "U",  nombre: "Uranio",       numero: 92, masa: 238.03, grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Np", nombre: "Neptunio",     numero: 93, masa: 237,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Pu", nombre: "Plutonio",     numero: 94, masa: 244,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Am", nombre: "Americio",     numero: 95, masa: 243,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Cm", nombre: "Curio",        numero: 96, masa: 247,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Bk", nombre: "Berkelio",     numero: 97, masa: 247,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Cf", nombre: "Californio",   numero: 98, masa: 251,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Es", nombre: "Einstenio",    numero: 99, masa: 252,       grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Fm", nombre: "Fermio",       numero: 100, masa: 257,      grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Md", nombre: "Mendelevio",   numero: 101, masa: 258,      grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "No", nombre: "Nobelio",      numero: 102, masa: 259,      grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Lr", nombre: "Lawrencio",    numero: 103, masa: 266,      grupo: 3,  periodo: 7, clase: "actinidos" },
    { sim: "Rf", nombre: "Rutherfordio", numero: 104, masa: 267,      grupo: 4,  periodo: 7, clase: "metales-transicionales" },
    { sim: "Db", nombre: "Dubnio",         numero: 105, masa: 268, grupo: 5,  periodo: 7, clase: "metales-transicionales" },
    { sim: "Sg", nombre: "Seaborgio",      numero: 106, masa: 269, grupo: 6,  periodo: 7, clase: "metales-transicionales" },
    { sim: "Bh", nombre: "Bohrio",         numero: 107, masa: 270, grupo: 7,  periodo: 7, clase: "metales-transicionales" },
    { sim: "Hs", nombre: "Hassio",         numero: 108, masa: 269, grupo: 8,  periodo: 7, clase: "metales-transicionales" },
    { sim: "Mt", nombre: "Meitnerio",      numero: 109, masa: 278, grupo: 9,  periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Ds", nombre: "Darmstatio",     numero: 110, masa: 281, grupo: 10, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Rg", nombre: "Roentgenio",     numero: 111, masa: 282, grupo: 11, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Cn", nombre: "Copernicio",     numero: 112, masa: 285, grupo: 12, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Nh", nombre: "Nihonio",        numero: 113, masa: 286, grupo: 13, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Fl", nombre: "Flerovio",       numero: 114, masa: 289, grupo: 14, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Mc", nombre: "Moscovio",       numero: 115, masa: 290, grupo: 15, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Lv", nombre: "Livermorio",     numero: 116, masa: 293, grupo: 16, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Ts", nombre: "Tenesino",       numero: 117, masa: 294, grupo: 17, periodo: 7, clase: "propiedad-desconocida" },
    { sim: "Og", nombre: "Oganesón",       numero: 118, masa: 294, grupo: 18, periodo: 7, clase: "gases-nobles" },
   
    { sim: "Ce", nombre: "Cerio",         numero: 58, masa: 140.12, grupo: 4, periodo: 9, clase: "lantanidos" },
    { sim: "Pr", nombre: "Praseodimio",   numero: 59, masa: 140.91, grupo: 5, periodo: 9, clase: "lantanidos" },
    { sim: "Nd", nombre: "Neodimio",      numero: 60, masa: 144.24, grupo: 6, periodo: 9, clase: "lantanidos" },
    { sim: "Pm", nombre: "Prometio",      numero: 61, masa: 145, grupo: 7, periodo: 9, clase: "lantanidos" },
    { sim: "Sm", nombre: "Samario",       numero: 62, masa: 150.36, grupo: 8, periodo: 9, clase: "lantanidos" },
    { sim: "Eu", nombre: "Europio",       numero: 63, masa: 151.96, grupo: 9, periodo: 9, clase: "lantanidos" },
    { sim: "Gd", nombre: "Gadolinio",     numero: 64, masa: 157.25, grupo: 10, periodo: 9, clase: "lantanidos" },
    { sim: "Tb", nombre: "Terbio",        numero: 65, masa: 158.93, grupo: 11, periodo: 9, clase: "lantanidos" },
    { sim: "Dy", nombre: "Disprosio",     numero: 66, masa: 162.5, grupo: 12, periodo: 9, clase: "lantanidos" },
    { sim: "Ho", nombre: "Holmio",        numero: 67, masa: 164.93, grupo: 13, periodo: 9, clase: "lantanidos" },
    { sim: "Er", nombre: "Erbio",         numero: 68, masa: 167.26, grupo: 14, periodo: 9, clase: "lantanidos" },
    { sim: "Tm", nombre: "Tulio",         numero: 69, masa: 168.93, grupo: 15, periodo: 9, clase: "lantanidos" },
    { sim: "Yb", nombre: "Iterbio",       numero: 70, masa: 173.04, grupo: 16, periodo: 9, clase: "lantanidos" },
    { sim: "Lu", nombre: "Lutecio",       numero: 71, masa: 174.97, grupo: 17, periodo: 9, clase: "lantanidos" },

    { sim: "Th", nombre: "Torio",         numero: 90, masa: 232.04, grupo: 4, periodo: 10, clase: "actinidos" },
    { sim: "Pa", nombre: "Protactinio",   numero: 91, masa: 231.04, grupo: 5, periodo: 10, clase: "actinidos" },
    { sim: "U",  nombre: "Uranio",        numero: 92, masa: 238.03, grupo: 6, periodo: 10, clase: "actinidos" },
    { sim: "Np", nombre: "Neptunio",      numero: 93, masa: 237, grupo: 7, periodo: 10, clase: "actinidos" },
    { sim: "Pu", nombre: "Plutonio",      numero: 94, masa: 244, grupo: 8, periodo: 10, clase: "actinidos" },
    { sim: "Am", nombre: "Americio",      numero: 95, masa: 243, grupo: 9, periodo: 10, clase: "actinidos" },
    { sim: "Cm", nombre: "Curio",         numero: 96, masa: 247, grupo: 10, periodo: 10, clase: "actinidos" },
    { sim: "Bk", nombre: "Berkelio",      numero: 97, masa: 247, grupo: 11, periodo: 10, clase: "actinidos" },
    { sim: "Cf", nombre: "Californio",    numero: 98, masa: 251, grupo: 12, periodo: 10, clase: "actinidos" },
    { sim: "Es", nombre: "Einstenio",     numero: 99, masa: 252, grupo: 13, periodo: 10, clase: "actinidos" },
    { sim: "Fm", nombre: "Fermio",        numero: 100, masa: 257, grupo: 14, periodo: 10, clase: "actinidos" },
    { sim: "Md", nombre: "Mendelevio",    numero: 101, masa: 258, grupo: 15, periodo: 10, clase: "actinidos" },
    { sim: "No", nombre: "Nobelio",       numero: 102, masa: 259, grupo: 16, periodo: 10, clase: "actinidos" },
    { sim: "Lr", nombre: "Lawrencio",     numero: 103, masa: 266, grupo: 17, periodo: 10, clase: "actinidos" }


];

const tabla = document.getElementById("tabla");
const info = document.getElementById("info");

// Crear una matriz 2D para representar la tabla periódica
const tablaPeriodica = Array.from({ length: 10 }, () => Array(18).fill(null));
elementos.forEach(el => {
    tablaPeriodica[el.periodo - 1][el.grupo - 1] = el;
});

// Renderizar la tabla periódica
tablaPeriodica.forEach(fila => {
    fila.forEach(el => {
        const div = document.createElement("div");
        if (el) {
            div.classList.add("elemento", el.clase);
            div.innerHTML = `
                <div class="numero">${el.numero}</div>
                <div class="masa">${el.masa}</div>
                <div class="simbolo">${el.sim}</div>
                <div class="nombre">${el.nombre}</div>
            `;
            // Al hacer clic se abre el modal cargando la URL de Wikipedia correspondiente
            div.onclick = () => abrirModal('https://es.wikipedia.org/wiki/' + encodeURIComponent(el.nombre));
        } else {
            div.classList.add("elemento", "empty");
        }
        tabla.appendChild(div);
    });
});

function abrirModal(url) {
    const modal = document.getElementById("modal");
    const modalFrame = document.getElementById("modalFrame");
    modalFrame.src = url;
    modal.style.display = "flex";
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    const modalFrame = document.getElementById("modalFrame");
    modal.style.display = "none";
    modalFrame.src = "";
}

// Cerrar el modal si se hace clic fuera de la ventana modal
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        cerrarModal();
    }
}