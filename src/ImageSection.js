import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const imgStyle = {
  maxHeight: "650px",
  maxWidth: "500px",
  minWidth: "0px"
};

const ImageSection = (props) => {
  console.log(props.selectedIndex)
  let selectedImage = props.data[props.selectedIndex].image;
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title={selectedImage.caption} subtitle={selectedImage.subcaption} />}
      >
        <img src={selectedImage.src} alt={selectedImage.subcaption} style={imgStyle} />
      </CardMedia>
    </Card>
  );
}

export default ImageSection;
