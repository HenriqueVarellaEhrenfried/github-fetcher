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
  
  render() {
    return (
        <div className='git_repository'>
            <Card className='white' textClassName='black-text' title={this.state.repository.name}>
                <Row>
                    <Col s={12}>
                        <Table 

                            headers={this.state.repository.header}
                            body={this.state.repository.body}
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    );
  }
  tableMounter(data){
      console.log("DATA IN TABLE_MOUNTER")
    let rep_info = {}
    rep_info['header'] = [
        'Created at',  'Number of forks', 'Language', 'License', 
        'Number of issues open', 'URL', 'Last push', 'Number of stargazers', 
        'Number of watchers', 'Owner login', 'Owner URL'
    ]
    rep_info['body'] = [
        data.created_at, data.forks_count, data.language, data.license.name,
        data.open_issues_count, data.html_url, data.pushed_at, data.stargazers_count,
        data.watchers_count, data.owner.login, data.owner.html_url
    ]
    return rep_info;
  }
}

export default Repository;
