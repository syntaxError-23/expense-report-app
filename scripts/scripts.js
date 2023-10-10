//dom objects
const expenseTable = document.getElementById('expense-table');
const rows = expenseTable.getElementsByTagName('tr');
const description = document.getElementById('desc-input');
const date = document.getElementById('date-input');
const amount = document.getElementById('amount-input');
const initalRow = document.getElementById('initial-row')
const expenseButton = document.getElementById('expense-button');
const testButton = document.getElementById('test');
let clicks = 0;

//test function fills in inputs 
const test = () => {
    const dateOfBirth = "1996-09-01"
    
    description.value = "test";
    date.value = dateOfBirth;
    amount.value = (Math.random()*1000).toFixed(2);
}

//function to take inputs and put them in a table
const submitExpense = () => {
    if(clicks === 0){
        expenseTable.deleteRow(1);
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-button');

    const newRow = expenseTable.insertRow(); //new row created in table
    
    //checks if row is even or odd and adds class approriately - to create stripes in table
    if(clicks !== 0 && clicks % 2 === 1){
        console.log("This is an even row");
        rows[clicks+1].classList.add('grey');
    }
    console.log(rows[clicks])

    // note that notation for table cell creation (and pretty much anything to do with tables) is almost identical to array notation
    
    //new cells created 
    const newDesc = newRow.insertCell(0)
    newDesc.innerHTML = description.value;

    const newDate = newRow.insertCell(1)
    newDate.innerHTML = (date.value).split('-').reverse().join('-'); //chain of methods reverses the date (it is backwards yyyy/mm/dd format initially)
    
    const newAmount = newRow.insertCell(2)
    newAmount.innerHTML = '&#163'
    newAmount.innerHTML += amount.value;

    const newDeleteButton = newRow.insertCell(3)
    newDeleteButton.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(e){
        newRow.parentNode.removeChild(newRow);
    })

    //inputs cleared
    description.value = ('');
    date.value = ('');
    amount.value = ('');

    clicks++
    console.log('Button clicked: ', clicks, 'times');
}

expenseButton.onclick = submitExpense;
testButton.onclick = test;