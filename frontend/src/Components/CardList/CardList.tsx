import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4} from 'uuid';

interface Props {
  searchResult: CompanySearch[];
}

const CardList = ({searchResult}: Props) => {
  return (
    <div>
      {
        searchResult.length > 0 ? (
          searchResult.map((result) => {
            return <Card id = {result.symbol} key = {uuidv4()} searchResult={result}/>
          })
        ) : (
          <h1>No results</h1>
        )
      }
    </div>
  )
}

export default CardList