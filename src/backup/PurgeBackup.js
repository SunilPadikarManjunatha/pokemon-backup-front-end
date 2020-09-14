import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ApiService } from "../utils/ApiService";
import { ToolTip } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PurgeBackUp = ({ setLoading }) => {
  const [isClicked, setClicked] = useState(false);

  const onPurgeBackUp = async () => {
    if (!isClicked) {
      setClicked(true);
      setLoading(true);
      await ApiService()
        .delete("/backup/delete/")
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
      <ToolTip tip="Latest copy of backup will be deleted when you click this button.">
        <Button
          variant="outline-danger"
          className="mr-2 mt-1"
          onClick={onPurgeBackUp}
        >
          <FontAwesomeIcon icon={faTrash} /> Purge Backup
        </Button>
      </ToolTip>
    </>
  );
};

export default PurgeBackUp;
