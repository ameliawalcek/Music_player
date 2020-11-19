import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  backdrop: {
    left: '50%',
    top: '50%',
    marginLeft: -75,
    marginTop: -75,
    position: 'absolute'
  },
}))