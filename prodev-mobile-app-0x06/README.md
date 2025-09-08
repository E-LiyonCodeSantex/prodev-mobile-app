
## HOW I BUILT THIS REACT PROJECT USING NATIVEWIND AND TAILWINDCSS PROJECT.

1. 
   I created a new expo app in the directory prodev-mobile-app-0x04 using the following command: npx create-expo-app@latest prodev-mobile-app-0x04
2. 
   The command installed the outdated - inflight, rimraf, and glob packages which are no longer supported in future versions. So I moved in to the project folder: cd prodev-mobile-app-0x04
   and I upgraded to 11.6.0 which is the latest version as at sep/07/2025 with: npm install -g npm@11.6.0
3. 
   I restet the project in other to customized it as i want : npm run reset-project
4. 
   I ran the project using : npx expo start --web
   NOTE: This command will run it on the web pages (http://localhost:8081/ or 8080, 8082 depeding on the one that is available) and you can still view it in android by scanning the QR code in the terminal.
5. 
   * I installed nativewind and tailwindcss using command: npm install nativewind (for nativewind. Note; Some versions of NativeWind are not compatible with Expo SDK 53+. To be safe, install a stable version: npm install nativewind@2.0.11 ) 
   * and : npm install --save-dev tailwindcss (for tailwindcss. that is if    tailwindcss is not intailled intially. Note; TailwindCSS v3.3.3 and above introduces an async PostCSS plugin that breaks NativeWind’s sync-based processing in React Native. So i recommend Installing a lower version : npm install -D tailwindcss@3.3.2 ).

   * I intialized tailwindcss using command: npx tailwindcss init

   * I configured tailwind.config.js to look for any file with .js,.ts,.jsx, and .tsx extension in app/ and component/ folders

   * I created and configured babel.config.js to accept nativewind plugin: i added this line : plugins: ['nativewind/babel'],

   * I created and configured metro.config.js to helps Metro bundler understand how to resolve Tailwind classes.

## *IF ISSUES ARISES, DO THIS*
   * Delete node_modules and package-lock.json to ensure a clean install: rm -rf node_modules package-lock.json
   * Then reinstall everything again: npm install
   * Replace your tsconfig.json with this self-contained version that mimics Expo’s base config:

   ##### *DONE * #####


