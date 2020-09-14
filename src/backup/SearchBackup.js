import React from "react";
import { Button } from "react-bootstrap";
import { ToolTip } from "../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBackUp = ({ onSearchClick }) => {
  const onSearchBackUp = () => {
    onSearchClick();
  };

  return (
    <>
      <ToolTip tip="Cards will be searched from latest backup.">
        <Button
          variant="success"
          className="mr-2 mt-1"
          onClick={onSearchBackUp}
        >
          <FontAwesomeIcon icon={faSearch} /> Search Backup
        </Button>
      </ToolTip>
    </>
  );
};

export default SearchBackUp;
