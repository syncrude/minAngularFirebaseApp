// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyB70fAH6HyIa5Em47lnX1n9TebIz0kl7A0',
      authDomain: 'minangularfireapp.firebaseapp.com',
      databaseURL: 'https://minangularfireapp.firebaseio.com',
      projectId: 'minangularfireapp',
      storageBucket: 'minangularfireapp.appspot.com',
      messagingSenderId: '584073694435'
  }
};
