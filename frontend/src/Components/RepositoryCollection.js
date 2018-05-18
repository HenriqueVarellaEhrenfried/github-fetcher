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
            <Card className='green lighten-4 card_repository' textClassName='black-text' title={this.props.language}>
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
                    key={Math.random()}
                    data={items[i]}
                />
            )
        }
        return(items_list)
      }
      else{
          if(popular_repositories){
            console.log(`GOT ${popular_repositories.language}, EXPEXCTED ${this.props.language}`)
          }
      }
  }
}

export default RepositoryCollection;
