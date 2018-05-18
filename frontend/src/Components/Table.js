import React, { Component } from 'react';
import './style/Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
        repository:{}
    };
  }  
  render() {
    return (
        <table id={this.props.id} className={this.props.classes}>
            <tbody>
                {this.loadBody()}
            </tbody>
        </table>
    );
  }

  loadBody(){
    let body = this.props.body;
    let html_body = []
    let line = []
    if (body){
        for(let i = 0; i < body.length; i++){
            for(let j = 0; j < body[i].length; j++){
                if(i === 6 && j === 1){
                    line.push(<td key={Math.random()}><a href={body[i][j]}>{body[i][j]}</a></td>)
                }
                else{
                    if(i === 11 && j === 1){
                        line.push(<td key={Math.random()}><a href={body[i][j]}>{body[i][j]}</a></td>)
                    }
                    else{
                        line.push(<td key={Math.random()}>{body[i][j]}</td>)
                    }
                }
            }
            html_body.push(<tr key={Math.random()}>{ line }</tr>)
            line = []
        }   
        return(html_body)     
    }
    else{
        return(<tr></tr>)
    }
  }
}

export default Table;