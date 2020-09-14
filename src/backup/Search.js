import React, { useState } from "react";
import { Col, Button, Form, Row } from "react-bootstrap";
import { ApiService } from "../utils/ApiService";
import Card from "../common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBroom, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./search.scss";

const Search = ({ toggleSearchFields, setLoading }) => {
  const [name, setName] = useState("");
  const [hitPoint, setHitPoint] = useState("");
  const [rarity, setRarity] = useState("");
  const [isClicked, setClicked] = useState(false);
  const [results, setResults] = useState();

  const onChange = (event) => {
    const { id, value } = event.target;
    if (id === "name") {
      setName(value);
    } else if (id === "hitpoint") {
      setHitPoint(value);
    } else if (id === "rarity") {
      setRarity(value);
    }
  };

  const onSearch = async () => {
    if (!isClicked) {
      setClicked(true);
      setLoading(true);

      await ApiService()
        .get("/backup/search", {
          params: { name: name, hitPoint: hitPoint, rarity: rarity },
        })
        .then((response) => {
          setClicked(false);
          setLoading(false);
          setResults(response.data.cards);
        })
        .catch((err) => {
          setLoading(false);
          setClicked(false);
        });
    }
  };

  const onKeyPress = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  const onClear = () => {
    setName("");
    setHitPoint("");
    setRarity("");
    setResults();
    setClicked(false);
  };

  const onClose = () => {
    toggleSearchFields();
  };

  return (
    <>
      <div id="search">
        <Row>
          <Col className="mt-2 mr-2">
            <div className="icon-container">
              <FontAwesomeIcon
                size="2x"
                color="white"
                className="float-right"
                icon={faTimes}
                onClick={onClose}
              />
            </div>
          </Col>
        </Row>
        <Form.Row className="fade-In pr-5 pb-5 pl-5 mt-2 d-flex justify-content-center">
          <Col md={3}>
            <Form.Group controlId="name">
              <Form.Label className="font-weight-bold">Name</Form.Label>
              <Form.Control
                onKeyDown={onKeyPress}
                value={name}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Label className="font-weight-bold">Hit Point</Form.Label>
            <Form.Group controlId="hitpoint">
              <Form.Control
                onKeyDown={onKeyPress}
                value={hitPoint}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="rarity">
              <Form.Label className="font-weight-bold">Rarity</Form.Label>
              <Form.Control
                onKeyDown={onKeyPress}
                value={rarity}
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="mt-2">
            <Button className="mt-4" onClick={onSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>{" "}
            <Button className="mt-4" onClick={onClear}>
              <FontAwesomeIcon icon={faBroom} />
            </Button>
          </Col>
        </Form.Row>
      </div>
      <div className="card-container mt-5">
          {results ? (
            results.length ? (
              results.map((card) => {
                return <Card item={card} />;
              })
            ) : (
              <div className="heading">
                No cards matching your search found!
              </div>
            )
          ) : null}
        </div>
    </>
  );
};

export default Search;
