import { JsxElement } from "typescript";
import "./Card.css";
type Props = { companyName: string; ticker: string; price: number };

const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
  return (
    <div className="card">
      <img src="assets/images/boat.jpg" alt="Boat" />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi,
          sit aspernatur deserunt illo voluptas magnam impedit placeat quam
          voluptate illum, expedita, ipsam pariatur excepturi odio qui eligendi
          eos atque!
        </p>
      </div>
    </div>
  );
};

export default Card;
