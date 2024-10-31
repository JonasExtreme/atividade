cypress/integration/login.spec.js
describe('Login Test', () => {
  it('Deve fazer login e redirecionar para o dashboard', () => {

    cy.visit('/login');

    cy.get('input[name="username"]').type('seu-usuario');

    cy.get('input[name="password"]').type('sua-senha');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
  });
});