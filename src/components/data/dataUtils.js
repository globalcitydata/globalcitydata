export const tagNames = [
  'dataType',
  'contextualCityLevelData',
  'keyProvisioningSectors',
  'spatialScales',
  'sustainabilityOutcomes',
  'temporalScales',
  'worldRegions',
];

/**
 * Loops through all authors for all datasets in contentful and finds first author for dataset
 *
 * @param {Object} hit - Hit object from algolia
 * @param {Object} authors - authors object with all authors for all datasets in contentful
 * @returns {string} name - returns author name
 */
const getFirstAuthor = (hit, authors) => {
  try {
    // console.log(hit, authors);
    const authorID = hit.fields.authors['en-US'][0].sys.id;
    for (const node of authors) { // loop through authors of all data entries
      const innerAuthors = node.node.authors;
      for (const author of innerAuthors) { // loop through authors of individual data entry node
      // console.log(author.contentful_id, authorID);
        if (author.contentful_id === authorID) { // check for first author
          return author.name;
        }
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getDataObjFromHit = (hit, authors) => {
  const firstAuthor = getFirstAuthor(hit, authors);
  let tags = {};
  // Get Tags from hit
  try {
    tagNames.forEach((tag) => {
      if (hit.fields[tag]) {
        tags[tag] = hit.fields[tag]['en-US'];
      }
    });
  } catch (error) {
    tags = {};
  }
  // Create data object
  const dataObj = {
    tags,
    title: hit.fields.title['en-US'],
    slug: hit.fields.slug['en-US'],
    summary: hit.fields.summary['en-US'],
    author: firstAuthor,
  };
  return dataObj;
};
