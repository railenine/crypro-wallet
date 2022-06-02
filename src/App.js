import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";

import TopBar from './components/topBar/TopBar';
import Routes from "./Routes";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto'
  },
}));

function App() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </Container>
    </div>
  );
}

export default App;
