import React from "react";
// import { ProgressBar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import LinearProgress from "@material-ui/core/LinearProgress";
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "../components/Button";

import defaultAvatar from "../public/placeholder.png";
import axios from "axios";

export default function ImageUpload(props) {
  const [file, setFile] = React.useState(null);
  const [percentage, setPercentage] = React.useState(0);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );

  let fileInput = React.createRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    setFile(file);
    reader.readAsDataURL(file);
  };

  // arthur's version

  const uploadPhoto = (photo) => {
    setPercentage(0);
    console.log(photo);
    const formData = new FormData();
    formData.append("file", file);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        //Set the progress value to show the progress bar
        const percent = Math.floor(((loaded / 1000) * 100) / (total / 1000));
        console.log(percent);
        setPercentage(percent);
      },
    };

    axios
      .post("https://api.seventhave.io/upload", formData, options, {
        headers: new Headers({
          "Content-Type": "multipart/form-data",
        }),
      })
      .then((res) => {
        const imageData = res.data.secure_url;
        localStorage.setItem("imageData", imageData);
        setPercentage({ avatar: res.data.url, percentage: 100 }, () => {
          setTimeout(() => {
            setPercentage({ percentage: 0 });
          }, 1000);
        });

        console.log(res);
        console.log(imageData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
    fileInput.current.value = null;
  };
  let { avatar, addButtonProps, changeButtonProps, removeButtonProps } = props;
  return (
    <div className="fileinput text-center">
      <input
        type="file"
        onChange={handleImageChange}
        ref={fileInput}
        name="photo"
        hidden
      />

      <div className={avatar ? " img-circle h-17 " : ""}>
        {percentage > 0 && (
          <>
            <LinearProgress
              value={percentage}
              variant="determinate"
              label={percentage}
            />{" "}
            <h1>{`${percentage}%`}</h1>
          </>
        )}

        <img
          className="rounded-[28px] w-28 mx-auto h-28 mb-5 object-cover"
          src={imagePreviewUrl}
          alt="..."
          name="preview"
        />
      </div>

      <div>
        {file === null ? (
          <Button {...addButtonProps} onClick={() => handleClick()}>
            {avatar ? "Add Photo" : "Select image"}
          </Button>
        ) : (
          <span>
            <Button {...changeButtonProps} onClick={() => handleClick()}>
              Change
            </Button>
            {avatar ? <br /> : null}
            <Button {...removeButtonProps} onClick={() => handleRemove()}>
              <i className="fas fa-times" /> Remove
            </Button>
            <Button
              onClick={(e) => {
                uploadPhoto(file);
              }}
            >
              <i className="fas fa-upload" /> Upload
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object,
  uploadButtonProps: PropTypes.object,
};
