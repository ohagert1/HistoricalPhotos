import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {fetchPhotos} from '../reducers/actionCreators';
import PhotoList from './PhotoList';
import store from '../store';

class Main extends Component {

  constructor() {
    super();
  }

//GETS DATA FROM DB ON COMPONENT DID MOUNT
  componentDidMount () {
    const photosThunk = fetchPhotos();
    store.dispatch(photosThunk);
  }

  render () {
    return (
      <div>
        <main>
          <Switch>
            <Route path="/photos" render={(props) => (
              <PhotoList photos={this.props.photos}/>
              )}/>
          </Switch>
        </main>
        <img/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return{
    photos: state.photos
  }
}

const MainContainer = withRouter(connect(mapStateToProps, null)(Main));

export default MainContainer;
