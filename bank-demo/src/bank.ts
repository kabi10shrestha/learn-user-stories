
//This is a type for all bakn accounts in the bank
interface BankAccount{
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represensts a simple bank with the ability to create new accounts.
 */
export default class Bank{
    // This is a private field that holds all accounts in the bank
    private accounts: BankAccount[] = [];
/**
 * This method checks if an account with the given account number exists.
 * @param accountNumber The account number to check
 * @returns The account if it exists, otherwise undefined
 */
    private isAccountExists(accountNumber:string): BankAccount | undefined{
        return this.accounts.find(acc => acc.accountNumber == accountNumber)
    }

/**
 * This method creates a new account with the given name, age and account number.
 * @param name The name of the account holder
 * @param age The age of the account holder
 * @param accountNumber The account number of the account holder
 * @returns The created account
 */
    public createAccount(name:string, age:number, accountNumber:string): BankAccount {
        const isAccExists = this.isAccountExists(accountNumber);
        if(isAccExists){
            throw new Error('Account already exists');
        }
        const account : BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0 
        }
        this.accounts.push(account)
        return account;
    }
/**
 * This function deposits money into an account given the name, account number, and amount.
 * @param name The name of the account holder
 * @param accountNumber The account number of the account holder
 * @param amount The amount of money to be depositted
 * @returns The new account balance
 */
    public deposit(name: string, accountNumber: string, amount: number): number {
        // Check if the deposit amount is valid (non-negative number)
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
    
        //Check if account number exists and throw an error if invalid
        const account = this.isAccountExists(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }
    
        // Check if account name matches depositor name for security
        if (account.name !== name) {
            throw new Error('Account name does not match');
        }

        account.balance += amount;
        return account.balance;
    }
/**
 * This function withraws money from an account given the name, account number, and amount.
 * @param name The name of the account holder
 * @param accountNumber The account number of the account holder
 * @param amount The amount of money to be withdrawn
 * @returns The new account balance
 */
    public withdraw(name: string, accountNumber: string, amount: number): number {
        // Check if the withdrawal amount is valid (non-negative number)
        if (amount <= 0) {
            throw new Error('Invalid withdrawal amount');
        }
    
        //Check if account number exists and throw an error if invalid
        const account = this.isAccountExists(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }
    
        // Check if account name matches depositor name for security
        if (account.name !== name) {
            throw new Error('Account name does not match');
        }
    
        // Check if there are sufficient funds in the account
        if (account.balance < amount) {
            throw new Error('Insufficient funds');
        }
    
        account.balance -= amount;
        return account.balance;
    }
/**
 * This function checks if the name and account number are valid and returns that accoutns current balance.
 * @param name The name of the account holder
 * @param accountNumber The accoutn number of the accoutn holder
 * @returns The current account balance
 */
    public checkBalance(name: string, accountNumber: string): number {
         //Check if account number exists and throw an error if invalid
         const account = this.isAccountExists(accountNumber);
         if (!account) {
             throw new Error('Account not found');
         }
    
        // Check if account name matches depositor name for security
        if (account.name !== name) {
            throw new Error('Account name does not match');
        }
    
        return account.balance;
    }
    
}