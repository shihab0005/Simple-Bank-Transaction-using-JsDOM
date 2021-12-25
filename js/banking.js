//deposite button handle 

document.getElementById('deposite-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');
    const newDepositeAmountTxt = depositInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountTxt);

    const previousDepositeTotal = document.getElementById('deposit-total');
    const previousDepositTxt = previousDepositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositTxt);

    const currentDepositeTotal = previousDepositeAmount + newDepositeAmount;
    previousDepositeTotal.innerText = currentDepositeTotal;

    //update balance ..with deposite
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalTxt = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalTxt);
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = currentBalanceTotal;
    //cleare inpute deposite field.
    depositInput.value = '';
})

//withdrow handler.....
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountTxt = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountTxt);


    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawTotalTxt = previousWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalTxt);

    const courrentWithdrawAmount = newWithdrawAmount + previousWithdrawTotal;
    previousWithdraw.innerText = courrentWithdrawAmount;

    //update balance ..with withdraw...
    const currentTotalBalance = document.getElementById('balance-total');
    const currentTotalBalanceTxt = currentTotalBalance.innerText;
    const currentBalanceTotalAmount = parseFloat(currentTotalBalanceTxt);

    const currentBalanceAfterwithdraw = currentBalanceTotalAmount - newWithdrawAmount;
    currentTotalBalance.innerText = currentBalanceAfterwithdraw;


    //withdraw input cleare
    withdrawInput.value = " ";
})