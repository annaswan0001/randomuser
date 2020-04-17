import React, { useState, useRef, useEffect } from "react";
import Input from "../../../components/Input/Input";

export default function Search(props) {
  const [enteredFilter, setEnteredFilter] = useState(" ");

  const { filterUsers } = props;

    const inputRef = useRef(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (enteredFilter === inputRef.current.value) {
          filterUsers(enteredFilter);
        }
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, [enteredFilter, inputRef, filterUsers]);

  const changeInputValue = (e) => {
    e.preventDefault();
    setEnteredFilter(e.target.value);
    
  };

  return (
<React.Fragment>
    <label style={{color:"#1976d2", fontWeight:"900"}} htmlFor="filter"> Enter user name...</label>
      <Input
        elementtype ="input"
        forwardedref={inputRef}
        type="text"
        value={enteredFilter}
        onChange={changeInputValue}
        placeholder="first(last) name"
        name="filter"
      />
</React.Fragment>
  );
}
