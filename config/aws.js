/**
 * Amawon Web Services Credentials configuration
 * AWS is used to store all the pictures upload into posts.
 *
 * SDK Documentation: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
 * Get security credentials: http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html
 */


module.exports.aws = {
  accessKeyId: 'AKIAIHVYW4YHXG26TBQA',
  secretAccessKey: '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',
  region: 'us-west-2',         // Default: us-west-2, check documentation: http://docs.aws.amazon.com/general/latest/gr/rande.html
  bucket: 'bandetta',
  endPoint: 's3.amazonaws.com' // Default: s3.amazonaws.com, check documentation: http://docs.aws.amazon.com/general/latest/gr/rande.html
};