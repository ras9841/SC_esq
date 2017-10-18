import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ImageSection = (props) => {
  let selectedImage = props.data[props.selectedIndex].image;
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title={selectedImage.caption} subtitle={selectedImage.subcaption} />}
      >
        <img src={selectedImage.src} alt={selectedImage.subcaption} />
      </CardMedia>
    </Card>
  );
}

export default ImageSection;
