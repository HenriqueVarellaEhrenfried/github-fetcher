import React, { Component } from 'react';
import { Col, Row, Card } from 'react-materialize'
import Table from './Table'
import './style/Repository.css';

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
        repository:{}
    };
  }
    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps) {
            if(nextProps.data){
                let repo_info = this.tableMounter(nextProps.data)
                this.setState({repository: repo_info});
            }
        }
    }  
    componentWillMount(){
        let repo_info = this.tableMounter(this.props.data)
        this.setState({repository: repo_info});
    }
  
  render() {
    return (
        <div className='git_repository'>
            <Card className= {'white card-repo'}  
            textClassName='black-text' title={this.state.repository.body[0][1].toUpperCase()}>
                <Row>
                    <Col s={12}>
                        <Table 
                            classes={'centered highlight striped repository-info'}
                            body={this.state.repository.body}
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    );
  }
  tableMounter(data){
      // function used to build the body of the table
      let rep_info = {}
        rep_info['body'] = [
            ['Name', data.name ? data.name : ''],
            ['Created at',data.created_at ? data.created_at : ''], 
            ['Number of forks', data.forks_count ? data.forks_count : ''],
            ['Language', data.language ? data.language : ''],
            ['License', data.license ?  data.license.name ? data.license.name : 'No License' : 'No License'],
            ['Number of issues open', data.open_issues_count ? data.open_issues_count : ''], 
            ['URL', data.html_url ? data.html_url : ''],
            ['Last push', data.pushed_at ? data.pushed_at : ''],
            ['Number of stargazers', data.stargazers_count ? data.stargazers_count : ''],
            ['Number of watchers', data.watchers_count ? data.watchers_count : ''],
            ['Owner login', data.owner.login ? data.owner.login : ''],
            ['Owner URL', data.owner.html_url ? data.owner.html_url : '']
        ]
    return rep_info;
  }
}

export default Repository;
