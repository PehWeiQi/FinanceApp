import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';
import CardList from '../../Components/CardList/CardList';
import ListPortfolio from '../../Components/ListPortfolio/ListPortfolio';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
    const [portfolioValues, SetPortfolioValues] = useState<string[]>([]);
  
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };
  
    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
        console.log(result.data);
      }
      // console.log(searchResult);
      // console.log(result.data);
    };
  
    const onPortfolioCreate = (e: any) => {
      e.preventDefault();
      const exist = portfolioValues.find((value) => (value ===e.target[0].value));
      if (exist){
        return;
      }
      const updatedList = [...portfolioValues, e.target[0].value];
      SetPortfolioValues(updatedList);
    };
  
    const onPortfolioDelete = (e:any) => {
      e.preventDefault();
      const removedList = portfolioValues.filter((value) => (value !== e.target[0].value));
      SetPortfolioValues(removedList);
    }
    // {condition && expression} is a shorthand for if (condition) {expression}
    // {codition ? true : false} is a ternary operator
    return (
      <div className="SearchPage">
        <Search
          onSearchSubmit={onSearchSubmit}
          search={search}
          handleSearchChange={handleSearchChange}
        />
        {serverError && <h1>{serverError}</h1>}
        <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
        <CardList
          searchResult={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
    );
}

export default SearchPage