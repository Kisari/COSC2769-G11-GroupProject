import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SortMenu() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort">
      <Dropdown.Item href="#/action-1">Sort by name</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Sort by price</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Sort by date</Dropdown.Item>
    </DropdownButton>
  );
}

export default SortMenu;
