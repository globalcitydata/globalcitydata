import React from 'react';

// General Components
import styled from 'styled-components';
import {
  InstantSearch,
  connectHits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import { TextButton } from '../buttons';

const Hit = ({ hit }) => {
  console.log(hit.fields.relatedData['en-US'].sys);
  return (
    <>
      <li>{hit.fields.body['en-US']}</li>
      <hr />
    </>
  );
};

const Hits = ({ hits }) => (
  <ul style={{ listStyle: 'none' }}>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </ul>
);

// 2. Connect the component using the connector
const CustomHits = connectHits(Hits);

const Search = () => (
  <>
    <SearchBox />
    <CustomHits />
    {/* <Pagination /> */}
  </>
);

const DataSearch = () => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="publications"
  >
    <Search />
  </InstantSearch>
);

export default DataSearch;
