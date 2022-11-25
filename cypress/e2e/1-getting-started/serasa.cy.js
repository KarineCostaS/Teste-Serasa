
describe('Acessar pagina inicial', () => {

  it('visitar o site', () => {
    cy.viewport('macbook-11')
    cy.visit('https://www.serasa.com.br/ecred/simulador')
    
  })

  it('Validar slider valor de 1.0000', () => {
    
  cy.get('#slider-range')
  .invoke('val', 1000)
  .should('have.value', 1000)
  .trigger('change').click({force:true})
 
   
  })

it('Validar slider no valor de 4.0000', () => {

  cy.get('#slider-range') //validar valor do emprestimo
.invoke('val', 4000)
.should('have.value', 4000)
.trigger('change').click({force:true})

cy.get('#slider-range-month') //validar parcelas
.invoke('val', 12)
.should('have.value', 18)
.trigger('change').click({force:true})

})

it('Validar slider no valor de 6.0000', () => {

  cy.get('#slider-range') //validar valor do emprestimo
.invoke('val', 6000)
.should('have.value', 6000)
.trigger('change').click({force:true})

cy.get('#slider-range-month') //validar parcelas
.invoke('val', 24)
.should('have.value', 30)
.trigger('change').click({force:true})

})


})