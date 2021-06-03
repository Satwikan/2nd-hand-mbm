import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

import Avatar from "antd/lib/avatar/avatar";
function FileUpload({ values, setValues, setloading: setLoading }) {
  const { user } = useSelector((state) => ({ ...state }));

  const fileUploadResize = (e) => {
    // e.preventDefault();
    // console.log(e.target.files);
    let files = e.target.files;
    let allUploadedFiles = values.images;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            axios
              .post(
                "http://localhost:8000/api/uploadimages",
                { image: uri },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log(res);
                allUploadedFiles.push(res.data);
                setLoading(false);
                setValues({ ...values, images: allUploadedFiles });
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleRemove = async (keys) => {
    setLoading(true);
    // console.log(keys)
    axios
      .post(
        "http://localhost:8000/api/removeimages",
        { public_id: keys },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        let filterImages = values.images.filter((item) => {
          return item.public_id !== keys;
        });
        setValues({ ...values, images: filterImages });
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <>
      <div className="row">
        {values.images &&
          values.images.map((image) => (
            <Badge
              onClick={() => handleRemove(image.public_id)}
              key={image.public_id}
              count="x"
            >
              <Avatar
                style={{ backgroundPosition: "center", cursor: "pointer" }}
                className="ml-3 center mb-4"
                src={image.url}
                size={100}
              />
            </Badge>
          ))}
      </div>
      <div className="row">
        {/* {JSON.stringify(values.images)} */}
        <label className="btn btn-primary btn-raised">
          Choose File
          <input
            type="file"
            hidden
            onChange={fileUploadResize}
            multiple
            accept="image/*"
          />
        </label>
      </div>
    </>
  );
}

export default FileUpload;
