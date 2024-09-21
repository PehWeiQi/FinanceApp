import React, {
  ChangeEvent,
  useState,
  MouseEvent,
  SyntheticEvent,
} from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined; // because search is a state var, so it may be undefined
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={(e) => handleSearchChange(e)} />
      </form>
    </>
  );
};

export default Search;
