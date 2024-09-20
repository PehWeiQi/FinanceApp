import { JsxElement } from "typescript";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { SyntheticEvent } from "react";
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div className="card">
      <img alt="Company logo" />
      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p>${searchResult.currency}</p>
      </div>
      <div className="info">
        <p>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
      </div>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  );
};

export default Card;
