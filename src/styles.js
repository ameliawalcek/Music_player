import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    padding: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  plus: {
    width: '70px',
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    marginLeft: '-35px',
    color: "grey",
    '&:hover': {
      color: '#00A2B8',
    },
  },
  minus: {
    width: '70px',
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    marginLeft: '-35px',
  },
  paper: {
    height: '100vh',
  },
}));