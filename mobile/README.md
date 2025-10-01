# Kendy MCP Assistant - Mobile App

React Native mobile application for Kendy MCP Assistant.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Tools

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **React Native CLI**: `npm install -g react-native-cli`
- **Watchman** (for macOS users): `brew install watchman`

### For iOS Development

- **Xcode** (latest version)
- **CocoaPods**: `sudo gem install cocoapods`
- iOS Simulator

### For Android Development

- **Android Studio** (latest version)
- **Android SDK** (API level 31 or higher)
- **Java Development Kit** (JDK 17)
- Android Emulator or physical device with USB debugging enabled

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. iOS Setup (macOS only)

```bash
cd ios
pod install
cd ..
```

### 3. Start Metro Bundler

```bash
npm start
```

### 4. Run on iOS

In a new terminal:

```bash
npm run ios
```

Or to run on a specific simulator:

```bash
npx react-native run-ios --simulator="iPhone 15 Pro"
```

### 5. Run on Android

Make sure you have an Android emulator running or a device connected, then:

```bash
npm run android
```

## 📁 Project Structure

```
mobile/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   │   ├── HomeScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── navigation/      # Navigation configuration
│   │   └── RootNavigator.tsx
│   ├── services/        # Business logic and API services
│   ├── hooks/           # Custom React hooks
│   ├── contexts/        # React Context providers
│   ├── utils/           # Utility functions
│   ├── types/           # TypeScript type definitions
│   │   ├── navigation.ts
│   │   └── index.ts
│   ├── locales/         # Internationalization
│   │   ├── en.json
│   │   ├── vi.json
│   │   └── index.ts
│   └── App.tsx          # Root component
├── android/             # Android native code
├── ios/                 # iOS native code
├── __tests__/           # Test files
├── .vscode/             # VS Code configurations
│   ├── launch.json      # Debug configurations
│   └── settings.json    # Editor settings
├── index.js             # App entry point
├── app.json             # App configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── metro.config.js      # Metro bundler configuration
├── babel.config.js      # Babel configuration
└── jest.config.js       # Jest configuration
```

## 🎨 Features

### Implemented

- ✅ React Navigation with Stack Navigator
- ✅ TypeScript configuration
- ✅ Vietnamese and English language support (i18n)
- ✅ Home and Settings screens
- ✅ VS Code debug configuration
- ✅ Metro bundler configuration
- ✅ Jest testing setup

### Dependencies Installed

- ✅ `@react-native-voice/voice` - Voice recognition
- ✅ `react-native-tts` - Text-to-speech
- ✅ `@react-native-async-storage/async-storage` - Local storage
- ✅ `@react-navigation/native` & `@react-navigation/stack` - Navigation
- ✅ `@react-native-community/netinfo` - Network information
- ✅ `react-native-keychain` - Secure storage
- ✅ `i18next` & `react-i18next` - Internationalization

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

## 🐛 Debugging

### VS Code Debugging

1. Open the project in VS Code
2. Go to Run and Debug (Cmd/Ctrl + Shift + D)
3. Select a debug configuration:
   - Debug Android
   - Debug iOS
   - Attach to packager
4. Start debugging

### React Native Debugger

1. Start the app
2. Open the developer menu:
   - iOS: Cmd + D (Simulator) or Shake (Device)
   - Android: Cmd + M (macOS) or Ctrl + M (Windows/Linux)
3. Select "Debug" to open Chrome DevTools

### Console Logs

```bash
# iOS logs
npx react-native log-ios

# Android logs
npx react-native log-android
```

## 🌍 Internationalization

The app supports Vietnamese (default) and English languages.

### Change Language

In the Settings screen, users can switch between languages. The language preference is managed by i18next.

### Add New Languages

1. Create a new JSON file in `src/locales/` (e.g., `ja.json`)
2. Add translations following the structure of `en.json`
3. Import and register the language in `src/locales/index.ts`

## 🔧 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests

## 🛠️ Development

### Adding New Dependencies

```bash
npm install <package-name>

# For iOS, also update pods
cd ios && pod install && cd ..
```

### Code Style

The project uses ESLint and Prettier for code formatting. The code is automatically formatted on save if you're using VS Code with the recommended extensions.

## 📱 Building for Production

### Android

```bash
cd android
./gradlew assembleRelease
```

The APK will be available at `android/app/build/outputs/apk/release/app-release.apk`

### iOS

1. Open `ios/KendyMCPMobile.xcworkspace` in Xcode
2. Select Product > Archive
3. Follow the distribution wizard

## 🔒 Security Notes

- Never commit sensitive keys or credentials
- Use environment variables for API keys
- Store sensitive data using `react-native-keychain`
- Follow React Native security best practices

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [i18next Documentation](https://www.i18next.com/)

## 🐛 Troubleshooting

### Metro Bundler Issues

```bash
# Clear Metro cache
npx react-native start --reset-cache
```

### iOS Build Failures

```bash
# Clean build
cd ios
pod deintegrate
pod install
cd ..
```

### Android Build Failures

```bash
# Clean build
cd android
./gradlew clean
cd ..
```

### Node Modules Issues

```bash
rm -rf node_modules
npm install
```

## 🤝 Contributing

Please read the main [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on contributing to this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
