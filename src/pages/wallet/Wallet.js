import { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CircularProgress, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

import FrappeChartDon from './FrappeChartDon';
import useStyles from '../../hooks/useStyles';

const Wallet = () => {
  
  const classes = useStyles();

  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios('http://localhost:3001/values')
      .then(res => {
        setCrypto(res.data)
        setLoading(true)
      })
      .catch(err => console.log(err))
  }, [])

  //const changeSum = (type, i) => {
  //  switch (type) {
  //    case 'BTC': 
  //      return setBtc(+btc + +i)
  //    case 'ETH':
  //      return setEth(+eth + +i)
  //    default:
  //      return
  //  }
  //}

  console.log(crypto[0])

  const handleSubmitSum = (e) => {
    e.preventDefault();
  }

  if (!loading) {
    return <CircularProgress />
  }

  const renderProfile = (arr) => {
    if (arr.length === 0) {
        return (
            <div classNames={classes.profile}>
                <h5 className={classes.profile}>You can add acoount</h5>
            </div>
        )
    }

    return arr.map(({id, name, account}) => {
        return (
            <form className={classes.form} onSubmit={handleSubmitSum} key={id}>
              <Fab 
                className={classes.btn}    
                size="small"
                //onClick={() => changeSum('BTC', -1)}
              >
                <ExpandMoreIcon />
              </Fab>
              <TextField 
                variant="outlined" 
                label={name}
                size="small" 
                className={classes.input}
                value={account}   
              />
              <Fab 
                className={classes.btn} 
                size="small"
                //onClick={() => changeSum('BTC', +1)}
              >
                <ExpandLessIcon />
              </Fab>
            </form>
        )
    })
  }

  const check = renderProfile(crypto);

  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.account} elevation={0}>
              <h1>
                  Your all account
              </h1>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Paper className={classes.profile} elevation={0}>
              <h2>
                  In percents
              </h2>
              <div className={classes.graph}>
                  
                  {/*<FrappeChartDon btc={btc} eth={eth} />*/}
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Paper className={classes.profile} elevation={0}>
              <h2>
                  Your profile
              </h2>
              {check}
              <form className={classes.form} onSubmit={handleSubmitSum}>
                  <Fab 
                      className={classes.btnOne}    
                      size="small"
                      //onClick={() => changeSum('BTC', -1)}
                  >
                      <ExpandMoreIcon />
                  </Fab>
                  <TextField 
                      variant="outlined" 
                      label="BTC"
                      size="small" 
                      className={classes.input}
                      
                  />
                  <Fab 
                      className={classes.btnOne} 
                      size="small"
                      //onClick={() => changeSum('BTC', +1)}
                  >
                      <ExpandLessIcon />
                  </Fab>
              </form>
              <form className={classes.form} onSubmit={handleSubmitSum}>
                  <Fab 
                      className={classes.btnTwo} 
                      size="small"
                      //onClick={() => changeSum('ETH', -1)}
                  >
                      <ExpandMoreIcon />
                  </Fab>
                  <TextField 
                      variant="outlined" 
                      label="ETH" size="small" 
                      className={classes.input}
                      //value={eth}
                  />
                  <Fab 
                      className={classes.btnTwo} 
                      size="small"
                      //onClick={() => changeSum('ETH', +1)}
                  >
                      <ExpandLessIcon />
                  </Fab>
              </form>
              <Fab 
                  className={classes.btnPlus} 
                  size="small"
              >
                  <AddIcon />
              </Fab>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Wallet;