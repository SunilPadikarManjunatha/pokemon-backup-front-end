import React, { useState } from "react";
import { CreateBackUp, PurgeBackUp, Search, SearchBackUp } from "../backup";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Loading } from "../common";

import "react-toastify/dist/ReactToastify.css";
import "./home.scss";

function Home() {
  const [showSearchFields, setShowSearchFields] = useState(false);
  const [showLoading, setLoading] = useState();

  const toggleSearchFields = () => {
    setShowSearchFields(!showSearchFields);
  };

  return (
    <>
      <Container id="home">
        <div className=" mt-3 p-3 pb-5">
          <Row>
            <Col className="text-center mt-2">
              <h1>Welcome to Pokemon Backup</h1>
            </Col>
          </Row>
          <Row className="mt-3 d-flex justify-content-center">
            <CreateBackUp setLoading={setLoading} />
            <PurgeBackUp setLoading={setLoading} />
            <SearchBackUp onSearchClick={toggleSearchFields} />
          </Row>
        </div>
        {showSearchFields ? (
          <Search
            setLoading={setLoading}
            toggleSearchFields={toggleSearchFields}
          />
        ) : null}
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            {showLoading ? <Loading /> : null}
          </Col>
        </Row>
      </Container>
      <ToastContainer hideProgressBar></ToastContainer>
    </>
  );
}

export default Home;
