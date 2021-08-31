const btnPlus= document.getElementById('btnPlus');
btnPlus.addEventListener('click',function(){
    const mobileNumber=document.getElementById('mobileNumber').value;
    const convertMobileNumber =parseFloat(mobileNumber);
    document.getElementById('mobileNumber').value = convertMobileNumber +1;
    const currentBalance = document.getElementById('currentBalance').innerText;
    const convertCurrentBalance = parseFloat(currentBalance);
    document.getElementById('currentBalance').innerText=convertCurrentBalance+1219;
    const subtotal = document.getElementById('subtotal').innerText;
    const convertSubtotal = parseFloat(subtotal);
    document.getElementById('subtotal').innerText=convertSubtotal+1219;
    const total = document.getElementById('total').innerText;
    const convertTotal = parseFloat(total);
    document.getElementById('total').innerText=convertTotal+1219;
})
const btnCoverPlus= document.getElementById('btnCoverPlus');
btnCoverPlus.addEventListener('click',function(){
    const coverNumber=document.getElementById('coverNumber').value;
    const convertCoverNumber =parseFloat(coverNumber);
    document.getElementById('coverNumber').value = convertCoverNumber +1;
    const currentBalance2 = document.getElementById('currentBalance2').innerText;
    const convertCurrentBalance2 = parseFloat(currentBalance2);
    document.getElementById('currentBalance2').innerText=convertCurrentBalance2+59;
    const subtotal = document.getElementById('subtotal').innerText;
    const convertSubtotal = parseFloat(subtotal);
    document.getElementById('subtotal').innerText=convertSubtotal+59;
    const total = document.getElementById('total').innerText;
    const convertTotal = parseFloat(total);
    document.getElementById('total').innerText=convertTotal+59;
})
const btnMinus= document.getElementById('btnMinus');
btnMinus.addEventListener('click',function(){
    const mobileNumber=document.getElementById('mobileNumber').value;
    const convertMobileNumber =parseFloat(mobileNumber);
    document.getElementById('mobileNumber').value = convertMobileNumber -1;
    const currentBalance = document.getElementById('currentBalance').innerText;
    const convertCurrentBalance = parseFloat(currentBalance);
    document.getElementById('currentBalance').innerText=convertCurrentBalance-1219;
    const subtotal = document.getElementById('subtotal').innerText;
    const convertSubtotal = parseFloat(subtotal);
    document.getElementById('subtotal').innerText=convertSubtotal-1219;
    const total = document.getElementById('total').innerText;
    const convertTotal = parseFloat(total);
    document.getElementById('total').innerText=convertTotal-1219;
})
const btnCoverMinus= document.getElementById('btnCoverMinus');
btnCoverMinus.addEventListener('click',function(){
    const coverNumber=document.getElementById('coverNumber').value;
    const convertCoverNumber =parseFloat(coverNumber);
    document.getElementById('coverNumber').value = convertCoverNumber -1;
    const currentBalance2 = document.getElementById('currentBalance2').innerText;
    const convertCurrentBalance2 = parseFloat(currentBalance2);
    document.getElementById('currentBalance2').innerText=convertCurrentBalance2-59;
    const subtotal = document.getElementById('subtotal').innerText;
    const convertSubtotal = parseFloat(subtotal);
    document.getElementById('subtotal').innerText=convertSubtotal-59;
    const total = document.getElementById('total').innerText;
    const convertTotal = parseFloat(total);
    document.getElementById('total').innerText=convertTotal-59;
})