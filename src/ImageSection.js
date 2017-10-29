import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const pImgStyle = {
  maxHeight: "650px",
  maxWidth: "500px",
  minWidth: "0px"
};


const lCard = {
  marginTop: "10%"
};

const pCard = {
  marginLeft: "10%",
  maxWidth: pImgStyle.maxWidth
}

const ImageSection = (props) => {
  console.log(props.selectedIndex)
  let selectedImage = props.data[props.selectedIndex].image;
  return (
    <Card style={selectedImage.orientation === "p" ? pCard : lCard}>
      <CardMedia
        overlay={<CardTitle title={selectedImage.caption} subtitle={selectedImage.subcaption} />}
      >
        <img
          src={selectedImage.src} alt={selectedImage.subcaption}
        />
      </CardMedia>
    </Card>
  );
}

export default ImageSection;
