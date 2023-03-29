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

    it('Should display a collection of movies', () => {
      cy.contains('Black Adam')
      cy.contains('The Woman King')
      cy.contains('R.I.P.D. 2: Rise of the Damned')
      cy.contains('Black Panther: Wakanda Forever')
      cy.contains('The Minute You Wake Up Dead')
      cy.contains('Paradise City')
      cy.contains('Blowback')
      cy.contains('Smile')
      cy.contains('Lyle, Lyle, Crocodile')
      cy.contains('Maneater')
    })

    it('Should display the poster image for each movie', () => {
      cy.get(':nth-child(1) > .poster-img').should('be.visible')
      cy.get(':nth-child(2) > .poster-img').should('be.visible')
      cy.get(':nth-child(3) > .poster-img').should('be.visible')
      cy.get(':nth-child(4) > .poster-img').should('be.visible')
      cy.get(':nth-child(5) > .poster-img').should('be.visible')
      cy.get(':nth-child(6) > .poster-img').should('be.visible')
      cy.get(':nth-child(7) > .poster-img').should('be.visible')
      cy.get(':nth-child(8) > .poster-img').should('be.visible')
      cy.get(':nth-child(9) > .poster-img').should('be.visible')
      cy.get(':nth-child(10) > .poster-img').should('be.visible')
    })
});

describe('Main page error handling', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 501,
      body: {
        message: 'No Such Path'
      }
    })
    cy.visit("http://localhost:3000/")
  })

  it('Should display an error message when fetch request fails', () => {
    cy.get('h2')
      .contains('No Such Path')
  })
})