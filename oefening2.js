const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let oefening2 = () => {
    // Maak hier oefening 2
    let tablebody = document.getElementById('tableBody')
    let tablerow = document.getElementById('tableRow')
    tablerow.innerHTML = '';

    for (let i = 0; i < rainbow.length; i++) {
        let tableitem = document.createElement('td');
        tableitem.innerText = rainbow[i];
        tableitem.style.width = (100 / rainbow.length) + '%'
        tableitem.addEventListener('mouseover', function() {
            tableitem.style.color = 'white';
            tableitem.style.backgroundColor = rainbow[i];
        })
        tableitem.addEventListener('mouseout', function() {
            tableitem.style.color = 'black';
            tableitem.style.backgroundColor = 'white';
        })
        tablerow.appendChild(tableitem)
    }
}