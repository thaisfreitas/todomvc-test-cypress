export class TodoPage {
    navigate() {
        cy.visit('https://todomvc.com/examples/vanilla-es6/')
    }

    addTodo(todoText){
        cy.get('input.new-todo').type(todoText + '{enter}')
    }

    validateTodoTxt(todoIndex, expectedText){
        cy.get(`ul.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text',expectedText);
    }

    toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    validateTodoIsCompleted(todoIndex){
        const todo = cy.get(`ul.todo-list li:nth-child(${todoIndex}) label`);
        todo.should('have.css', 'text-decoration-line', 'line-through');
    }

    validateNumberOfTodosShown(expectedNumberOfTodos){
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    clearTodos(){
        cy.get('.toggle').click();
        cy.contains('Clear').click();
    }

    filterActiveTodos(){
        cy.contains('Active').click();
    }

    filterCompletedTodos(){
        cy.contains('Completed').click();
    }

    showAllTodos(){
        cy.contains('All').click();
    }
}