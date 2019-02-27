import React from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
} from 'react-instantsearch-dom';

import { startCase } from 'lodash';

const tagNames = [
  'dataType',
  'determinants',
  'sectors',
  'spatialScales',
  'temporalScales',
  'worldRegions',
];

const DataCard = ({ hit }) => {
  // console.log(hit);

  // Get Tags from hit
  const tags = {};

  tagNames.forEach((tag) => {
    tags[tag] = hit.fields[tag]['en-US'];
  });

  // Create data object
  const dataObj = {
    tags,
    title: hit.fields.title['en-US'],
    slug: hit.fields.slug['en-US'],
  };
  // console.log(dataObj);

  return (
    <div style={{ marginTop: '10px' }}>
      <h3>{dataObj.title}</h3>
    </div>
  );
};

const Refinement = ({ tagName }) => {
  const attribute = `fields.${tagName}.en-US`;
  return (
    <>
      <h4>{startCase(tagName)}</h4>
      <RefinementList attribute={attribute} />
    </>
  );
};

const RefineBar = () => (
  <>
    {tagNames.map(tag => (
      <Refinement tagName={tag} />
    ))}
  </>
);

const Search = () => (
  <div className="container">
    <SearchBox />
    <RefineBar />
    <Hits hitComponent={DataCard} />
  </div>
);

const DataSearch = () => (
  <InstantSearch
    appId="S8S302ERM8"
    apiKey="cc2815f16dd85b0b135372395b8fed44"
    indexName="dataList"
  >
    <Search />
  </InstantSearch>
);

export default DataSearch;
