import { LoginPage } from "./POpage/login"
import { HomePage } from "./POpage/homepage"
import { WhatsNewPage } from "./POpage/whatsnewpage"
import { ArtistPage } from "./POpage/artistspage"
import { PodcastsPage } from "./POpage/podcastspage"

const Podcasts = new PodcastsPage()
const Artists = new ArtistPage()
const WhatsNew = new WhatsNewPage()
const Home = new HomePage()
const Login= new LoginPage()


describe('Spotify Case Study', () => {



  describe('Logged in  - Test List', () => {


    beforeEach(() => {
      Login.visitSpotify()
      
      Login.clickLogin1()
      Login.enterUsername(Login.username)
      Login.enterPassword(Login.password)
      Login.clickLogin2()


    })


    it('Cenário (linha 07): Validar Discografia do Artista ao pressionar o botão "mostrar tudo"', () => {
      Home.ClickArtistSection()
      Home.ClearButtonVisible()
      Home.ClickFirstArtist()
      Artists.ArtistPDiscographyScroll()

    })

    it('Cenário (linha 15): Validar se ao clicar na extremidade direita da faixa musical, se apresenta  três pontos com mais opções. ', () => {
      Home.ClickArtistSection()
      Home.ClearButtonVisible()
      Home.ClickFirstArtist()
      Artists.RightClickFirstSongArtistProfile()
      Artists.VisibleOpeninDesktop()


    })

    it('Cenário (linha 25): Verificar se o título do podcast está no topo da página em destaque', () => {
      Podcasts.ClickPodcastsSection()
      Podcasts.ClickSecondPodcast()
      Podcasts.VisiblePodcastTitle()

    })

    it('Cenário (linha 43): Assegurar o redirecionamento ao clicar no nome do podcast', () => {
      Home.ClickSectionBarLeft()
      Home.ClickPodcastsSection()
      Home.ClickYourEpisodes()
      Podcasts.VisibleYourEpisodes()


    })

    it('Cenário (linha 61) Visualizar o Nome da faixa musical e nome do artista', () => {
      Home.ClickWhatsNewbell()
      WhatsNew.ClickMusicnWhatsNew()
      WhatsNew.FirstMusicBoxVisible()

    })

    it('Cenário(linha 72): Validar a troca para verde com um (check) com a adição a item salvo', () => {
      Home.ClickWhatsNewbell()
      WhatsNew.AddFirstItemPlaylist()
      WhatsNew.FirstItemAddedVisible()

    })


    it('Cenário (linha 76): Validar o retorno para esquerda de filtros da biblioteca em destaque ao clicar a seta', () => {
      Home.ClickSectionBarLeft()
      Home.ClickSectionBarRight()

    })

    it('Cenário (linha 78): Validar o surgimento da barra de busca ao clicar na "lupa" da barra lateral', () => {
      Home.ClickSideSearchbar()
    })

  })
})







