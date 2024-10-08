//This is just to access all the elements of the html file
var balance=document.getElementById('balance');
var income=document.getElementById('income');
var expense=document.getElementById('expense');
var inputValue=document.getElementById('amount');

function addHistory(amount, note)
{
    //We have only accessed the parameters of the function, and append to the history using innerHTML
    note = document.querySelector('#note').value;
    amount = document.querySelector('#amount').value;

    if(amount>0)
    {
        document.querySelector('#history').innerHTML+=`
                    <button id="element">
                        <span id="entry">
                            <p id="title">${note}</p>
                            <p id="previous">₹${amount}</p>
                        </span>
                    </button> `;
    }
    
}

function addTransaction(){
    //When we want to work with the value of the input field we use value property
    var amount=parseInt(document.getElementById('amount').value);
    var balanceValue=parseInt(document.getElementById('balance').innerText);
    var incomeValue=parseInt(document.getElementById('income').innerText);
    var expenseValue=parseInt(document.getElementById('expense').innerText);
    var note = document.getElementById('note').value;
    // console.log('addTransaction');
    if(isNaN(amount))
    {
        alert('Please enter a valid amount, it cannot be empty');
        return;
    }
    if(amount>0)
    {
        // console.log(`Amount is ${amount}`);
        balanceValue+=amount;
        incomeValue+=amount;
        balance.innerText=balanceValue;
        income.innerText=incomeValue;
        // console.log(balanceValue);
        // console.log(amount);
    }
    if(amount<0)
    {
        balanceValue+=amount;
        expenseValue+=(-1)*amount;
        // console.log(balanceValue);
        balance.innerText=balanceValue;
        expense.innerText=expenseValue;
    }
    addHistory(amount, note);
}
