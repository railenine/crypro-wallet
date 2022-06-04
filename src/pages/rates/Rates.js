import { useEffect, useState } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import axios from "axios";

import LineChart from "../../components/lineChart/LineChart";
import useStyles from '../../hooks/useStyles';
import Loading from "../../components/loading/Loading";

const Rates = () => {
    
  const classes = useStyles();

  const [btcUsd, setBtcUsd] = useState();
  const [ethUsd, setEthUsd] = useState();
  const [loading, setLoading] = useState(false);
  const [valueBtcUsd, setValueBtcUsd] = useState(0);
  const [valueEthUsd, setValueEthUsd] = useState(0);
  const [valueUsdBtc, setValueUsdBtc] = useState(0);
  const [valueUsdEth, setValueUsdEth] = useState(0);
  const [valueEthBtc, setValueEthBtc] = useState(0);
  const [valueBtcEth, setValueBtcEth] = useState(0);

  const colorBtc = '#3949AB';
  const colorEth = '#546e7a';
  const colorCrypto = '#7b1fa2';

  useEffect(() => {
    axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd')
      .then(res => {
        setBtcUsd(res.data.bitcoin.usd)
        setEthUsd(res.data.ethereum.usd)
        setLoading(true)
      })
      .catch(err => console.log(err))
  }, [])

  if (!loading) {
    return <Loading />
  }

  const btcRate = (e) => {
    setValueBtcUsd(e.target.value)
    setValueUsdBtc(e.target.value * btcUsd)
  }
  
  const usdBtcRate = (e) => {
    setValueUsdBtc(e.target.value)
    setValueBtcUsd((e.target.value / btcUsd).toFixed(16))
  }

  const ethRate = (e) => {
    setValueEthUsd(e.target.value)
    setValueUsdEth(e.target.value * ethUsd)
  }
  
  const usdEthRate = (e) => {
    setValueUsdEth(e.target.value)
    setValueEthUsd((e.target.value / ethUsd).toFixed(16))
  }

  const btcEthRate = (e) => {
    setValueBtcEth(e.target.value)
    setValueEthBtc((e.target.value * (btcUsd / ethUsd)).toFixed(16))
  }
  
  const ethBtcRate = (e) => {
    setValueEthBtc(e.target.value)
    setValueBtcEth((e.target.value * (ethUsd / btcUsd)).toFixed(16))
  }

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
                  className={classes.inputConv}
                  value={valueUsdBtc}
                  onChange={usdBtcRate}
              />
              <TextField 
                  variant="outlined" 
                  label="BTC" size="small" 
                  className={classes.inputConv}
                  value={valueBtcUsd}
                  onChange={btcRate}
              />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  USD/BTC
              </h2>
              <LineChart currency='bitcoin' vsCurrency='usd' color={colorBtc} />
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
                  className={classes.inputConv}
                  value={valueUsdEth}
                  onChange={usdEthRate}
              />
              <TextField 
                  variant="outlined" 
                  label="ETH" size="small" 
                  className={classes.inputConv}
                  value={valueEthUsd}
                  onChange={ethRate}
              />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                USD/ETH
              </h2>
              <LineChart currency='ethereum' vsCurrency='usd' color={colorEth} />
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
                  className={classes.inputConv}
                  value={valueBtcEth}
                  onChange={btcEthRate}
              />
              <TextField 
                  variant="outlined" 
                  label="ETH" size="small" 
                  className={classes.inputConv}
                  value={valueEthBtc}
                  onChange={ethBtcRate}
              />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} className={classes.profile}>
              <h2>
                  BTC/ETH
              </h2>
              <LineChart currency='bitcoin' vsCurrency='eth' color={colorCrypto} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Rates;