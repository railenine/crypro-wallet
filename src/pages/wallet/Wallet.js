import { Fragment, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CircularProgress, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { debounce } from 'lodash';

import FrappeChartDon from './FrappeChartDon';
import useStyles from '../../hooks/useStyles';
import Loading from '../../components/loading/Loading';

const Wallet = () => {
  
  const classes = useStyles();

  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState({btc: '', eth: ''});
  const [currenciesIds, setCurrenciesIds] = useState({btc: '', eth: ''});
  const [fetchLoading, setFetchLoading] = useState(false);
  const [valueBtc, setValueBtc] = useState();
  const [valueEth, setValueEth] = useState();

  useEffect(() => {
    axios('http://localhost:3001/values')
      .then(res => {
        setCrypto(res.data)
        setLoading(true)
      })
      .catch(err => console.log(err))
    
    axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd')
      .then(res => {
        setValueBtc(res.data.bitcoin.usd)
        setValueEth(res.data.ethereum.usd)
        setFetchLoading(true)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (!crypto) {
        return
    }

    setCurrencies({btc: parseFloat(crypto[0].account), eth: parseFloat(crypto[1].account)})
    setCurrenciesIds({btc: crypto[0].id, eth: crypto[1].id})
}, [crypto])

  

  const onChange = (type, i) => {
    setCurrencies(prevState => ({...prevState, [type]: parseFloat(i)}))
    
    axios.put(`http://localhost:3001/values/${currenciesIds[type]}`, {
        id: currenciesIds[type],
        account: parseFloat(i)
      })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.account} elevation={0}>
              {!fetchLoading && <CircularProgress />}
              {fetchLoading && (
                <Fragment>
                  <h1>
                    Your wallet: {currencies.btc && currencies.eth ? ((valueBtc * currencies.btc) + (valueEth * currencies.eth)).toFixed(2) : <CircularProgress />} USD
                  </h1>
                </Fragment>
              )}
          </Paper>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Paper className={classes.profile} elevation={0}>
              <h2>
                  In percents
              </h2>
              <div className={classes.graph}>
                  
                  {loading ? <FrappeChartDon btc={currencies.btc} eth={currencies.eth} /> : <Loading />}
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
                  <form className={classes.form}>
                  <Fab 
                      className={classes.btnOne}    
                      size="small"
                      onClick={() => onChange('btc', currencies.btc - 1)}
                  >
                      <ExpandMoreIcon />
                  </Fab>
                  <TextField 
                      variant="outlined" 
                      label="BTC"
                      type="number"
                      size="small" 
                      className={classes.input}
                      value={currencies.btc}
                      onChange={e => onChange('btc', e.target.value)}
                  />
                  <Fab 
                      className={classes.btnOne} 
                      size="small"
                      onClick={() => onChange('btc', currencies.btc + 1)}
                  >
                      <ExpandLessIcon />
                  </Fab>
              </form>
              <form className={classes.form}>
                  <Fab 
                      className={classes.btnTwo} 
                      size="small"
                      onClick={() => onChange('eth', currencies.eth - 1)}
                  >
                      <ExpandMoreIcon />
                  </Fab>
                  <TextField 
                      variant="outlined" 
                      label="ETH" 
                      size="small"
                      type="number" 
                      className={classes.input}
                      value={currencies.eth}
                      onChange={e => onChange('eth', e.target.value)}
                  />
                  <Fab 
                      className={classes.btnTwo} 
                      size="small"
                      onClick={() => onChange('eth', currencies.eth + 1)}
                  >
                      <ExpandLessIcon />
                  </Fab>
              </form>
                </Fragment>
              )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Wallet;