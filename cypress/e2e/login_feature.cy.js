/// <reference types = "cypress"/>
import { loginFeature_page } from "../pages/loginFeature_page.cy";
describe('positive and negative login scenarios', () => {
   //before each block
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
   //create a constant variable and give it any name
    const login = new loginFeature_page();

    it('login with empty username and password fields' , () => {
        cy.fixture('loginFeature').then((data)=>{
            login.clickLoginEmptyFields();
        })
    })

    it('login with valid username and empty password' , ()=> {
        cy.fixture('loginFeature').then((data)=> {
            login.enterUsername(data.usernameValid);
            login.clickLoginEmptyPassword();
        })
    })

    it('login with valid password and empty username', ()=> {
        cy.fixture('loginFeature').then((data) => {
            login.enterPassword(data.passwordValid);
            login.clickLoginEmptyUsername();
        })
    })

    it('login with valid username and invalid password' , () => {
        cy.fixture('loginFeature').then((data) => {
            login.enterUsername(data.usernameValid);
            login.enterPassword(data.passwordInvalid);
            login.clickLoginInvalidCredentials();
        })
    })
    
    it('login with invalid username and valid password', ()=>{
        cy.fixture('loginFeature').then((data)=>{
            login.enterUsername(data.usernameInvalid);
            login.enterPassword(data.passwordValid);
            login.clickLoginInvalidCredentials();
    })
    })

    it('login with invalid username and password' , ()=>{
        cy.fixture('loginFeature').then((data)=>{
            login.enterUsername(data.usernameInvalid);
            login.enterPassword(data.passwordInvalid);
            login.clickLoginInvalidCredentials();
        })
    })

    it('login with valid credentials' , ()=>{
        cy.fixture('loginFeature').then((data)=>{
            login.enterUsername(data.usernameValid);
            login.enterPassword(data.passwordValid);
            login.clickLoginValid();
        })
    })
})