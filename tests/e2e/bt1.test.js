module.exports = {
  'Check app loaded successfully'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .expect.element('.todoapp')
      .to.be.visible.before(1000);
    client.end();
  },

  'Check input value is empty after loaded'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementPresent('input.new-todo', 1000)
      .expect.element('input.new-todo')
      .to.have.value.that.equals('');
    client.end();
  },

  'Check if Todo List is present'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .pause(1000)
      .expect.element('.todo-list').to.not.be.present;
    client.end();
  },

  'Check if added Todo Item has correct name'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .pause(1000)
      .setValue('input.new-todo', ['Todo Item 1', client.Keys.ENTER])
      .expect.element('.todo-list li label')
      .to.have.text.that.equals('Todo Item 1');
    client.end();
  }
};
