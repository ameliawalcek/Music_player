import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        width: '300px',
        position: 'fixed',
        bottom: '90px',
        left: '50%',
        marginLeft: '-150px'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginTop: 10,
        marginBottom: 10,
    },
}))