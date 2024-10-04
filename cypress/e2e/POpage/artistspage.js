export class ArtistPage {






ArtistPagediscography = '#listrow-title-discography > .ListRowTitle__LineClamp-sc-1xe2if1-0 > [data-testid="see-all-link"]'
firstsongartistpage = '[aria-rowindex="1"] > [data-testid="tracklist-row"]'
menuopenindesktopbutton = ':nth-child(7) > .mWj8N7D_OlsbDgtQx5GW'





ArtistPDiscographyScroll(){
    cy.get(this.ArtistPagediscography).scrollIntoView().should('be.visible')
}

RightClickFirstSongArtistProfile(){
    cy.get(this.firstsongartistpage).rightclick({ force: true})

}

VisibleOpeninDesktop(){
    cy.get(this.menuopenindesktopbutton).should('be.visible')
}

}
