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
            <thead>
                {this.loadHeader()}
            </thead>
            <tbody>
                {this.loadBody()}
            </tbody>
        </table>
    );
  }
  loadHeader(){
    let headers = this.props.headers;
    let html_headers = []
    if (headers){
        for(let i = 0; i < headers.length; i++){
            html_headers.push(<th key={Math.random()}>{headers[i]}</th>)
        }   
        return(<tr>{html_headers}</tr>)     
    }
    else{
        return(<tr></tr>)
    }
  }
  loadBody(){
    let body = this.props.body;
    let html_body = []
    let line = []
    if (body){
        for(let i = 0; i < body.length; i++){
            for(let j = 0; j < body[i].length; j++){
                line.push(<td key={Math.random()}>{body[i][j]}</td>)
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
