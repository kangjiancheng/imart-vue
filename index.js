const openpgp = require('openpgp') // use as CommonJS, AMD, ES6 module or via window.openpgp

openpgp.initWorker({ path: 'openpgp.worker.js' }); // set the relative web worker path

(async () => {

  /**
   * ECC keys
   */

  const { privateKeyArmored, publicKeyArmored, revocationCertificate } = await openpgp.generateKey({
    userIds: [{ name: 'kjc-true', email: 'kjc@example.com' }], // you can pass multiple user IDs
    curve: 'ed25519',                                           // ECC curve name
    passphrase: 'kjc_true'                                      // protects the private key
  });

  console.log('ecc-publicKeyArmored:\n', publicKeyArmored);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
  console.log('ecc-privateKeyArmored:\n', privateKeyArmored);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
})();