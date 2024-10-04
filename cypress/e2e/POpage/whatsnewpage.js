export class WhatsNewPage {

    
    firstmusicbox = ':nth-child(1) > [draggable="true"] > .Box__BoxComponent-sc-y4nds-0 > .RowButton-sc-xxkq4e-0'
    addfirstitem = ':nth-child(1) > [draggable="true"] > .Box__BoxComponent-sc-y4nds-0 > :nth-child(6) > ._72TrTBKZHea2vJ2I2BJX > .Olh4d9g46wryDMTzRRmw > [data-testid="add-button"] > .IconWrapper__Wrapper-sc-16usrgb-0 > .Svg-sc-ytk21e-0'
    firstitemadded = '.TcJ5lUfQ25AJNoCrWO5Z'
    musicbutton = '.q5riNmaoksSuEEvQAurA > .bMurPtRDRv5LuN78MTVG > .KjPUGV8uMbl_0bvk9ePv > div > :nth-child(1) > .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0'




    FirstMusicBoxVisible() {
        cy.get(this.firstmusicbox).should('be.visible')


    }
    AddFirstItemPlaylist() {
        cy.get(this.addfirstitem).click()

    }

    FirstItemAddedVisible() {
        cy.get(this.firstitemadded).should('be.visible')

    }

    ClickMusicnWhatsNew(){
        cy.get(this.musicbutton)
        .should('be.visible')
        .click()
    }

    }



















