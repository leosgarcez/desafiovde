/// <reference types="cypress" />

context('Tests Cases in the Caderno Digital Menu', () => {

    it('Acessar portal', () => {
        cy.visit('https://betaconcursos.metodovde.com.br/')
        cy.get('input.pl-3').click();
        cy.get('input.pl-3').type('leosgarcez@gmail.com');
        cy.get('button.w-full').click();
        cy.wait(2000)
        cy.get('input.pl-3').type('Leonardo223!');
        cy.get('button.w-full').click({force: true});
      })
    

    it('Acessar portal caderno digital', () => {
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital')
        cy.get('input.pl-3').click();
        cy.get('input.pl-3').type('leosgarcez@gmail.com');
        cy.get('button.w-full').click();
        cy.wait(2000)
        cy.get('input.pl-3').type('Leonardo223!');
        cy.get('button.w-full').click({ force: true });
        cy.wait(2000)
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital');
    });

    it('Criar novo carderno', () => {
        cy.visit('https://betaconcursos.metodovde.com.br')
        cy.get('input.pl-3').click();
        cy.get('input.pl-3').type('leosgarcez@gmail.com');
        cy.get('button.w-full').click();
        cy.wait(2000)
        cy.get('input.pl-3').type('Leonardo223!');
        cy.get('button.w-full').click({ force: true });
        cy.wait(2000)
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital');
        cy.wait(2000)
        cy.contains('Criar novo caderno').click();
        cy.get('.gap-4 > .flex-col > .flex').type("Criado no Cypress");
        cy.get('.justify-end > .bg-gradient-to-tr').click();
        cy.contains('Criado no Cypress').should('be.visible');
    })

    it('Criar novo documento dentro de um caderno digital', () => {
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital')
        cy.get('input.pl-3').click();
        cy.get('input.pl-3').type('leosgarcez@gmail.com');
        cy.get('button.w-full').click();
        cy.wait(2000)
        cy.get('input.pl-3').type('Leonardo223!');
        cy.get('button.w-full').click({ force: true });
        cy.wait(2000)
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital');
        cy.contains('Criado no Cypress').click()
        cy.contains('Criar novo documento').click()
        cy.get('#editor-title').clear().type("Titulo teste Cypress")
        cy.get('#editor').clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo urna, scelerisque commodo lacus a, iaculis congue lorem. Sed in imperdiet ante, sed mollis nulla. Phasellus id tristique lacus, a aliquam turpis. Ut quis sapien eu augue porttitor sagittis sit amet consequat lectus. Nunc viverra orci mauris, non dignissim velit ultrices eu. Vestibulum nibh tellus, lacinia et porta et, pharetra sit amet leo. Nullam congue, nunc eget ultricies ultricies, est est vestibulum erat, in tempor dolor orci in nibh. Donec viverra ultrices lorem, a sagittis felis hendrerit sed.')
    });

    it('Criar novo documento dentro de um caderno digital', () => {
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital')
        cy.get('input.pl-3').click();
        cy.get('input.pl-3').type('leosgarcez@gmail.com');
        cy.get('button.w-full').click();
        cy.wait(2000)
        cy.get('input.pl-3').type('Leonardo223!');
        cy.get('button.w-full').click({ force: true });
        cy.wait(2000)
        cy.visit('https://betaconcursos.metodovde.com.br/caderno-digital');
        cy.contains('Criado no Cypress').click()
    });
});