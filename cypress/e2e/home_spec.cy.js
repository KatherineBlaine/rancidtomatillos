describe('Main page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/", {
      statusCode: 200,
    })
    cy.visit("http://localhost:3000/")
  });

    it('Should display the page title', () => {
      cy.get('h1')
        .contains('Rancid Tomatillos')
    });

    it('Should display a collection of movies', () => {
        cy.contains('Black Adam')
        cy.contains('The Woman King')
    })

    it('Should display additional details about a movie when clicked by a user', () => {
      cy.get('.movie-card')
        .contains('Rating:').click()
        cy.contains('Fake Movie Title')
        cy.contains('6')
        cy.contains('Some overview that is full of buzzwords to attempt to entice you to watch this movie!')
        cy.contains('Explosions! Drama! True love! Robots! A cute dog!')
        cy.contains('Drama')
        cy.contains('63000000')
        cy.contains('100853753')
        cy.contains('139')
        cy.contains('It\'s a movie!')
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