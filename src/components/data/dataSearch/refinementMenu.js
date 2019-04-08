import React, { useState } from 'react';
import {
  // RefinementList,
  // CurrentRefinements,
  connectRefinementList,
  ClearRefinements,
} from 'react-instantsearch-dom';
import {
  Paper,
  Typography,
  List,
  ListItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { startCase, orderBy } from 'lodash';

const styles = {};

const MyFormGroup = ({ items, refine }) => {
  const checked = [];
  // items.forEach((item) => {
  //   checked[item.label] = false;
  // });
  // checked = items.map(_ => false);
  // const [checkedItems, setCheckedItems] = useState(checked);
  return (
    <FormGroup>
      {items.map((item, i) => (
        <>
          {/* {console.log(item)} */}
          <FormControlLabel
            control={(
<Checkbox
                color="primary"
                onClick={e => {
                  e.preventDefault();
                  refine(item.value);
                }}
                checked={false}
              />
)}
            label={`${item.label} (${item.count})`}
          />
        </>
      ))}
    </FormGroup>
  );
};

const RefinementList = (props) => {
  const { items, tagName, refine } = props;
  // console.log(props);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {startCase(tagName)}
      </Typography>
      <MyFormGroup items={items} refine={refine} />
    </>
  );
};

const CustomRefinement = connectRefinementList(RefinementList);

const RefineBar = ({ tagNames, classes }) => (
  <>
    {tagNames.map((tag) => {
      const attribute = `fields.${tag}.en-US`;
      return (
        <CustomRefinement
          classes={classes}
          attribute={attribute}
          transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])
          }
          tagName={tag}
          key={tag}
        />
      );
    })}
  </>
);

const RefinementMenu = ({ tagNames, classes }) => (
  <Paper style={{ padding: '1rem' }}>
    <ClearRefinements />
    <RefineBar tagNames={tagNames} classes={classes} />
  </Paper>
);

export default withStyles(styles)(RefinementMenu);
