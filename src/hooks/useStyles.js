import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '20px'
    },
    account: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    profile: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'center'
    },
    form: {
      padding: theme.spacing(1),
    },
    btnOne: {
      background: 'linear-gradient(320deg, #546e7a 10%, #cfd8dc 90%)',
      color: 'white',
      margin: '0 10px'
    },
    btnTwo: {
      background: 'linear-gradient(320deg, #3949AB 10%, #4fc3f7 90%)',
      color: 'white',
      margin: '0 10px'
    },
    btnThree: {
      background: 'linear-gradient(320deg, #d1c4e9 10%, #f3e5f5 90%)',
      color: 'white',
      margin: '0 10px',
      marginBottom: '167px'
    },
    input: {
      maxWidth: '100px',
    },
    graph: {
        margin: '0 auto',
        width: '300px',
        height: '300px',
        marginBottom: '19px'
    },
    load: {
      margin: '44px auto',
    },
    inputConv: {
      maxWidth: '200px',
      marginBottom: theme.spacing(2)
    }
  }));

  export default useStyles;