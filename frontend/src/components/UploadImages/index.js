import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../../graphql/mutation";

function UploadImages() {
  const [uploadImage, { data }] = useMutation(UPLOAD_IMAGE);
  const [newImage, setnewImage] = useState(null);

  console.log(newImage);

  console.log(data);
  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => {
          setnewImage(e.target.files[0]);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          uploadImage({
            variables: {
              file: newImage,
            },
          });
        }}
      >
        SEND FROM BACKEND
      </button>
    </div>
  );
}

export default UploadImages;
