import React, { Component } from 'react';

class PhotoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.photos.length) {
      console.log('photos', this.props.photos)
    }
    return (
      <div>
      { this.props.photos.length &&
          this.props.photos.map((photo) => {
            return(
              <div key={photo.imageID}>
                <img src={'https://images.nypl.org/index.php?id=' + photo.imageID + '&t=w'}></img>
                <h3>{photo.title}</h3>
              </div>
            )
          })

      }
      </div>
    )
  }
}

export default PhotoList
