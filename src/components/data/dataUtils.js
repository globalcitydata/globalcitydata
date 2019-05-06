export const tagNames = [
  'dataType',
  'contextualCityLevelData',
  'keyProvisioningSectors',
  'spatialScales',
  'sustainabilityOutcomes',
  'temporalScales',
  'worldRegions',
];

export const getDataObjFromHit = (hit) => {
  let tags = {};
  // Get Tags from hit
  try {
    tagNames.forEach((tag) => {
      console.log(hit.fields[tag]);
      tags[tag] = hit.fields[tag]['en-US'];
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
  };
  return dataObj;
};
