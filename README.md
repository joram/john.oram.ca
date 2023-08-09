# homepage
personal bio page for https://john.oram.ca

This site contains 4 sections:
- job history
- trip reports
- projects
- work thoughts

## Deployment
this is deployed to an S3 bucket behind a cloudfront distribution. The cloudfront distribution is configured to use a custom domain name, and to redirect http to https.
To deploy, run `make deploy`, and make sure you have the aws cli installed and configured, with keys that have access to the `john.oram.ca` bucket.


