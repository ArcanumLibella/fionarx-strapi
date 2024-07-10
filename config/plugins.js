module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET_KEY"),
        region: env("AWS_REGION", "eu-west-3"),
        params: {
          Bucket: env("AWS_BUCKET", "fionarx-strapi-images"),
        },
      }, },
  },
  seo: {
    enabled: true,
  },
});