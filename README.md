## SheCare - Women's Health Platform

Welcome to SheCare, an innovative solution designed to empower women with personalized health insights and information. Our platform offers a range of features including personalized diet recommendations, menstrual cycle tracking, and informative health articles to support women in managing their health effectively.

## Features

### PCOS Risk Prediction
We've implemented the CatBoost algorithm to accurately predict the risk factor for Polycystic Ovary Syndrome (PCOS). With an outstanding 88% accuracy rate, our platform enhances diagnostic capabilities, enabling early detection and intervention for improved health outcomes.

### Personalized Diet Recommendations
Our platform utilizes advanced algorithms to analyze user data and provide personalized diet recommendations tailored to individual needs and health goals. Whether you're looking to improve fertility, manage PCOS, or optimize your overall health, our platform can help you make informed dietary choices.

### Menstrual Cycle Tracking
Tracking menstrual cycles is crucial for understanding reproductive health and fertility. Our platform offers intuitive tools for tracking menstrual cycles, including cycle length, symptoms, and ovulation prediction, helping women better understand their bodies and plan accordingly.

### Informative Health Articles
Stay informed with our curated collection of health articles covering a wide range of topics relevant to women's health. From reproductive health and hormonal imbalances to nutrition and fitness, our platform provides valuable insights to support your health journey.

## Use Case Diagram
<p align="center">
  <img src="https://github.com/durgawarrier/pcos-prediction/assets/101460363/5dd09c2b-a5c4-47de-a873-1b6183b74172" alt="PCOS Prediction" />
</p>

Users can request the system to predict their PCOS risk and provide recommendations for a balanced diet. To do so, the user will provide their personal and medical information to the system, and the machine learning model will analyze this data to predict the user's PCOS risk. Based on this prediction, the system will recommend a diet plan that includes breakfast, lunch, and dinner tailored to the user's specific needs. The diet recommendations provided by the system will be based on the latest research in PCOS management and will take into account the user's dietary preferences and restrictions. This personalized approach to diet planning will help users make better food choices, manage their weight, and improve their overall health.

## Technology Stack

- **Frontend:** Built with React.js for a seamless and intuitive user experience.
- **Backend:** Powered by Flask, a lightweight Python web framework, ensuring robustness and scalability.
- **Algorithm:** Utilized the CatBoost algorithm, along with Python libraries, for accurate PCOS risk prediction.

## Website Screenshot
**Home Page** : The landing page when the user first interacts with
![HomePage](https://github.com/durgawarrier/pcos-prediction/assets/101460363/ada1afb0-4bfa-4bca-ada0-64121870ce32)
**Service Page** : All the services avialable to the users are mentioned
![ServicePage](https://github.com/durgawarrier/pcos-prediction/assets/101460363/c5498dec-cceb-4979-8863-685ac09be2b6)
**PCOS Prediction Page** : Upon clicking the "Get Started" button on the homepage, users are directed to the PCOS prediction form. Here, our model assesses the probability of the user having PCOS based on input data.
![Predict1](https://github.com/durgawarrier/pcos-prediction/assets/101460363/ba2500c8-1aa9-4d5e-9777-45e282438f4a)
![Predict2](https://github.com/durgawarrier/pcos-prediction/assets/101460363/a8070b8d-daeb-4e42-a4cd-114d7c5b5372)
**User Friendly Chatbot** : Chatbot helps in educating the user more about PCOS
![ChatBot](https://github.com/durgawarrier/pcos-prediction/assets/101460363/54f1acc1-e4c1-408f-bf49-45a40b5f0d8d)
**Period Tracker Page** : This page predicts the date of the user's next period based on recorded menstrual cycle length. By inputting this parameter, users can anticipate their upcoming menstrual cycle, aiding in planning and preparation.
![PeriodTracker](https://github.com/durgawarrier/pcos-prediction/assets/101460363/775c1ff4-58be-4d52-b481-95fcf86faaf2)


