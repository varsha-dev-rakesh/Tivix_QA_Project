describe('check element get concept', ()=>{
    it('element get testing', ()=>{
        cy.visit('http://qalab.pl.tivixlabs.com/',{failOnStatusCode: false})
        cy.get('.alert.alert-danger').should('be.visible').and('contain','Please fill pickup and drop off dates')
    })
})
