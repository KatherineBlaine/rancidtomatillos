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