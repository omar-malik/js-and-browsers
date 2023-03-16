class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainer = document.querySelector('#main-container')

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const newDiv = document.createElement('div')
    newDiv.id = 'message';
    const inputMessage = document.querySelector('#message-input').value
    newDiv.textContent = inputMessage;

    this.mainContainer.append(newDiv)
  }

  hideMessage() {
    const message = document.querySelector('#message');

    message.remove();
    ;
  }
}

module.exports = MessageView;