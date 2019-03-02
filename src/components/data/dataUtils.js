export const tagNames = [
  'dataType',
  'determinants',
  'sectors',
  'spatialScales',
  'temporalScales',
  'worldRegions',
];

export const getDataObjFromHit = (hit) => {
  const tags = {};
  // Get Tags from hit
  tagNames.forEach((tag) => {
    tags[tag] = hit.fields[tag]['en-US'];
  });
  // Create data object
  const dataObj = {
    tags,
    title: hit.fields.title['en-US'],
    slug: hit.fields.slug['en-US'],
  };
  return dataObj;
};
