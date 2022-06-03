import { Fragment, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

import FrappeChartDon from './FrappeChartDon';
import useStyles from '../../hooks/useStyles';
import Loading from '../../components/loading/Loading';

const Wallet = () => {
  
  const classes = useStyles();

  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btc, setBtc] = useState('');
  const [eth, setEth] = useState('');

  useEffect(() => {
    axios('http://localhost:3001/values')
      .then(res => setCrypto(res.data))
      .catch(err => console.log(err))

    setLoading(true)
  }, [])

  useEffect(() => {
    if (!crypto) {
        return
    }

    setBtc(crypto[0].account)
    setEth(crypto[1].account)
}, [crypto])

  const changeSum = (type, i) => {
    switch (type) {
      case "BTC": 
        return setBtc(+btc + i)
      case "ETH": 
        return setEth(+eth + i)
      default:
        return
    }
  }

  const handleSubmitSum = (e) => {
    e.preventDefault();

    if (e.target.innerText === "BTC") {
      axios.put('http://localhost:3001/values/1', {
          id: 1,
          name: "BTC",
          account: btc
        })
    } else if (e.target.innerText === "ETH") {
      axios.put('http://localhost:3001/values/2', {
          id: 2,
          name: "ETH",
          account: eth
        })
    }
    
  }

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
                  
                  <FrappeChartDon btc={btc} eth={eth} />
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Paper className={classes.profile} elevation={0}>
              <h2>
                  Your profile
              </h2>
              {!loading ? <Loading/> : (
                <Fragment>
                  <form className={classes.form} onSubmit={handleSubmitSum}>
                  <Fab 
                      className={classes.btnOne}    
                      size="small"
                      onClick={() => changeSum('BTC', -1)}
                  >
                      <ExpandMoreIcon />
                  </Fab>
                  <TextField 
                      variant="outlined" 
                      label="BTC"
                      size="small" 
                      className={classes.input}
                      value={btc}
                      onChange={e => setBtc(e.target.value)}
                  />
                  <Fab 
                      className={classes.btnOne} 
                      size="small"
                      onClick={() => changeSum('BTC', +1)}
                  >
                      <ExpandLessIcon />
                  </Fab>
              </form>
              <form className={classes.form} onSubmit={handleSubmitSum}>
                  <Fab 
                      className={classes.btnTwo} 
                      size="small"
                      onClick={() => changeSum('ETH', -1)}
                  >
                      <ExpandMoreIcon />
                  </Fab>
                  <TextField 
                      variant="outlined" 
                      label="ETH" size="small" 
                      className={classes.input}
                      value={eth}
                      onChange={e => setEth(e.target.value)}
                  />
                  <Fab 
                      className={classes.btnTwo} 
                      size="small"
                      onClick={() => changeSum('ETH', +1)}
                  >
                      <ExpandLessIcon />
                  </Fab>
              </form>
                </Fragment>
              )}
              
              <Fab 
                  className={classes.btnTree} 
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