import { styled } from "@mui/system";
import { Grid, Box, Button } from "@mui/material";
import "../stlyes/instagram.css";
import React, { useContext, useRef, useState } from "react";
import { FilterContext } from "../App";
import domtoimage from "dom-to-image"
import { saveAs } from "file-saver";

const StyleBox = styled(Box)({
  background: "#ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  minHeight: "20rem",
  maxHeight: "100vh",
  marginBottom: "1rem",
  borderRadius: "6px",
});

const StyledImage = styled("img")((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`,
}));

const ImageFields = () => {
  const [imageFile, setImageFile] = useState(null);
  const uploadInputRef = useRef(null);
  const imageResultRef = useRef()
  const { filterClass, customFilter } = useContext(FilterContext);

  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleDowlandImage = () =>{
      domtoimage.toBlob(imageResultRef.current)
      .then (function(blob) {
        saveAs(blob , "result.png")
      })
      .catch(function (error) {
        console.log(error , "Oooops what's happening")
      })
  }
 



  const uploadImage = () => (
    <figure>
      <StyledImage ref={imageResultRef}  customFilter={!filterClass && customFilter}  src={imageFile} className={filterClass} alt="" />
    </figure>
  );

  return (
    <Grid item xs={12} md={7}>
      <StyleBox
        onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
      >
        {imageFile ? uploadImage() : <p>Upload Image</p>}
      </StyleBox>
      <input
        onChange={handleChangeInput}
        type="file"
        accept="image/*"
        ref={uploadInputRef}
        hidden
      />
      <Button onClick={handleDowlandImage} disabled={!imageFile} variant="contained" fullWidth>
        Dowland Image
      </Button>
    </Grid>
  );
};

export default ImageFields;
