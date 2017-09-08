import React, { Component } from 'react';
import Network from './network';
import Table from './table';

const network = new Network();

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      content: []
    }
  }

  componentDidMount() {
    network.getData((headers, content) => {
      this.setState({headers: headers});
      this.setState({content: content});
    })
  }

  render() {
    return (
      <div className='Grid'>
        <Table
          headers={this.state.headers}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default Grid;
