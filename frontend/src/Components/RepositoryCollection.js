import React, { Component } from 'react';
import { Card,  Col } from 'react-materialize'
import Repository from './Repository'
class RepositoryCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        repository:{}
    };
  }
 
  
  render() {
    return (
        <div className='git_repository_collection'>
            <Card className='green lighten-4 card_repository' textClassName='black-text' title={this.props.language}>
                {this.createRepositories()}
            </Card>
        </div>
    );
  }
  createRepositories(){
      let popular_repositories = this.props.language_result
      if(popular_repositories && popular_repositories.language === this.props.language){
        let items = popular_repositories.repositories.items
        let items_list = []
        //create each repository as a card (The omponent Repository)
        for(let i = 0; i < items.length; i++){            
            items_list.push(
                <Col s={12} m={6} l={4} key={Math.random()}>
                    <Repository
                        data={items[i]}
                    />
                </Col>
            )
        }
        return(items_list)
      }
  }
}

export default RepositoryCollection;
