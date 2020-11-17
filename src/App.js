import React, { useEffect, useState } from 'react'
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post/Post'
import FormSheet from './components/Form/FormSheet'
import memories from './images/memories.png'
import useStyles from './styles'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <FormSheet currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App