import React, { Component } from 'react';
import {Card } from 'react-materialize'
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
            <Card className='green lighten-4' textClassName='black-text' title={this.props.language}>
                {this.createRepositories()}
            </Card>
        </div>
    );
  }
  createRepositories(){
      let popular_repositories = this.props.language_result
      console.log(popular_repositories)
      if(popular_repositories && popular_repositories.language === this.props.language){
        let items = popular_repositories.repositories.items
        console.log(items)
        let items_list = []
        for(let i = 0; i < items.length; i++){
            items_list.push(
                <Repository
                    data={items[i]}
                />
            )
        }
        return(items_list)
      }
  }
}

export default RepositoryCollection;
