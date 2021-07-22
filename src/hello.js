import React, {Component} from "react";

class Hello extends Component{
  static defaultProps={
    name:"이름없음"
  }
  render(){
    const {color, name, isSpecial}=this.props;
    return (
      <div style={{color}}>
        {isSpecial && <b>*</b>}
        Hello 페이지 {name}
      </div>
    )
  }
}

export default Hello;