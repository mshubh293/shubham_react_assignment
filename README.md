# Application SetUp

1. Installing dependencies

        npm install

2. Running Application
    
        npm start


# System Requirements

1. Node v10 or above
2. NPM v6 or above
3. OS - any OS
4. Git


# About the project

This Web application is an assignment for charter communications. This application calculates the reward points of a customer based on the transaction amount of past three months. 
The application serves the data from a dataset file named as dataService.js. The reward points is calculated using a certain formula described below.

# Reward Points calculations:

    The application uses following logic to calculate reward points:
    
    1. If transaction amount > 100
        then reward point = (2*(transaction amount-100) + 50)
    2. If transaction amount > 50 and amount < 100 
        then reward point = transaction amount-50
    3. If transaction amount < 50
        then reward point = 0








