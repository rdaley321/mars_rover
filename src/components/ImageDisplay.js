import React, {Component} from 'react';

export default class ImageDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.images.map((image) =>
          <div key={image.id}>
            <img src={image.img_src} alt='rover' />
          </div>
        )}
      </div>
    );
  }
}
