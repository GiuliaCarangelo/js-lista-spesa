// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const listaSpesa = [
    'Pomodori',
    'Mele',
    'Pere',
    'Sale',
    'Patate',
    'Carote'
]

const ulList = document.querySelector('#lista-spesa');
const listItem = document.createElement('li');

for (let index = 0; index < listaSpesa.length; index++){

    listItem.classList.add('list-element');
    listItem.append(listaSpesa[index]);

    ulListElement.appendChild(listItemElement);

    index++;
}

// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while