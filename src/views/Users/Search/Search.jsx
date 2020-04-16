import React, { useState, useRef, useEffect } from "react";

export default function Search(props) {
  const [enteredFilter, setEnteredFilter] = useState(" ");
  
  const {filterUsers} = props
 
  const inputRef = useRef();


  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
      filterUsers(enteredFilter);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, filterUsers]);

  const changeInputValue = (e) => {
    setEnteredFilter(e.target.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={enteredFilter}
        onChange={changeInputValue}
      />
    </div>
  );
}
