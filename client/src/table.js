import React, { Component } from 'react';
import Header from './header';
import Content from './content';

class Table extends Component {

  render() {
    return (
      <div className='Table'>
        <table>
          <Header headers={this.props.headers} />
          <Content content={this.props.content} />
        </table>
      </div>
    )
  }
}

export default Table;
