import { Grid, Paper, TextField } from "@material-ui/core";

import LineChart from "../../components/lineChart/LineChart";
import useStyles from '../../hooks/useStyles';

const Rates = () => {
    
  const classes = useStyles();
  
  const valOne = [20, 30, 40, 10, 20,100, 70, 80,50, 70,13,17,13, 22];
  const valTwo = [11,12,33,21,12,22,10,13,25,39, 43,47,51,55];
  const valTree = [20, 30,33,21, 40, 10, 13,25,39, 43,47,51,55, 51];
  const colorBtc = '#3949AB';
  const colorEth = '#546e7a';
  const colorCrypto = '#7b1fa2';

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  USD/BTC
              </h2>
              <TextField 
                  variant="outlined" 
                  label="USD" size="small" 
                  className={classes.input}
              />
              <TextField 
                  variant="outlined" 
                  label="BTC" size="small" 
                  className={classes.input}
              />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  USD/BTC
              </h2>
              <LineChart val={valOne} color={colorBtc} />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  USD/ETH
              </h2>
              <TextField 
                  variant="outlined" 
                  label="USD" size="small" 
                  className={classes.input}
              />
              <TextField 
                  variant="outlined" 
                  label="ETH" size="small" 
                  className={classes.input}
              />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  Graph
              </h2>
              <LineChart val={valTwo} color={colorEth} />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  BTC/ETH
              </h2>
              <TextField 
                  variant="outlined" 
                  label="BTC" size="small" 
                  className={classes.input}
              />
              <TextField 
                  variant="outlined" 
                  label="ETH" size="small" 
                  className={classes.input}
              />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  Graph
              </h2>
              <LineChart val={valTree} color={colorCrypto} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Rates;