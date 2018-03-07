# Introduction ##
#### A try out for using nightwatch+magellan FTW (native mobile app automation test + mobile web automation test + desktop web automation test)

## Installation ##
* Install [Node.js >= v4.x.x and npm](http://nodejs.org/)
* Install all node package dependencies:
```bash
$ npm install
# if you want to run app test, run following commands too
$ npm install appium@1.6.5
$ npm install wd
```

## Usage ##

#### run tests:

To run in local

```bash
# Run native app test
### iOS
$ npm run test:ios

### Android
$ AVD_NAME=${YOUR_AVD} npm run android:launch
$ npm run test:android

# Run mobile web test
$ ./node_modules/.bin/magellan --serial  --max_test_attempts 1 --local_browser appiummweb --test tests/demo-mweb.js --sync_browsers safari,iphone,ipad

# Run desktop web test
$ ./node_modules/.bin/magellan --serial  --max_test_attempts 1 --local_browser chrome --test tests/demo-web.js
```

To run on Saucelabs

NOTE: before run the app test on saucelabs, you need to 

 * for iOS
   * zip ./app/yourapp.app with `zip -r app/yourapp.zip app/yourapp.app`
   * upload ./app/yourapp.zip to saucelabs via following curl
 * for Android
   * upload ./app/yourapp.apk to saucelabs via following curl (replace .zip with .apk)

```bash
$ curl -u ${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY} -X POST "http://saucelabs.com/rest/v1/storage/${SAUCE_USERNAME}/yourapp.zip?overwrite=true" -H "Content-Type: application/octet-stream" --data-binary @./app/yourapp.zip
```

```bash
# Run native app test
### iOS
$ DPRO=ios ./node_modules/.bin/magellan --nightwatch_config conf/nightwatch.json --profile appium-ios-app --test tests/demo-app.js --serial --max_test_attempts=1

### Android
$ DPRO=android ./node_modules/.bin/magellan --nightwatch_config conf/nightwatch.json --profile appium-android-app --test tests/demo-app.js --serial --max_test_attempts=1


# Run mobile web test
$ ./node_modules/.bin/magellan --nightwatch_config conf/nightwatch.json --max_test_attempts=1 --profile appium-ios-browser --test=tests/demo-mweb.js --serial --max_test_attempts=1


# Run desktop web test
$ ./node_modules/.bin/magellan --nightwatch_config conf/nightwatch.json --max_test_attempts=1 --profile <http url to the profile> --test=tests/demo-web.js --serial --max_test_attempts=1

```

#### run app tests with wd:

follow steps

 1. pull latest master
 2. `npm install` to install latest `nightwatch-extra@4.3.0`
 3. `npm install wd` since wd is in optionalDependencies
 4. `mkdir ./lib/custom_commands/wd`
 5. `./node_modules/.bin/owl --output ./lib/custom_commands/wd --config ./conf/nightwatch.json`

Check if wd*.js files are created in `./lib/custom_commands/wd`. If so, run following command.

```bash
DPRO=ios ./node_modules/.bin/magellan --local_browser appiumiosapp  --test tests/demo-app.wd.js --max_test_attempts 1  --serial
```

