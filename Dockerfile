# Use uma imagem base com Node.js e Java 17
FROM reactnativecommunity/react-native-android 
WORKDIR /app

COPY . /app

RUN echo "Acquire::AllowInsecureRepositories true;" > /etc/apt/apt.conf.d/99allow-insecure-repositories


# Instale o curl e unzip
RUN apt-get update && \
    apt-get install -y curl unzip && \
    rm -rf /var/lib/apt/lists/*

# Instale pacotes do SDK do Android
RUN echo "yes" | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --channel=0 --verbose "system-images;android-27;default;x86_64" "emulator"

RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
RUN mkdir -p /root/.android && touch /root/.android/repositories.cfg

# Crie um AVD (Android Virtual Device)
RUN echo "no" | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager --verbose create avd --force --name "Nexus6P" --package "system-images;android-27;default;x86_64" --sdcard 200M --device 11  


RUN npm install envinfo detox-cli --global && \
    envinfo  

RUN npm install

ENV PATH="/app/node_modules/.bin:${PATH}"

EXPOSE 3000

CMD ["npm", "start"]
