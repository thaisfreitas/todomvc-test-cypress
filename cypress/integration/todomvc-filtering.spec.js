/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";


describe('TodoMVC Filtering',() => { 
    
    const todoPage = new TodoPage();

    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        todoPage.addTodo('Clean room');
        todoPage.addTodo('Learn JavaScript');
        todoPage.addTodo('Use Cypress');
        
        todoPage.toggleTodo(2)
    });

    it('should filter "Active" todos', () => {
        todoPage.filterActiveTodos();
        todoPage.validateNumberOfTodosShown(2);
    });
    
    it('should filter "Completed" todos', () => {
        todoPage.filterCompletedTodos();
        todoPage.validateNumberOfTodosShown(1);
    });
    
    it('should filter "All" todos', () => {
        todoPage.showAllTodos();
        todoPage.validateNumberOfTodosShown(3);
    });

});