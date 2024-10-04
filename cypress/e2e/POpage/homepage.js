export class HomePage {



    whatsnewbell = '[data-testid="whats-new-feed-button"]'
    sectionbarleft = '.paiZmlAHHhmZonuGJRAr > .bMurPtRDRv5LuN78MTVG > .ijZQH9pePkbB2MbJHCJV > .GwVDOOhNp0LMO_SFOqVp'
    sectionbarright = '.paiZmlAHHhmZonuGJRAr > .bMurPtRDRv5LuN78MTVG > .ijZQH9pePkbB2MbJHCJV > .vzVooVFhdI7BIyM3fq0v'
    leftsideseachbar = '[data-testid="expand-button"]'
    artistsbutton = '.paiZmlAHHhmZonuGJRAr > .bMurPtRDRv5LuN78MTVG > .KjPUGV8uMbl_0bvk9ePv > div > :nth-child(2) > .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0'
    clearbutton = '.ChipClear__ChipClearComponent-sc-zv5btm-0'
    firstartist = '[aria-posinset="1"] > .Box__BoxComponent-sc-y4nds-0 > .RowButton-sc-xxkq4e-0'
    podcastssection = ':nth-child(4) > .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0'
    yourepisodespodcasts = '.XNjgtSbyhshr7YQcVvry > .Box__BoxComponent-sc-y4nds-0 > .RowButton-sc-xxkq4e-0'
  


    ClickWhatsNewbell() {
        cy.get(this.whatsnewbell).click()

    }


    ClickSectionBarLeft() {
        cy.get(this.sectionbarleft).click()

    }


    ClickSectionBarRight() {
        cy.get(this.sectionbarright).click()

    }

    ClickSideSearchbar() {
        cy.get(this.leftsideseachbar).click()
    }

    ClickArtistSection() {
        cy.get(this.artistsbutton).should('be.visible')
        cy.get(this.artistsbutton).click()
    }

    ClearButtonVisible() {
        cy.get(this.clearbutton).should('be.visible')
    }

    ClickFirstArtist() {
        cy.get(this.firstartist).click()

    }

    ClickPodcastsSection() {
        cy.get(this.podcastssection, {timeout: 8000}).click()
        cy.wait(1000)

    }


    ClickYourEpisodes(){
        cy.get(this.yourepisodespodcasts, {timeout: 5000}).should('have.class', 'RowButton-sc-xxkq4e-0 fVLjWA')
        .click()
        cy.get('[data-testid="creator-link"]').should('be.visible')

    }




}












