/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
*/

module.exports.custom = {

  /**************************************************************************
  *                                                                          *
  * Default settings for custom configuration used in your app.              *
  * (these may also be overridden in config/env/production.js)               *
  *                                                                          *
  ***************************************************************************/
  aws: {
    accessKeyId: 'AKIAJDJP52PAV47HNQXQ',
    secretAccessKey: '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',
    region: 'us-east-1'
  },

  mailgun: {
    sender: 'E-Will TEST oracle <god@e-will.tech>',
    apiUser: 'api',
    apiKey: 'key-26f702ef3a1b7ed388f36d03ebba0022',
    apiURL: 'https://api.mailgun.net/v3/mail.e-will.tech'
  },

  etherscan: {
    apiKey: 'Z8B4AWI1AXU2JYD6P9HD7I3G9HZPWQPGKH',
  },

  providerInfo: {
    email: 'vps2018@valeyev.ru',

    address: '0xd79a8fdb771ea12359270ad7020bccb328c9f5f7',
    publicKey: '0x043ff0b40b4db4c26e022b691d91ad92f230ca81822a51ba9254d9f246508353f98a03c3355d5c81053893dfdf81ba9e0abcf87b6a55cd5d749be07c5902c289f5',
    privateKey: '0xe8d1f6cb90fef5fc9696cc77858b42d4e99b0959246d86f4584b49f5af0fe3f9'
  },

  emailConfirmationTimeout: 60000 // 1 minute for dev mode


};
