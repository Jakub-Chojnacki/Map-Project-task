
describe("Test whether history works", ()=> {
    it("Shows fallback if history is empty", ()=>{
        cy.wait(10000)
        cy.visit("localhost:3000");
        cy.contains("button", "Show History").click({force:true})
        cy.contains("p","There is no history to show")
    })
    it("Can show history if it's saved", ()=>{
        cy.visit("localhost:3000");
        cy.setLocalStorage("searches",'[{"addressA":" London, United Kingdom","addressB":" Manchester, United Kingdom","id":1}]')
        cy.contains("button", "Show History").click({force:true})
        cy.contains("div","From London, United Kingdom To Manchester, United Kingdom")
        
    })

})