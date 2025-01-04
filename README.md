# Navigation App

## Overview

The app is an platform with a Home screen, About Us section, and Contact Us form, featuring smooth navigation and a simple user interface.

---

## Features

- **Form Input Handling**: Users can input their name, email, phone number, and message.
- **Navigation**: Buttons to navigate to the "About Us" and "Home" screens.
- **Interactive UI**: User-friendly interface designed for a smooth experience.
- **Validation Feedback**: Immediate feedback for user inputs.
- **Responsive Design**: Adapts to different screen sizes seamlessly.

---

## Technologies Used

- **React Native**: Framework for building the app.
- **JavaScript**: Core programming language used.
- **React Navigation**: For navigating between screens.
- **React Native Paper**: For UI components and theming.


---

## Setup and Installation

### Prerequisites

1. **Node.js** (Version 14 or above): Download from [Node.js Official Website](https://nodejs.org/).
2. **React Native CLI**: Follow the [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup).
3. **Expo Go App** (Optional): For testing on physical devices.

### Steps

1. **Create the folder named "myapp".**


2. **Changes the directory to myapp.**
    ```bash
    cd myapp
    ```


3. **Creates a new Expo project named MobileApp using the blank template.**
    ```bash
    npx create-expo-app MobileApp --template blank
    ```


4. **Changes the current directory to the newly created MobileApp project directory.**
   ```bash
   cd MobileApp
   ```


5. **Installs dependencies required for running the app on the web using Expo.**
    ```bash
    npx expo install react-dom react-native-web @expo/metro-runtime
    ```


6. **Start the development server**
   ```bash
   npx expo start
   ```
   or

   **To run the app if mobile and pc have different network or virtual environment (use tunnel mode)**

   ```bash
   npx expo start --tunnel
    ```


7.  **Open in a web browser**

    type "w"

     ```bash
    w
    ```


8. **Installs the React Native Paper library.(This is a UI component library that provides Material Design components for React Native.)**
    ```bash
    npm install react-native-paper
    ```


9. **Installs the react-native-safe-area-context library.(This library manage safe areas in a React Native app.)**
    ```bash
    npm install react-native-safe-area-context
    ```

    
10. **Installs the react-native-vector-icons library.(This provides customizable icons to use within the app.)**
    ```bash
    npm install react-native-vector-icons
    ```

---

## Project Structure

```

├── components
│   ├── ContactUs.js       # contactus component
│   ├── AboutUs.js         # About Us component
│   ├── Home.js            # Home component
├── App.js                 # Root component
├── assets
│   └── images             # Images of the app
├── package.json           # Project configuration
├── README.md              # Documentation

```


## Implementation Details

### 1. **Contact Form Screen**

The `ContactUs` screen handles:
- Input fields for `name`, `email`, `phone number`, and `message`.
- Navigation buttons to "About Us" and "Home" screens.
- Real-time data binding using `useState`.

#### Code Snippet
```javascript
const ContactUs = () => {
    const [name, setName] = useState('');

    return (
        <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
        />
    );
};
```

### 2. **Navigation**

The `AppNavigator` file sets up navigation between screens using React Navigation.

#### Code Snippet
```javascript
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contact Us" component={ContactUs} />
                <Stack.Screen name="About Us" component={AboutUs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```

---

## Steps Taken

1. **Project Initialization**:
   - Set up a new React Native project using `npx react-native init contact-us-app`.

2. **Created UI Components**:
   - Designed a clean and functional `Contact Us` screen using React Native Paper.

3. **Implemented Navigation**:
   - Configured a stack navigator with `Home`, `Contact Us`, and `About Us` screens.

4. **Tested Responsiveness**:
   - Verified UI adaptability across different screen sizes.

5. **Optimized User Experience**:
   - Added real-time input handling and navigation feedback.

---

## Future Improvements

- Add email validation and phone number formatting.
- Enhance the design with custom themes and animations.
- Implement a backend API to handle form submissions.

---

## Contribution

Contributions are welcome! Feel free to fork the repository and create a pull request with your improvements.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- React Native documentation and community.
- React Native Paper for providing pre-built UI components.

---

## Author

GitHub: [GitHub Profile](https://github.com/LayuruLK)

Email: layurulakvidukarunathilaka@gmail.com

