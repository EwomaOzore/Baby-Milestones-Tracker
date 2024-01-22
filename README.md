Baby Milestones Tracker

Description
Baby Milestones Tracker is a mobile app that helps parents track and cherish every moment of their baby's journey. The app allows users to record special milestones, organize memories, and create a beautiful timeline of their baby's growth.

Table of Contents
1. Key Design Decisions
2. Considerations
3. Getting Started
4. Usage
5. Technologies Used
6. Contributing
7. License

Key Design Decisions

Navigation
The app uses React Navigation for seamless navigation between screens. The MainStackNavigator handles onboarding and dashboard screens, while the MainTabNavigator manages the main tab navigation.

State Management
Redux is employed for state management, ensuring a centralized and predictable state. Actions such as adding, updating, and deleting milestones are dispatched through Redux.

Styling
Styling is accomplished using a combination of inline styles and the Tailwind CSS framework for React Native. This provides a clean and consistent look throughout the app.

Folder Structure
The project is organized using a modular folder structure. Each feature or component has its dedicated folder containing relevant files. This enhances code maintainability and scalability.

Considerations

Performance
Efforts have been made to optimize the app for better performance, especially when handling a growing list of milestones. Memoization techniques are employed to prevent unnecessary re-renders.

Cross-Browser Compatibility
As a mobile app, cross-browser compatibility is not a concern. However, the app is designed to work seamlessly on various mobile devices and screen sizes.

Responsiveness
The app is developed with a responsive design approach, ensuring a user-friendly experience on different devices and screen orientations.

Getting Started
To run the app locally, follow these steps:
1. Clone the repository.
2. Install dependencies using npm install.
3. Run the app with npm start.

Usage
Onboarding Screen: Launches when the app is first opened, guiding users through the key features.

Dashboard Screen: Displays a timeline of recorded milestones, categorized by type.

Adding a Milestone: Click on the "Add Milestone" button to record a new milestone with details like date, type, and notes.

Technologies Used:
1. React Native
2. React Navigation
3. Redux
4. Tailwind CSS for React Native

Contributing
We welcome contributions to enhance Baby Milestones Tracker. To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.
