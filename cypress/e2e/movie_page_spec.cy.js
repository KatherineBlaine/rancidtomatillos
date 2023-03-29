describe('Movie Info Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    .get('.movie-container > :nth-child(1)').click()
  })

  it('Should display additional details about a movie when clicked by a user', () => {
    cy.get('h3').should('be.visible').contains('Fake Movie Title')
    cy.get('.right-content > :nth-child(2)').should('be.visible').contains('6')
    cy.get('.right-content > :nth-child(3)').should('be.visible').contains('Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!')
    cy.get('.right-content > :nth-child(4)').should('be.visible').contains('Drama')
    cy.get('.right-content > :nth-child(5)').should('be.visible').contains('63000000')
    cy.get('.right-content > :nth-child(6)').should('be.visible').contains('100853753')
    cy.get('.right-content > :nth-child(7)').should('be.visible').contains('139')
    cy.get('.right-content > :nth-child(8)').should('be.visible').contains('It\'s a movie!')
  })

  it('Should show a home button on the movie page so the user can return to main', () => {
    cy.get('button').should('be.visible').contains('Home').click()
    cy.contains('Black Adam')
  })
})
    
