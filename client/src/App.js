import React, { Component } from 'react';
import Network from './network';
import Table from './table';
import Modal from './modal';

const network = new Network();

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      content: [],
      modalIsOpen: false,
      value: ''
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    network.getData((headers, content) => {
      this.setState({headers: headers});
      this.setState({content: content});
    })
  }

  handleOnClick = (e) => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      value: e.target.innerHTML
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='grid'>
          <Table
            headers={this.state.headers}
            content={this.state.content}
            handleOnClick={this.handleOnClick}
          />
        </div>
        <div className='modal'>
          <Modal
            show={this.state.modalIsOpen}
            onClose={this.handleOnClick}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default Grid;
