import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload) {
    singleUpload(file: $file)
  }
`;
