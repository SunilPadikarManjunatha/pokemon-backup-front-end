import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ApiService } from "../utils/ApiService";
import { ToolTip } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateBackUp = ({ setLoading }) => {
  const [isClicked, setClicked] = useState(false);

  const onCreateBackUp = async () => {
    if (!isClicked) {
      setClicked(true);
      setLoading(true);
      await ApiService()
        .post("/backup/create/")
        .then((response) => {
          setClicked(false);
          setLoading(false);
        })
        .catch((err) => {
          setClicked(false);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <ToolTip
        tip={"New backup will be created everytime you click this button."}
      >
        <Button className="mr-2 mt-1" onClick={onCreateBackUp}>
          <FontAwesomeIcon icon={faPlus} /> Create Backup
        </Button>
      </ToolTip>
    </>
  );
};

export default CreateBackUp;
