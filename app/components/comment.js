import React from 'react';
import Util from '../util';
//import Util from './app/util';

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <a href="#">{this.props.author.fullName}</a> {this.props.children}
          <br /><a href="#">Like</a> · <a href="#">Reply</a> ·
            {Date(this.props.postDate).toLocaleString}
        </div>
      </div>
    )
  }
}
