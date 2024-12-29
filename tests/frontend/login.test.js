describe('Login Page', () => {
    it('should log in successfully with valid credentials', () => {
      cy.visit('/login');
      cy.get('input[name="email"]').type('admin@example.com');
      cy.get('input[name="password"]').type('adminpassword');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should show error for invalid login', () => {
      cy.visit('/login');
      cy.get('input[name="email"]').type('admin@example.com');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid credentials').should('be.visible');
    });
  });
  