describe('Header Navigation Testing', ()=>{
    it('Search Linktext Test', ()=>{
        cy.visit('http://qalab.pl.tivixlabs.com/',{failOnStatusCode: false})
        cy.get('#model').type('Toyota Aygo-11-20')
        cy.get('#pickup').type('2022-11-20')
        cy.get('#dropoff').type('2022-11-21')
        cy.get("button[type='submit']").click()
        cy.get(".nav-link").click()
        
    })
        
})