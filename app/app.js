import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed';
import Commententry from './components/commententry';
import FeedItem from './components/feeditem';
import StatusUpdate from './components/statusupdate';
import StatusUpdateEntry from './components/statusupdateentry'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
class ProfilePage extends React.Component {
  render() {
    return (
      <p>This is the profile page for a user with ID {this.props.params.id}.</p>
    );
  }
}

/**
 * The Feed page. We created a new component just to fix the userId at 4.
 */
class FeedPage extends React.Component {
  render() {
    return <Feed user={4} />;
  }
}


/**
 * The primary component in our application.
 * The Router will give it different child Components as the user clicks
 * around the application.
 *
 * If we implemented all of Facebook, this App would also contain Component
 * objects for the left and right content panes.
 */
class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={FeedPage} />
      <Route path="profile/:id" component={ProfilePage} />
    </Route>
  </Router>
),document.getElementById('fb-feed'));

  if (document.getElementById('fb-feed') !== null) {
  ReactDOM.render(
    <Feed user={4} />,
    document.getElementById('fb-feed')
  );
}

if (document.getElementById('feedItem') !== null) {
ReactDOM.render(
  <FeedItem />,
  document.getElementById('feedItem')
)
}

if (document.getElementById('comment') !== null) {
ReactDOM.render(
  <Comment />,
  document.getElementById('comment')
);
}

if (document.getElementById('commententry') !== null) {
ReactDOM.render(
  <Commententry />,
  document.getElementById('commententry')
);
}

if (document.getElementById('statusupdate') !== null) {
ReactDOM.render(
  <StatusUpdate />,
  document.getElementById('statusupdate')
);
}

if (document.getElementById('statusUpdateEntry') !== null) {
ReactDOM.render(
  <StatusUpdateEntry />,
  document.getElementById('statusUpdateEntry')
);
}
