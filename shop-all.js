

// normal js

// btn : event handler

// case-plus btn

document.getElementById('case-plus').addEventListener('click', function () {
    // access case Input
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;

    // 'caseNumber' string e ache tai eke 'parseInt' kore nite holo
    caseInput.value = parseInt(caseNumber) + 1;
})



// case-minus btn

document.getElementById('case-minus').addEventListener('click', function () {
    // access case Input
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;

    // 'caseNumber' string e ache tai eke 'parseInt' kore nite holo
    caseInput.value = parseInt(caseNumber) - 1;

    // khuchra prblm ache input negative hoye jacche. eta kora jabe na
})




//               ==========================



// case increase decrease function js


// 1. common function to increase and decrease case

function updateProductNumber(isIncreasing) {
    // access case Input
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;

    // condition check to add or substract
    // 'if (isIncreasing' == true) evabeo deya jabe
    if (isIncreasing) {
        // 'caseNumber' string e ache tai eke 'parseInt' kore nite holo
        caseInput.value = parseInt(caseNumber) + 1;
    }
    // input jeno '0' er niche na jay tar condition
    else if (caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
}


// 1. case-plus btn

document.getElementById('case-plus').addEventListener('click', function () {
    // call update case Number [increase korbe tai 'true' parameter]
    updateProductNumber(true);
})


// 2. case-minus btn

document.getElementById('case-minus').addEventListener('click', function () {
    // call update case Number [decrease korbe tai 'false' parameter]
    updateProductNumber(false);
})





//             ====================================




// Full JS : With Explanation


// 1. common function to increase and decrease 'case' and 'phone'

function updateProductNumber(product, price, isIncreasing) {
    // access case Input

    // product input ?????? 'id'??? ???????????? ????????? ?????????????????? ????????? 'product' ???????????????
    // ????????? 'phone' or 'case' input ??????????????? ????????? 
    const productInput = document.getElementById(product + '-number');
    let poductNumber = productInput.value;

    // condition check to add or substract

    // 'if (isIncreasing' == true) ?????????????????? ???????????? ????????????
    // boolean type ?????? ????????? ????????? ??????????????? direct ??????????????? ??????????????? ???????????? 
    // [??????????????? ??????]
    if (isIncreasing) {
        //'poductNumber' string ??? ????????? ????????? ????????? 'parseInt' ????????? ???????????? ?????????
        poductNumber = parseInt(poductNumber) + 1;
    }
    // input ????????? '0' ?????? ???????????? ?????? ????????? ????????? condition
    else if (poductNumber > 0) {
        poductNumber = parseInt(poductNumber) - 1;
    }
    // product Input ?????? new value set ????????? ?????????
    productInput.value = poductNumber;

    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = poductNumber * price;

    // calculate total
    totalCalculate();
}


// *** function for getting 'input value'

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}



// 2. Total Calculation

function totalCalculate() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalCost = subTotal + tax;

    // update totalField
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-cost').innerText = totalCost;
}



// phone increase-decrease events

// case ?????? ????????? ????????? ???????????? ????????? update 'function' er common ????????? ???????????? ?????????



// 1. phone-plus button

document.getElementById('phone-plus').addEventListener('click', function () {
    // call update product Number [increase ???????????? ????????? 'true' parameter]
    updateProductNumber('phone', 1219, true);
})


// 2. phone-minus button

document.getElementById('phone-minus').addEventListener('click', function () {
    // call update product Number [increase ???????????? ????????? 'false' parameter]
    updateProductNumber('phone', 1219, false);
})




// case increase-decrease events


// 1. case-plus btn

document.getElementById('case-plus').addEventListener('click', function () {
    // call update product Number [increase ???????????? ????????? 'true' parameter]
    updateProductNumber('case', 59, true);
})


// 2. case-minus btn

document.getElementById('case-minus').addEventListener('click', function () {
    // call update product Number [increase ???????????? ????????? 'false' parameter]
    updateProductNumber('case', 59, false);
})


// ** onclick attribute button ??? set ???????????? ???????????? ???????????? ???????????????
// ** code ??? change ???????????? check ????????? ??????????????? ????????? ????????????????????? ?????????????????? ??????????????? 
// ????????????







//             ====================================





// Full JS : Without Explanation [By event handler]


// 1. common function to increase and decrease 'case' and 'phone'

function updateProductNumber(product, price, isIncreasing) {
    // access product Input
    const productInput = document.getElementById(product + '-number');
    let poductNumber = productInput.value;

    // condition check to add or substract
    if (isIncreasing) {
        poductNumber = parseInt(poductNumber) + 1;
    }

    else if (poductNumber > 0) {
        poductNumber = parseInt(poductNumber) - 1;
    }

    // new value of 'product Input'
    productInput.value = poductNumber;

    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = poductNumber * price;

    // calculate total
    totalCalculate();
}


// *** function for getting 'input value'

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}



// 2. Total Calculation

function totalCalculate() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalCost = subTotal + tax;

    // update totalField
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-cost').innerText = totalCost;
}


// phone increase-decrease events


// 1. phone-plus button

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})


// 2. phone-minus button

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})



// case increase-decrease events


// 1. case-plus btn

document.getElementById('case-plus').addEventListener('click', function () {
    // call update product Number [increase ???????????? ????????? 'true' parameter]
    updateProductNumber('case', 59, true);
})


// 2. case-minus btn

document.getElementById('case-minus').addEventListener('click', function () {
    // call update product Number [increase ???????????? ????????? 'false' parameter]
    updateProductNumber('case', 59, false);
})



