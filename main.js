/*let a = new WinBox("WinBox.js", {
    url: "https://nextapps-de.github.io/winbox/"
});

let b = new WinBox({
    title: "Mi ventana",
    url: "https://app.pilas-engine.com.ar/",
    width: 500,
    height: 400,
    x: 100,
    y: 100
}).focus();*/


//Valor Time Out: 110 para que las transiciones concuerden

/*var winbox = new WinBox();
winbox.body.innerHTML = "<h1>Lorem Ipsum</h1>";*/



/*var a = null
let array = [];

let desktop = document.querySelector('.desktop');
let containerapps = document.querySelector('.container-apps');


function crearVentana(title, path, wth, hht) {
    const w = new WinBox({
        title: title,
        //url: path + 'index.html',
        root: desktop,
        width: wth || 500,
        height: hht || 400,
        maxWidth: window.innerWidth,
        maxHeight: window.innerHeight,
        minWidth: 100,
        minHeight: 100,
        icon: path + 'icon.png',
        x: "center",
        y: "center",

        
    });

    w.body.innerHTML = `
        <div class="overlay">  
            <iframe src="${path + 'index.html'}">
        </div>;
    `;

    array.push(w)
    agregarAlDock(w);
}

function a(b) {
    
}

*/

/*function agregarAlDock(win) {
    let dock =  document.getElementById("taskbar");

    var iconElement = win.g.querySelector(".wb-icon");
    var bgImage = iconElement.style.backgroundImage, src;

    if (bgImage && bgImage !== 'none') {
        src = bgImage.replace(/url\(["']?/, '').replace(/["']?\)/, '');
    }

    let button = document.createElement("button");

    win.onclose = function(){
        button.classList.add("quitarCerrar");
        cerrandoVentana = true; // Importante para las animaciones de minimizar
        
        setTimeout(() => {
            button.style.display = 'none';
        }, 500)
    };

    win.onfocus = function() {
        for (var i = 0; i < array.length; i++) {
            if (array[i].hidden === true) {
                cerrandoVentana = false;
                break;
            } 
        }

        if (cerrandoVentana) {
            setTimeout(() => {
                button.classList.remove("difuminado");
                button.classList.remove("minimizado");

                cerrandoVentana = !cerrandoVentana
            }, 110);
        } else {
            button.classList.remove("difuminado");
            button.classList.remove("minimizado");
        }
    }

    win.onblur = function() {
        button.classList.add("difuminado");
        button.classList.remove("minimizado");
    }

    win.onminimize = function() {
        button.classList.remove("difuminado");
        button.classList.add("minimizado");
    }

    button.addEventListener("click", () => {
        if (win.min) {
            win.show();
        } else {
            if (win.focused) {
                win.hide();
            } else {
                win.focus();
            }
        }
    })
    button.innerHTML = `<img src="${src}">`

    

    dock.appendChild(button)

    crearIconoArrastrable(src, win);
}*/


/*

let draggingElement = null;
let startX = 0, startY = 0;
let initialLeft = 0, initialTop = 0;

let iconCounter = 0;

// Función para crear un nuevo ícono arrastrable
function crearIconoArrastrable(src, win) {
    const icon = document.createElement('button');
    icon.className = 'desktop-icon';
    icon.style.left = 20 + 'px';
    icon.style.top = iconCounter * 64 + 15 + 'px';

    iconCounter ++;
    
    // Contenido interno
    icon.innerHTML = `<img src="${src}">`

    let desktop = document.querySelector('.desktop');
    desktop.appendChild(icon);
    
     // Configurar eventos de arrastre
    crearArrastrable(icon, win);
    
    return icon;
}

 function crearArrastrable(element, win) {
    // Evento al presionar el mouse
    element.addEventListener('mousedown', startDrag);
    
    // Prevenir que el texto se seleccione
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    element.addEventListener("dblclick", () => {
        return win.show(true);
    })
}

// Iniciar el arrastre
function startDrag(e) {
    // Solo botón izquierdo del mouse
    if (e.button !== 0) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    draggingElement = this;
    
    // Obtener posición actual del elemento
    const left = parseInt(this.style.left);
    const top = parseInt(this.style.top);
    
    // Calcular posición del mouse relativa al elemento
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = left;
    initialTop = top;
    
    // Agregar clase de arrastre
    this.classList.add('dragging');
    
    // Aumentar z-index durante el arrastre
    this.style.zIndex = '1000';
    
    // Agregar eventos globales
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

// Función durante el arrastre
function onDrag(e) {
    if (!draggingElement) return;
    
    e.preventDefault();
    
    // Calcular nueva posición
    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;
    
    let newLeft = initialLeft + deltaX;
    let newTop = initialTop + deltaY;
    
    // Limitar al escritorio (opcional - evitar que salgan de la pantalla)
    const desktop = document.getElementById('desktop');
    const maxX = desktop.clientWidth - draggingElement.offsetWidth;
    const maxY = desktop.clientHeight - draggingElement.offsetHeight;
    
    newLeft = Math.max(0, Math.min(newLeft, maxX));
    newTop = Math.max(0, Math.min(newTop, maxY));
    
    // Aplicar nueva posición
    draggingElement.style.left = newLeft + 'px';
    draggingElement.style.top = newTop + 'px';
}

// Finalizar arrastre
function stopDrag(e) {
    if (!draggingElement) return;
    
    draggingElement.classList.remove('dragging');
    draggingElement.style.zIndex = '10';
    
    draggingElement = null;
    
    // Remover eventos globales
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
}

let over;
window.addEventListener("load", () => {
    crearVentana('PAC-MAN', 'apps/pacman/', 480, 280);
    crearVentana('Jerry Lawson', 'apps/lawson/', 460, 260);
    crearVentana('Isla de los Campeones', 'apps/isladeloscampeones/', 400, 400);
    crearVentana('Pilas Engine', 'apps/pilasEngine/', 400, 400);
    crearVentana('SONIC CD', 'apps/soniccd/', 600, 400);
    //crearVentana('Minecraft', 'apps/minecraft/', 600, 400);
})*/