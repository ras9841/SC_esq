import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const ImageSection = (props) => {
  console.log(props.selectedIndex)
  let selectedImage = props.data[props.selectedIndex].image;
  console.log(selectedImage)
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
