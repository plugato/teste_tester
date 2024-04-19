# Aplicacao de teste usando DETOX https://wix.github.io/Detox/

## Running

### Build APK

    detox build -c android.emu.debug

### Running test

    //before running run
    yarn start

    detox test --configuration android.emu.debug  --take-screenshots all --record-videos all
