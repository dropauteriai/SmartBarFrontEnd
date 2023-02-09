import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import Cards from "./Cards.js";
import SideBar from "./SideBar.js";
import Row from "react-bootstrap/Row";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { tables: [], loading: true };
  }

  componentDidMount() {
    this.populateTableData();
  }

  static renderTableList(tables) {
    return (
      <Row xs={1} md={2}>
        {tables.map((table, index, tables) => {
          <Cards name={table.name} id={table.id} />;
        })}
      </Row>
    );
  }
  render() {
    // let contents = this.state.loading ? (
    //   <p>
    //     <em>Loading...</em>
    //   </p>
    // ) : (
    //   (contents = this.renderTableList(this.state.tables))
    // );
    let contents;
    if (this.state.loading) {
      contents = (
        <p>
          <em>Loading...</em>
        </p>
      );
    } else {
      contents = Home.renderTableList(this.state.tables);
      console.log(contents);
    }

    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <SideBar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Row xs={1} md={2}>
                {this.state.tables.map((table, index) => (
                  <Cards name={table.name} />
                ))}
              </Row>

              {/* {contents} */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  async populateTableData() {
    const response = await fetch("https://localhost:5001/Table");
    const data = await response.json();
    this.setState({ tables: data, loading: false });
  }
}
