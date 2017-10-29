import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const pStyle = {
  maxHeight: "650px",
  maxWidth: "500px",
  minWidth: "0px"
};

const lStyle = {
  marginTop: "8%",
  marginBottom: "20%"
}

const ImageSection = (props) => {
  console.log(props.selectedIndex)
  let selectedImage = props.data[props.selectedIndex].image;
  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title={selectedImage.caption} subtitle={selectedImage.subcaption} />}
      >
        <img
          src={selectedImage.src} alt={selectedImage.subcaption}
          style={selectedImage.orientation === "p" ? pStyle : lStyle}
        />
      </CardMedia>
    </Card>
  );
}

export default ImageSection;
