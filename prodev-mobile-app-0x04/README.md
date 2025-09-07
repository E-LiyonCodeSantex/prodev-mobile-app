## HOW I BUILT THIS PROJECT.

1. 
   I created a new expo app in the directory prodev-mobile-app-0x04 using the following command: npx create-expo-app@latest prodev-mobile-app-0x04
2. 
   The command installed the outdated - inflight, rimraf, and glob packages which are no longer supported in future versions. So I moved in to the project folder: cd prodev-mobile-app-0x04
   and I upgraded to 11.6.0 which is the latest version as at sep/07/2025 with: npm install -g npm@11.6.0
3. 
   I restet the project in other to customized it as i want : npm run reset-project
4. 
   I ran the project using : npx expo start --web
   NOTE: This command will run it on the web pages (http://localhost:8081/ or 8080, 8082 depeding on the one that is available) and you can still view it in android by scanning the QR code in the terminal

