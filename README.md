# Red Rhythm

Red Rhythm is a period tracking web and app that helps users keep track of their menstrual cycle, monitor symptoms, and receive insights on their menstrual health. The project consists of four branches: `frontend`, `backend`, `app`, and `ml-models`.

## Frontend

The `frontend` branch contains the source code for the web frontend built with React.js and Material-UI. The frontend provides an interface for users to track their menstrual cycle, log symptoms, and view insights on their menstrual health. The branch includes components for calendar views, symptom tracking, and data visualization. In addition, the branch includes integration with Twilio to send SMS messages to loved ones with customizable messages. To run the frontend locally, clone the repository and run `npm start` in the `frontend` directory.

## Backend

The `backend` branch contains the source code for the web backend built with Django and Django REST framework. The backend provides a RESTful API for the frontend to store and retrieve user data, including menstrual cycle information, symptom logs, and health insights. The branch includes models for user profiles, menstrual cycles, and symptom logs, as well as views for data retrieval and analysis. In addition, the branch includes integration with Twilio to send SMS messages to loved ones with customizable messages. To run the backend locally, clone the repository and run `python manage.py runserver` in the `backend` directory.

## App

The `app` branch contains the source code for the mobile app built with React Native and Tailwind CSS. The app provides a streamlined interface for users to track their menstrual cycle and log symptoms on-the-go. The branch includes screens for cycle tracking, symptom logging, and health insights. In addition, the branch includes integration with Twilio to send SMS messages to loved ones with customizable messages. To run the app locally, clone the repository and run `npm start` in the `app` directory.

## ML Models

The `ml-models` branch contains the source code for machine learning models used to detect polycystic ovary syndrome (PCOS) based on user data. The models are built with scikit-learn and TensorFlow, and can analyze user data to provide insights on potential PCOS risk factors. To run the models locally, clone the repository and run `python ml_models.py` in the `ml-models` directory.

