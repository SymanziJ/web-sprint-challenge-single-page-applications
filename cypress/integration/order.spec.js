describe("Form Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })

    const nameInput = () => cy.get("input[name=name]");
    const pepperoniInput = () => cy.get("input[name=pepperoni]");
    const onionsInput = () => cy.get("input[name=onions]");
    const bPeppersInput = () => cy.get("input[name=bpeppers]");
    const mushroomsInput = () => cy.get("input[name=mushrooms]");
    const submitButton = () => cy.get("button[id=order-button]");


    it("Sanity check", () => {
        expect(1 + 1).to.equal(2);
    }) 


    describe("Testing MVP", () => {

        it("test that you can add text to the box", () => {
            nameInput()
                .should("have.value", "")
                .type("Expecto some Texto")
                .should("have.value", "Expecto some Texto");

        })


        it("test that you can select multiple toppings", () => {
            pepperoniInput()
                .click()
                .should('have.checked', "true");
            onionsInput()
                .click()
                .should('have.checked', "true");
            bPeppersInput()
                .click()
                .should('have.checked', "true");
            mushroomsInput()
                .click()
                .should('have.checked', "true");
        })

        it("test that you can submit the form", () => {
            submitButton()
                .should("exist");
        })

    })











})