import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Menu, MenuItem } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId, setForm }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = e => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const handleEdit = () => {
        setCurrentId(post._id)
        setForm(true)
        handleClose()
    }

    const handleDelete = () => {
        dispatch(deletePost(post._id))
        handleClose()
    }

    return (
        <Card raised={true} className={classes.card}>
            <CardMedia component='div' className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <IconButton onClick={handleClick} style={{ color: 'white' }}>
                    <MoreHorizIcon fontSize='default' />
                </IconButton >
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleEdit} >Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' style={{color: '#808080'}}>{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} color='primary' variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.message} variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton size='small' color='secondary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small' style={{ paddingRight: '10px', marginBottom: '2px' }} />
                    {post.likeCount}
                </IconButton>
                    <img className={classes.clearImg} src={`https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png`} alt={``} />
            </CardActions>
        </Card >
    )
}

export default Post