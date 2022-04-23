
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
        cy.wait(2000)
    })

    it("shows results button", ()=> {
        cy.contains("button", "Check results").click()
        cy.wait(2000)
    })

    it("displays the results", ()=> {
        cy.contains("p","You are traveling from:")
        cy.contains("p","To:")
        cy.contains("p", "Price per km: 1.25")
        cy.contains("p", "Total cost: 1017.06zł")
    })

    it("Can change price per km", ()=> {
        cy.get('input').clear().type("1.30")
        cy.contains("p", "Price per km: 1.30")
        cy.contains("p","Total cost: 1017.75zł")
    })

})