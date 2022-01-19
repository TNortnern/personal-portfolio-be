module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      breakpoints: {
        xlarge: 1600,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION_NAME"),
      params: {
        Bucket: env("AWS_BUCKET_NAME"),
      },
    },
  },
  // ...
});
