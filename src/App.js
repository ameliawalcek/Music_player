import React, { useEffect, useState } from 'react'
import { useTheme } from './theme'
import Posts from './components/Posts/Posts'
import FormSheet from './components/Form/FormSheet'
import SnapShot from './images/SnapShot.png'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './actions/posts'
import { Container, AppBar, Grow, Grid, IconButton, ThemeProvider, Paper } from '@material-ui/core'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CancelIcon from '@material-ui/icons/Cancel'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [currentId, setCurrentId] = useState(null)
    const [displayForm, setForm] = useState(false)
    const [darkState, setTheme] = useState(false)

    const darkTheme = useTheme(darkState)
    const posts = useSelector(state => state.posts)
    const handleTheme = () => setTheme(!darkState)

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <ThemeProvider theme={darkTheme}>
            <Paper square className={classes.paper}>
                <Paper square elevation={0}>
                    <AppBar className={classes.appBar}
                        position='sticky'
                        color='inherit' elevation={0}>
                        <img className={classes.image} src={SnapShot} alt='Pictori' height='100' />
                        <IconButton
                            color='primary'
                            size='small'
                            onClick={handleTheme}
                        >
                            {!darkState ?
                                <Brightness7Icon style={{ fontSize: '30px', color: '#F79256', position: 'absolute', left: '20px' }} /> :
                                <Brightness4Icon style={{ fontSize: '30px', color: '#5BC2A3', position: 'absolute', left: '20px' }} />
                            }
                        </IconButton>

                    </AppBar>
                    <Grow in>
                        <Container>
                            <Grid container justify='space-between' alignItems='stretch' spacing={2}>
                                <Grid item>
                                    <Posts setCurrentId={setCurrentId} setForm={setForm} />
                                </Grid>
                            </Grid>
                            {posts.length && !displayForm &&
                                <IconButton
                                    size='small'
                                    onClick={() => setForm(true)}
                                >
                                    <AddCircleIcon className={classes.plus} style={{ fontSize: '65px' }} />
                                </IconButton>
                            }
                            {displayForm &&
                                <>
                                    <FormSheet currentId={currentId} setForm={setForm} setCurrentId={setCurrentId} />
                                    <IconButton
                                        color='secondary'
                                        size='small'
                                        style={{ right: '-10px', top: '5px', position: 'absolute' }}
                                        onClick={() => setForm(false)}
                                    >
                                        <CancelIcon color='secondary' className={classes.minus} style={{ fontSize: '65px' }} />
                                    </IconButton>
                                </>
                            }
                        </Container>
                    </Grow>
                </Paper>
            </Paper>
        </ThemeProvider>
    )
}

export default App