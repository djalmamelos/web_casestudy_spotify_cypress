

require("dotenv").config({path:'../../../.env'});




export class LoginPage {


    username_textbox = '[data-testid="login-username"]'
    username = 'youremail@email.com'
    password = 'password'
    password_textbox = '[data-testid="login-password"]'
    login_button1 = '[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0'
    login_button2 = '.ButtonInner-sc-14ud5tc-0'
    SpotifyWeb = 'https://open.spotify.com'


    visitSpotify(website){
        cy.visit(this.SpotifyWeb)
    
     
    }
enterUsername(username){ 
    cy.get(this.username_textbox).type(username)

}

enterPassword(password){
     cy.get(this.password_textbox).type(this.password)

}
clickLogin1(){
    cy.get(this.login_button1)
    .should('exist')
    .click()
}

clickLogin2(){
    cy.get(this.login_button2).click()
}
}