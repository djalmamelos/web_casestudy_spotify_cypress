export class PodcastsPage{


    podcastssection = '[aria-label="Podcasts"] > .LegacyChipInner__ChipInnerComponent-sc-1qguixk-0'
    secondpodcast = ':nth-child(2) > .g3f_cI5usQX7ZOQyDtA9 > .jb9xD5ECTqKFK02qe3HZ'
    titlepodcastpage = '[data-testid="show-title"]'
    titleyourepisodespodcasts = '[data-testid="entityTitle"] > .encore-text'



ClickPodcastsSection(){
   
    cy.get(this.podcastssection).click()
}
    
    ClickSecondPodcast(){
        cy.get(this.secondpodcast).click()
    }

    VisiblePodcastTitle(){
        cy.get(this.titlepodcastpage).should('be.visible')

    }

    VisibleYourEpisodes(){
        cy.get(this.titleyourepisodespodcasts).should('be.visible')

    }

    








}