
describe("Test homepage", ()=>{
    it("can input waypointA", ()=>{
        cy.visit("localhost:3000");
        cy.get('input')
        cy.get('input[placeholder="Enter point A"]').type('Gdańsk{enter}')
        cy.get('li').first().click({force:true})
        cy.wait(1000)
    })

    it("can input waypointB", ()=> {
       
        cy.get('input[placeholder="Enter point B"]').type('Sopot{enter}')
        cy.wait(2000)
        cy.get('li[data-result-index="0"] a').click({force:true, multiple:true})
        
    })

    it("shows results button", ()=> {
        cy.contains("button", "Check results").click()
       
        
    })

})