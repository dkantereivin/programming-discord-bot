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
        activePage: 0
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

    addUser = () => {
        this.state.activePage !== 1 ? this.setState({ activePage: 1 }) : this.setState({ activePage: 1 })
    }

    addTeamMember = () => {
        this.state.activePage !== 2 ? this.setState({ activePage: 2 }) : this.setState({ activePage: 2 })
    }


    render() {
        const activeTab = this.state.activeTab
        const activePage = this.state.activePage
        let tab;
        let page = <p>Default page works!</p>
        if (activeTab === 1) {
            tab = <Col sm="3"><ListGroup><ListGroup.Item onClick={this.addTeamMember}><Button className="btn-circle">+</Button>Add a team member</ListGroup.Item></ListGroup></Col>


        } else if (activeTab === 2) {
            tab = <Col sm="3"><ListGroup><ListGroup.Item onClick={this.addUser}><Button className="btn-circle" >+</Button> Add a user</ListGroup.Item></ListGroup></Col>

        }

        if (activePage === 1) {
            page = <Col><p> user page works </p></Col>
        }

        if (activePage === 2) {
            page = <Col> <p>team member page works</p> </Col>
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
