describe('Página de eventos autenticada', () => {
  it('debe permitir ver los eventos después de iniciar sesión', () => {
    // Simula el almacenamiento de un token de autenticación en el localStorage
    window.localStorage.setItem('authToken', 'mocked-token'); // Usamos un token de ejemplo

    // Visita la página de eventos
    cy.visit('/allevents');  

    
    
    cy.contains('Eventos').should('exist');  
    
  });
});