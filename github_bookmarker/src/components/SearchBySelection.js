import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Selection({handleSearchBy}) {
  const classes = useStyles();
  const [state, setState] = React.useState("user");

  const handleChange = (event) => {
    setState(
      event.target.value
    );
  
  };
  React.useEffect(() => {
    console.log(state);
    handleSearchBy(state);
    // Do what it needs to be done after updating state here
  }, [state])

  return (
    <div>
     
     
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Search By</InputLabel>
        <Select
          native
          value={state}
          onChange={handleChange}
          label="Search By"
         
        >
          
          <option value="user">User</option>
          <option value="repos">Repositories</option>
        </Select>
      </FormControl>
     
    </div>
  );
}
