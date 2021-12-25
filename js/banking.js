
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //deposite input field empty
    inputField.value = "";
    return amountValue;
}

function updateTotalField(inputFieldId, amount) {
    const totalElement = document.getElementById(inputFieldId);
    const totalText = totalElement.innerText;
    const prevoiusTotal = parseFloat(totalText);
    totalElement.innerText = amount + prevoiusTotal;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}



document.getElementById('deposite-button').addEventListener('click', function () {
    /*     const depositeInput = document.getElementById('deposite-input');
        const depositeAmountText = depositeInput.value;
       const depositeAmount = parseFloat(depositeAmountText); */
    depositeAmount = getInputValue('deposite-input');
    // console.log(depositeAmount);
    // current total deposite...

    //update deposite total  field
    /* const depositeTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositeTotal.innerText;
    const prevoiusDepositTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositeAmount + prevoiusDepositTotal; */
    if (depositeAmount > 0) {
        updateTotalField('deposit-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }

    //update balance total..

    /*    const balanceTotal = document.getElementById('balance-total');
       const balanceTotalText = balanceTotal.innerText;
       const previousBalanceTotal = parseFloat(balanceTotalText);
       balanceTotal.innerText = previousBalanceTotal + depositeAmount; */
    /* 
        //deposite input field empty
        depositeInput.value = ""; */
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');
    const currBalance = getCurrentBalance();
    if ((withdrawAmount > 0) && (currBalance > withdrawAmount)) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    //update withdraw  total  field
    // updateTotalField('withdraw-total', withdrawAmount);
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;
 */
    ///update balance after withdraw
    // updateBalance(withdrawAmount, false);
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    /* //deposite input field empty
    withdrawInput.value = ""; */
})