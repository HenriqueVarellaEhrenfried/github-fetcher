import React, { Component } from 'react';
import axios from 'axios';
import {Col, Row, Button, Navbar, Card, Input, Icon} from 'react-materialize'
import {GITHUB_API, BACKUP_API} from './enviroment'
import RepositoryCollection from './Components/RepositoryCollection'
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
            <Col s={12}>
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
          {this.showRepositories()}

        </div>
    );
  }
  getProjects(){
    // function called to search projects in GitHub by language
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
    // function called to search projects in GitHub using its API
    axios.get(`${GITHUB_API}/search/repositories?q=language:${lang}&s=star`).then( response => {
      let data = {};
      let state = this.state.language_result;
      data['language'] = lang;
      data['repositories'] = response.data;
      let info = this.formatDataToSave(data['repositories']['items'])
      this.insertInDatabase(info)
      state.push(data);
      this.setState({language_result: state});
    }).catch(error => {
      console.log(error);
    });
  }
  insertInDatabase(data){
    // function called to save important data about the projects in my database
    axios.post(`${BACKUP_API}/repositories_bulk`, {'items':data}).then( response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  showRepositories(){
    // function called create a cards that contain the repositories by language
    let languages = this.state.language;
    let colletions = []
    for(let i = 0; i < languages.length; i++){
      colletions.push(
        <Row key={Math.random()}>
          <Col s={12}>
            <RepositoryCollection 
              language={this.state.language[i]}
              language_result={this.state.language_result[this.searchIndex(this.state.language[i])]}
            />
          </Col>
        </Row>
      )
    }
    return colletions
  }
  searchIndex(lang){
    // function called to search the index of the language
    let repos = this.state.language_result;
    for(let i=0; i < repos.length; i++){
      if(repos[i].language === lang){
        return i;
      }
    }
  }
  formatDataToSave(data){
    // function called to format a json to pass to insertInDatabase
    let date = (new Date()).toJSON()
    let rep_info = []
    for(let i = 0; i < data.length; i++){      
      rep_info.push({
          'repository_name': data[i].name ? data[i].name : '',
          'repository_created_at':data[i].created_at ? data[i].created_at : '', 
          'forks_count': data[i].forks_count ? data[i].forks_count : '',
          'language_used': data[i].language ? data[i].language : '',
          'license_name': data[i].license ?  data[i].license.name ? data[i].license.name : 'No License' : 'No License',
          'open_issues_count': data[i].open_issues_count ? data[i].open_issues_count : '', 
          'repository_html_url': data[i].html_url ? data[i].html_url : '',
          'pushed_at': data[i].pushed_at ? data[i].pushed_at : '',
          'stargazers_count': data[i].stargazers_count ? data[i].stargazers_count : '',
          'watchers_count': data[i].watchers_count ? data[i].watchers_count : '',
          'owner_login': data[i].owner.login ? data[i].owner.login : '',
          'owner_html': data[i].owner.html_url ? data[i].owner.html_url : '',
          'when_saved': date
      })
    }
    return rep_info;  
  }
}

export default App;
