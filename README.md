# Student Care App

This is a React Native app designed for the University of Vavuniya (UoV) students. The app allows students to log in and access various features like their profile, courses, and subjects with corresponding marks and details. The app provides an intuitive navigation system for students to manage their academic information.

## Features

- **Login Page**: Allows students to log in with their username and password.
- **Profile Page**: Displays the student's profile with personal and biological information.
- **Course Page**: Shows the details of the student's course including its description, duration, and other related details.
- **Subjects Page**: Displays the subjects the student is enrolled in, along with their marks for each subject.


### Login Screen
A simple login page where students can enter their username and password to access their account.

### Profile Screen
Displays the student's personal and biological information including their contact and bio details.

### Course Screen
Shows the details of the student's course such as the name, code, and department.

### Subjects Screen
Displays the subjects the student is enrolled in along with their marks for each subject.

## Technologies Used

- **React Native**: For building the mobile app.
- **React Navigation**: For handling navigation between screens.
- **React Native Paper**: For UI components.
- **React Native Safe Area Context**: For proper layout and responsiveness.
- **Expo**: For building and running the React Native app.

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A device or simulator/emulator to run the app

### Steps to Install

1. Clone this repository:
   ```bash
     git clone https://github.com/IT3133-Project/StudentCareApp.git
     cd studentcare
   ```
2. Install dependencies:
   ```bash
     npx install
   ```
3. Run the app:
  ```bash
    npx  start
  ```
---
## Directory Structure
  ```bash
    myapp/
├── assets/                # Contains static assets like images
├── components/            # Contains the reusable components like Login, Profile, Course,  
├── data/                  # Contains mock data for students, courses, subjects, and marks.
├── App.js                 # Main app entry point
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
  ```
---
## Screenshots

<div style="display: flex; justify-content: space-between;">

  <div style="margin-right: 10px; text-align: center;">
    <p>Login Screen</p>
    <img src="./Screenshots/Login%20Page.jpg" width="200">
  </div>

  <div style="margin-right: 10px; text-align: center;">
    <p>Profile Screen</p>
    <img src="./Screenshots/Profile%20Page.jpg" width="200">
  </div>

  <div style="margin-right: 10px; text-align: center;">
    <p>Course Screen</p>
    <img src="./Screenshots/Course%20Page.jpg" width="200">
  </div>

  <div style="margin-right: 10px; text-align: center;">
    <p>Subjects Screen</p>
    <img src="./Screenshots/Subject%20Page.jpg" width="200">
  </div>
</div>
<div style="text-align: center;">
    <p>Demo Video</p>
    <img src="./Screenshots/Demo.gif" width="200">
  </div>

