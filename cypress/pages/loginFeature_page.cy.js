export class loginFeature_page{

    lnEnterUsername= "#user-name"
    lnEnterPassword= "#password"
    lnClickLoginBtn= "input#login-button"
  
  
  
    //Login steps
    enterUsername(username){
      cy.get(this.lnEnterUsername).type(username)
    }
    enterPassword(password){
      cy.get(this.lnEnterPassword).type(password)
    }
    clickLoginEmptyFields(){
      cy.get(this.lnClickLoginBtn).click()
      expect(true).to.be.true
      let text= 'Epic sadface: Username is required'
      expect(text).to.be.eql('Epic sadface: Username is required')
    }
    clickLoginEmptyPassword(){
      cy.get(this.lnClickLoginBtn).click()
      expect(true).to.be.true
      let text= 'Epic sadface: Password is required'
      expect(text).to.be.eql('Epic sadface: Password is required')
    }
    clickLoginEmptyUsername(){
      cy.get(this.lnClickLoginBtn).click()
      expect(true).to.be.true
      let text= 'Epic sadface: Username is required'
      expect(text).to.be.eql('Epic sadface: Username is required')
    }
    clickLoginInvalidCredentials(){
      cy.get(this.lnClickLoginBtn).click()
      expect(true).to.be.true
      let text= 'Epic sadface: Username and password do not match any user in this service'
      expect(text).to.be.eql('Epic sadface: Username and password do not match any user in this service')
  
  }
  clickLoginValid(){
      cy.get(this.lnClickLoginBtn).click()
  }
  }