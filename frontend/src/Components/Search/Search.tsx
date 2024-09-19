import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from "react";

interface Props {
  onClick: (e:SyntheticEvent) => void;
  search: string | undefined; // because search is a state var, so it may be undefined
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, handleChange, search}: Props): JSX.Element => {

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e)=>onClick(e)}></button>
    </div>
  );
};

export default Search;
