import React, { Component } from 'react';
import {Col, Row, Button, Navbar, Card, Input, Icon} from 'react-materialize'

import './App.css';

class App extends Component {
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
                      <Input s={12} label="First Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input s={12} label="Second Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input s={12} label="Third Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input s={12} label="Fourth Language" />
                    </Col>
                    <Col s={12} m={2}>
                      <Input s={12} label="Fifth Language" />
                    </Col>
                  </Row>
                  <Row>
                    <Button className='right primaryBackgroundColor search-btn'>
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
}

export default App;
