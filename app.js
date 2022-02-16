

// 1. common function to increase and decrease 'case' and 'phone'

function updateProductNumber(product, price, isIncreasing) {
    // access case Input
    // product input er 'id'r puro nam pathate hobe 'product' likhle
    // ekhon 'phone' or 'case' input dilei hobe 
    const productInput = document.getElementById(product + '-number');
    let poductNumber = productInput.value;

    // condition check to add or substract
    // 'if (isIncreasing' == true) evabeo deya jabe
    // boolean type er hole man evabe direct bosiye dileo cholbe [nicher moto]
    if (isIncreasing) {
        // 'caseNumber' string e ache tai eke 'parseInt' kore nite holo
        poductNumber = parseInt(poductNumber) + 1;
    }
    // input jeno '0' er niche na jay tar condition
    else if (poductNumber > 0) {
        poductNumber = parseInt(poductNumber) - 1;
    }
    // case Input er new value set kora holo
    productInput.value = poductNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = poductNumber * price;

    // calculate total
    totalCalculate();
}

// *** function for getting input value

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

// case er motoi kaj korbe tai update 'function' er common nam dite hobe

// 1. phone-plus button

document.getElementById('phone-plus').addEventListener('click', function () {
    // call update case Number [increase korbe tai 'true' parameter]
    updateProductNumber('phone', 1219, true);
})


// 1. phone-minus button

document.getElementById('phone-minus').addEventListener('click', function () {
    // call update case Number [decrease korbe tai 'false' parameter]
    updateProductNumber('phone', 1219, false);
})



// case increase-decrease events

// 1. case-plus btn

document.getElementById('case-plus').addEventListener('click', function () {
    // call update case Number [increase korbe tai 'true' parameter]
    updateProductNumber('case', 59, true);
})


// 2. case-minus btn

document.getElementById('case-minus').addEventListener('click', function () {
    // call update case Number [decrease korbe tai 'false' parameter]
    updateProductNumber('case', 59, false);
})


// ** onclick attribute button e set koreo amra korte pari
// ** code e change anle check kore dekhte hobe kajgulo thikthak hocche kina