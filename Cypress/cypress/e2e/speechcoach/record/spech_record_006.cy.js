describe(" after 30sec click on done donerecord",()=>{

    it("spch_record_006",()=>{
        cy.visit("https://dev02.speechpundit.com").wait(8000)
        cy.get('[href="/login"]').click()
        cy.get("input[name='email']").type("pavani.dulam+student29@applines.com")
        cy.get("input[name='password']").type("root123")
        cy.get('form').submit()
        cy.wait(3000)
        cy.contains("Record").click()
        cy.contains("Start").click().wait(31000)
        cy.contains("Done").click()

    })
})