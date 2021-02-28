/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('visual validation', () => {
    const todoPage = new TodoPage();

    before(() => todoPage.navigate());

    beforeEach(()=> cy.eyesOpen({
        appName: 'TodoMVC Automation Cypress', 
        batchName: 'TodoMVC Hey',
        browser: [
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768},
            {deviceName: 'iPhone X'},
          ]
    }));
    
    afterEach(() => cy.eyesClose());

    it('TodoMVC should Look good', () => {
        cy.eyesCheckWindow('empty todo list');

        todoPage.addTodo('Clean room');
        todoPage.addTodo('learn JS');
        cy.eyesCheckWindow('two todos');

        todoPage.toggleTodo(0);

        cy.eyesCheckWindow('todo marked as completed');
    });

})