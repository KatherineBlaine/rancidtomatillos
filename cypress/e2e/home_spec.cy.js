describe('Main page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: 'movies.json'
    })
    cy.visit("http://localhost:3000/")
  });

    it('Should display main page title', () => {
      cy.get('h1')
        .contains('Rancid Tomatillos')
    });

    it('Should have a search field on the main page with a reset button', () => {
      cy.get('#search-field')
      cy.get('button')
    })

    it('Should display a collection of movies thumbnails that include their respective poster images, titles, and ratings', () => {
      cy.get('[href="/436270"]')
        .should('be.visible')
      cy.get('#Black\\ Adam\\ img')
        .should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      cy.get('#Black\\ Adam\\ title')
        .should('be.visible')
        .contains('Black Adam')
      cy.get('#Black\\ Adam\\ rating')
        .should('be.visible')
        .contains('4')

      cy.get('[href="/724495"]')
        .should('be.visible')
      cy.get('#The\\ Woman\\ King\\ img')
        .should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg")
      cy.get('#Black\\ Adam\\ title')
        .should('be.visible')
        .contains('Black Adam')
      cy.get('#The\\ Woman\\ King\\ rating')
        .should('be.visible')
        .contains('4')

      cy.get('[href="/1013860"]')
        .should('be.visible')
        cy.get('#R\\.I\\.P\\.D\\.\\ 2\\:\\ Rise\\ of\\ the\\ Damned\\ img')
        .should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg")
      cy.get('#R\\.I\\.P\\.D\\.\\ 2\\:\\ Rise\\ of\\ the\\ Damned\\ title')
        .should('be.visible')
        .contains("R.I.P.D. 2: Rise of the Damned")
      cy.get('#R\\.I\\.P\\.D\\.\\ 2\\:\\ Rise\\ of\\ the\\ Damned\\ rating')
        .should('be.visible')
        .contains('7')

      cy.get('[href="/505642"]')
        .should('be.visible')
      cy.get('#Black\\ Panther\\:\\ Wakanda\\ Forever\\ img')
        .should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg")
        cy.get('#Black\\ Panther\\:\\ Wakanda\\ Forever\\ title')
        .should('be.visible')
        .contains("Black Panther: Wakanda Forever")
      cy.get('#Black\\ Panther\\:\\ Wakanda\\ Forever\\ rating')
        .should('be.visible')
        .contains('4')


      cy.get('[href="/934641"]')
        .should('be.visible')
      cy.get('#Black\\ Adam\\ img')
        .should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
        cy.get('#The\\ Minute\\ You\\ Wake\\ Up\\ Dead\\ title')
        .should('be.visible')
        .contains("The Minute You Wake Up Dead")
      cy.get('#The\\ Minute\\ You\\ Wake\\ Up\\ Dead\\ rating')
        .should('be.visible')
        .contains('5')
      
    })
});

