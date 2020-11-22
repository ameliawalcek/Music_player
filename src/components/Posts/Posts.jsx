import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Loading from '../Loading/Loading'

const Posts = ({ setCurrentId, setForm }) => {
    const classes = useStyles()
    const posts = useSelector(state => state.posts)

    return (
        !posts.length ?
            <Loading /> :
            <Grid
                className={classes.container}
                container alignItems='stretch' spacing={3}>
                {posts.slice(0).reverse().map(post => (
                    <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} setForm={setForm}/>
                    </Grid>
                ))}
            </Grid>
    )
}

export default Posts