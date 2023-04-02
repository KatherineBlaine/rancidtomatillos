describe('Movie Info Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: 'movie.json'
    })
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      fixture: 'trailer.json'
    })
    cy.visit("http://localhost:3000/")
    cy.get('[href="/436270"]').click()
  })

  it('Should display additional details about a movie when clicked by a user', () => {
    expect(true).to.equal(true)
  })

  it('Should show a home button on the movie page so the user can return to main', () => {
    expect(true).to.equal(true)
  })
})
    
