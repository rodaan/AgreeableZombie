import React, { PropTypes, Component } from 'react';
import Canvas from './Canvas.jsx';

class DrawingTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'#000000',
      pen:true,
      undo:false,
      text:false
    };
  }

  handleColorChange (color) {
    this.setState({
      color:color
    });
  }

  handleClear () {
    //socket in order to emit if there is a clear
    socket.emit('clearCanvas');
  }

  render() {
    return (
      <div className="drawingTools">
        <Canvas color = {this.state.color}/>
        <ul>
          <li><button><img src=""/>pen</button></li>
          <li><button onClick = {() => {this.handleColorChange('#ffd93b');}}>Yellow</button></li>
          <li><button onClick = {() => {this.handleColorChange('#000000');}}>Black</button></li>
          <li><button><img src=""/>text</button></li>
          <li><button><img src=""/>undo</button></li>
          <li><button onClick= {this.handleClear}><img src=""/>clear</button></li>

      </ul>
      </div>
    );
  }
};

export default DrawingTools;
