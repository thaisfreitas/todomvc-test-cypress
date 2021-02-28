/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('Todo Actions', () => {

    const todoPage = new TodoPage();

    beforeEach(() => {
        todoPage.navigate();        
        todoPage.addTodo('Clean room');
    });

    it('should add a new todo to the list', ()=>{
        todoPage.validateTodoTxt(0, 'Clean room');
        cy.get('.toggle').should('not.be.checked');
    });
    
    it('should mark a todo as completed', () => {    
        todoPage.toggleTodo(1);
        todoPage.validateTodoIsCompleted(1);
    });
    
    it('should clear completed todos', () => {
        todoPage.clearTodos()

        todoPage.validateNumberOfTodosShown(0);
    });
});