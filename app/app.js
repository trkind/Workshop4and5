import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed';
import Commententry from './components/commententry';
import FeedItem from './components/feeditem';
import StatusUpdate from './components/statusupdate';
import StatusUpdateEntry from './components/statusupdateentry'


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
