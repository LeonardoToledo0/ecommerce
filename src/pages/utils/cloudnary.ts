import { Cloudinary } from "@cloudinary/url-gen";
const NewCloudinary = () => {
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.CLOUDINARY_CLOUD_NAME },
  });

  console.log("Conexão estabelecida com o Cloudinary!");

  return cld;
};

export default NewCloudinary;
