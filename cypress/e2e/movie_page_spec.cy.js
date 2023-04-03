describe('Movie Info Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: 'movie.json'
    })
    cy.visit("http://localhost:3000/")
    cy.get('[href="/436270"]').click()
  })

  it('Should update the URL based on the selected movie', () => {
    cy.url().should('eq', 'http://localhost:3000/436270')
  })

  it('Should display movie page when a user clicks on a movie and hide the main page', () => {
    cy.get('.movie-container').should('not.exist')
    cy.get('.movie-page').should('be.visible')
  })

  it('Should contain all relevant movie data DOM elements within the movie page', () => {
    cy.get('img').should('be.visible')
    const pageElements = ['h2', 'h3', '.tagline', '.right-content > :nth-child(2) > :nth-child(3)', '.right-content > :nth-child(3) > :nth-child(1)', ':nth-child(3) > :nth-child(5)', '.detail-cards-container > :nth-child(1)', '.detail-cards-container > :nth-child(2)', '.detail-cards-container > :nth-child(3)' ]
    pageElements.forEach(element => {
      cy.get(element)
        .should('be.visible')
    })
  })

  it('Should show data about the specific movie selected by the user', () => {
    cy.get('img').should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg")
    cy.get('h2').contains('Black Adam')
    cy.get('h3').contains('DESCRIPTION')
    cy.get('.tagline').contains('The world needed a hero. It got Black Adam.')
    cy.get('.right-content > :nth-child(2) > :nth-child(3)').contains("Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
  
  
    const subheadings = ['Release:', 'Length', 'Genres']
  
    subheadings.forEach(subheading => {
      cy.get('.right-content > :nth-child(3)')
      .contains(subheading)
    })
  
    cy.get('.right-content > :nth-child(3) > :nth-child(1)').contains("2022-10-19")
    cy.get(':nth-child(3) > :nth-child(3)').contains(125)
    cy.get(':nth-child(3) > :nth-child(5)').contains('Action, Fantasy, Science Fiction')
  
    const movieStats = ['Budget', 'Revenue', 'Rating']
  
    movieStats.forEach(stat => {
      cy.get('.detail-cards-container')
      .contains(stat)
    })
  
    cy.get('.detail-cards-container > :nth-child(1)').contains(200000000)
    cy.get('.detail-cards-container > :nth-child(2)').contains(384571691)
    cy.get('.detail-cards-container > :nth-child(3)').contains(4)
  })

  it('Should show a home button on the movie page so the user can return to main', () => {
    cy.get('.home-btn').should('be.visible').click()
    cy.get('.movie-container').should('be.visible')
    cy.get('.movie-page').should('not.exist')
    cy.url().should('eq', "http://localhost:3000/")
  })

})
    
