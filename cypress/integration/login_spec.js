describe('Página de eventos autenticada', () => {
  it('debe permitir ver los eventos después de iniciar sesión', () => {
    
    window.localStorage.setItem('authToken', 'mocked-token'); 

    
    cy.visit('/allevents');  

    
    
    cy.contains('Eventos').should('exist');  
    
  });
});