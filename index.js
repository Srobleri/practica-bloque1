// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

let lis = document.getElementsByClassName("color-list")[0].children;

function colors() {
  let listaColores = document.getElementsByClassName("color-list");

  for (let i = 0; i < colorList.length; i++) {
    let li = document.createElement("li");
    li.classList.add("color-item");

    var div1 = document.createElement("div");
    var td1 = document.createTextNode("Color: " + colorList[i].colorName);
    div1.appendChild(td1);
    div1.classList.add("color-name");
    li.appendChild(div1);

    var div2 = document.createElement("div");
    var td2 = document.createTextNode("Muestra");
    div2.appendChild(td2);
    div2.style.backgroundColor = colorList[i].hex;
    div2.classList.add("color-show");
    li.appendChild(div2);

    var button1 = document.createElement("button");
    var tb1 = document.createTextNode("Next item color");
    button1.appendChild(tb1);
    button1.classList.add("color-set");
    button1.addEventListener("click", function() {
      var padre = button1.parentNode;
      if (i === colorList.length - 1) {
        padre.style.backgroundColor(colorList[0].hex);
      } else {
        padre.style.backgroundColor(colorList[i + 1].hex);
      }
    });
    li.appendChild(button1);

    var button2 = document.createElement("button");
    var tb2 = document.createTextNode("Page color");
    button2.appendChild(tb2);
    button2.classList.add("color-set");
    button2.addEventListener("click", function() {
      var fondo = document.getElementsByTagName("body");
      fondo.style.backgroundColor(colorList[i].hex);
    });
    li.appendChild(button2);

    listaColores[0].appendChild(li);
  }

  for (i = 0; i < lis.length; i++) {
    if (i % 2 === 0 && i != 0) {
      lis[i].classList.add("color-item--odd");
    }
  }
}

function items() {
  colors();

  for (let i = 1; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      alert("body");
    });

    lis[i].addEventListener("click", function() {
      var text = colorList[i - 1].colorName;
      alert(text);
    });
  }
}

items();
