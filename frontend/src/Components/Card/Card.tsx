import { JsxElement } from "typescript";
import "./Card.css";
import { CompanySearch } from "../../company";
interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props): JSX.Element => {
  return (
    <div className="card">
      <img alt="Company logo" />
      <div className="details">
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>${searchResult.currency}</p>
      </div>
      <div className="info">
        <p>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
      </div>
    </div>
  );
};

export default Card;
