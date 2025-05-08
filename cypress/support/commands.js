Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-cy=email-input]').type(email);          // Escribe el correo electrónico en el campo de entrada.
    cy.get('[data-cy=password-input]').type(password);    // Escribe la contraseña en el campo de entrada.
    cy.get('[data-cy=login-button]').click();             // Hace clic en el botón de inicio de sesión.
});
