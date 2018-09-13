'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Your registration form is submitted.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Submit'
    );
  }
}

const domContainer = document.querySelector('#submit_button_container');
ReactDOM.render(e(LikeButton), domContainer);