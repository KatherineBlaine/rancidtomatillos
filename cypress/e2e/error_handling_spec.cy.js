describe('Fetch error handling', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 501,
      body: {
        message: 'No Such Path'
      }
    });
    cy.visit("http://localhost:3000/");
  })

  it('Should display an error message when fetch request fails', () => {
    cy.get('h2')
      .contains('No Such Path');
  })
})

describe('Search error handling', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: 'movies.json'
    })
    cy.visit("http://localhost:3000/");
  })

  it('Should display an error message when no movies match user search input', () => {
    cy.get('.movie-container').children().should('have.length', 5);
    cy.get('#search-field').type('ajenfojnel');
    cy.get('.movie-container').children().should('have.length', 0);

    cy.get('h2').contains('No results match your search, sorry!');
  })

})

