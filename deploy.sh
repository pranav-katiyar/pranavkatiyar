# deploy to s3 bucket and invalidate cloudfront cache
aws s3 sync web-ui/dist s3://pranavkatiyar --delete
aws cloudfront create-invalidation --distribution-id EXCXRSHEEIYQJ --paths "/*"

