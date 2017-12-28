import React, { Component } from 'react';

import '../styles/components/Post.css';

import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

class Post extends Component {

    constructor() {
        super()
        this.state = {title: "", description: ""}
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            description: this.props.description,
        })
    }

    render(){
        return ( 
        <div className="post">
            <Card>
                <Grid container spacing={16}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} className="full-thumb">
                        <img className="thumbnail" src="https://dummyimage.com/650x450/000/fff" width="100%" alt="imagem referente ao post" />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                        <CardContent>
                            <Typography type="headline" component="h2">
                                {this.state.title}
                            </Typography>
                            <Typography component="p">
                                {this.state.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )}
}

export default Post;