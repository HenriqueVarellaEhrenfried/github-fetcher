import React, { Component } from 'react';
import axios from 'axios';
import {Col, Row, Button, Navbar, Card, Input, Icon} from 'react-materialize'
import {GITHUB_API} from './enviroment'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: [],
      language_result: []
    };
    this.getProjects = this.getProjects.bind(this);
    this.searchProjects = this.searchProjects.bind(this);
  }

  render() {
    return (
        <div className='git_fetcher'>
          <Navbar brand='GIT FETCHER' fixed={true} className='navbar-header'/>
          <Row className='item_card '>
            <Col m={12} s={12}>
                <Card className='white' textClassName='black-text' title='GitHub repositories languages'>
                  <p>
                    Chose your languages
                  </p>
                  <Row className='insed_item_card'>
                    <Col offset={'m1'} s={12} m={2}>
                      <Input className='1Lang'  s={12} label="First Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input className='2Lang' s={12} label="Second Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input className='3Lang' s={12} label="Third Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input className='4Lang' s={12} label="Fourth Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input className='5Lang' s={12} label="Fifth Language" />
                    </Col>
                  </Row>
                  <Row>
                    <Button 
                      className='right primaryBackgroundColor search-btn'
                      onClick={this.getProjects}
                    >
                      <Icon left>search</Icon>
                      Search for repositories
                    </Button>
                  </Row>
                </Card>
            </Col>
          </Row>
        </div>
    );
  }
  getProjects(){
    let array_of_languages = [];
    this.setState({language:[], language_result: []});
    for(let i = 1; i < 6; i++){
      let lang = document.getElementsByClassName(`${i}Lang`)[0].value;
      if(lang){
        this.searchProjects(lang);
        array_of_languages.push(lang);
      }
    }
    this.setState({language:array_of_languages});
  }
  searchProjects(lang){
    console.log("URL >>", `${GITHUB_API}/search/repositories?q=language:${lang}&s=star`)
    axios.get(`${GITHUB_API}/search/repositories?q=language:${lang}&s=star`).then( response => {
      console.log(response.data);
      let data = {};
      let state = this.state.language_result;
      console.log(state);
      data['language'] = lang;
      data['repositories'] = response.data;
      state.push(data);
      this.setState({language_result: state});
    }).catch(error => {
      console.log(error);
    });
  }

}

export default App;
