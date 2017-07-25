import React, {Component} from 'react';

export default class GetImageButton extends Component {
  render() {
    return (
      <div>
          <input type="submit" onClick={this.props.onClick}/>
      </div>
    );
  }
}
