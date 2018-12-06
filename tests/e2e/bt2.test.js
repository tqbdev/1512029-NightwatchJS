module.exports = {
  'Check footer is present'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .pause(1000)
      .expect.element('footer').to.be.present;
    client.end();
  },

  'Check input value is correct with what typed'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementPresent('input.new-todo', 1000)
      .setValue('input.new-todo', 'Dummy Todo Item')
      .expect.element('input.new-todo')
      .to.have.value.that.equals('Dummy Todo Item');
    client.end();
  },

  'Check Todo List is present after added one Todo Item'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .pause(1000)
      .setValue('input.new-todo', ['Todo Item 1', client.Keys.ENTER])
      .expect.element('.todo-list')
      .to.be.present;
    client.end();
  },

  'Check Todo List total items after added three Todo Item'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .pause(1000)
      .setValue('input.new-todo', ['Todo Item 1', client.Keys.ENTER])
      .setValue('input.new-todo', ['Todo Item 2', client.Keys.ENTER])
      .setValue('input.new-todo', ['Todo Item 3', client.Keys.ENTER])
      .assert.elementCount('.todo-list li', 3)
    client.end();
  }
};
