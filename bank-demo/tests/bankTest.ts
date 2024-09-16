import Bank from '../src/bank';

//setup
const bank = new Bank();

//Account Creation Tests

//scenario 1
const acc = bank.createAccount('Jane Doe', 25, '123456'); //Default balance 0
if(acc.accountNumber === "123456") {
    
    console.log('scenario 1 passed')
}
else{
    console.log('scenario 1 failed')

}

//scenario 2
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

//Deposit Tests

// Scenario 1: Successful deposit
try {
    const newBalance = bank.deposit('Jane Doe', '123456', 500);
    console.log("Scenario 1 passed");
} catch (e) {
    console.log('Scenario 1 passed');
}

// Scenario 2: Failed deposit with invalid credentials
try {
    bank.deposit('John Smith', '123456', 200);
    console.log('Scenario 2 failed'); //System failed to catch invalid name
} catch (e) {
    console.log('Scenario 2 passed'); //System caught the invalid name
}

// Scenario 3: Failed deposit with invalid amount
try {
    bank.deposit('Jane Doe', '123456', -100);
    console.log('Scenario 3 failed'); // System did not prevent invalid input
} catch (e) {
    console.log('Scenario 3 passed'); // System did prevented invalid input
}

// Withdrawal Tests

// Scenario 1: Successful withdrawal
try {
    bank.deposit('Jane Doe', '123456', 500);
    const newBalance = bank.withdraw('Jane Doe', '123456', 200);
    console.log("Scenario 1 passed");
} catch (e) {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed withdrawal with invalid credentials
try {
    bank.withdraw('John Smith', '123456', 100);
    console.log('Scenario 2 failed'); // System failed to catch invalid name
} catch (e) {
    console.log('Scenario 2 passed'); // System caught the invalid name
}

// Scenario 3: Failed withdrawal with insufficient funds
try {
    bank.withdraw('Jane Doe', '123456', 1000000);
    console.log('Scenario 3 failed'); // System did not prevent insufficient funds
} catch (e) {
    console.log('Scenario 3 passed'); // System prevented insufficient funds withdrawal
}

// Scenario 4: Failed withdrawal with invalid amount
try {
    bank.withdraw('Jane Doe', '123456', -50);
    console.log('Scenario 4 failed'); // System did not prevent invalid input
} catch (e) {
    console.log('Scenario 4 passed'); // System prevented invalid input
}


// Check Balance Tests

// Scenario 1: Successful check balance
try {
    bank.deposit('Jane Doe', '123456', 1000);
    const balance = bank.checkBalance('Jane Doe', '123456');
    
    if (balance === 1000) {
        console.log('Scenario 1 passed'); // Balance successfully retrieved and matches expected value
    } else {
        console.log('Scenario 1 failed'); // The balance does not match the expected value
    }
} catch (e) {
    console.log('Scenario 1 failed'); // System failed to return balance
}

// Scenario 2: Failed check balance
try {
    bank.checkBalance('John Smith', '123456');
    console.log('Scenario 2 failed'); // System did not catch invalid credentials
} catch (e) {
    console.log('Scenario 2 passed'); // System caught invalid credentials
}