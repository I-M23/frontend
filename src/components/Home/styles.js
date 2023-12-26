import { makeStyles } from '@mui/material';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse" 
    }
  }
}));