import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'



class UserPage extends React.Component {
    state = {
        functions: 1,
        activeTab: 0,
        users: [],
    };

    changeStateFunctionsTab = () => {
        this.state.functions === 1 ? this.setState({ functions: 0 }) : this.setState({ functions: 1 })
    }

    changeTabTeam = () => {
        this.state.activeTab === 1 ? this.setState({ activeTab: 0 }) : this.setState({ activeTab: 1 })
    }

    changeTabUsers = () => {
        this.state.activeTab === 2 ? this.setState({ activeTab: 0 }) : this.setState({ activeTab: 2 })
    }


    render() {
        const activeTab = this.state.activeTab
        let tab;
        let page;
        if (activeTab === 1) {
            tab = <Col sm="3"><ListGroup><ListGroup.Item><Button className="btn-circle">+</Button>Add a team member</ListGroup.Item></ListGroup></Col>
            page = null
        } else if (activeTab === 2) {
            tab = <Col sm="3"><ListGroup><ListGroup.Item><Button className="btn-circle">+</Button> Add a user</ListGroup.Item></ListGroup></Col>
            page = null
        }


        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="2">
                            <ListGroup>
                                <ListGroup.Item onClick={this.changeTabTeam}>Manage Teams</ListGroup.Item>
                                <ListGroup.Item onClick={this.changeTabUsers}>Manage Users</ListGroup.Item>
                                <ListGroup.Item>Submit</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        {tab}
                        {page}
                    </Row>
                </Container>
            </div>
        )
    };
}

export default UserPage;
