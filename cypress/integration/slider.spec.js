describe("Slider", () => {
	it("should pick a value on slider", () => {
		cy.visit("https://devexpress.github.io/testcafe/example")

		cy.get("#tried-test-cafe").click()
		cy.get(".slider-value").contains("5").click()
	})
})
