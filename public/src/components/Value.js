import React, {Component} from "react";

class Value extends Component{
  render() {
    return (
      <div>
        <button onClick={this.props.onGet} className="btn btn-info">点我获取后台数据</button>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Value;
