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

for (let index = 0; index < listaSpesa.length; index++){
    const listItem = document.createElement('li');

    listItem.classList.add('list-element');
    listItem.append(listaSpesa[index]);

    ulList.appendChild(listItem);
}

