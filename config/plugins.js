module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      endpoint: `${env("AWS_REGION_NAME")}.digitaloceanspaces.com`,
      region: env("AWS_REGION_NAME"),
      params: {
        Bucket:env("AWS_BUCKET_NAME"),
      },
    },
  },
});