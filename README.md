# Investment Calculator 💰

## Overview
A React-based web application that helps users calculate potential investment growth over time, supporting multiple currencies and providing detailed year-by-year projections.

## Features
- Calculate investment potential with interactive inputs
- Multi-currency support (USD, EUR, GBP)
- Dynamic calculation of future balance, interest, and total investment
- Real-time input validation
- Responsive design

## Technologies Used
- React
- JavaScript
- CSS
- PropTypes for type checking

## Screenshots
![Initial View](/screenshots/initial-view.png)



## Installation

### Prerequisites
- Node.js
- npm

### Steps
1. Clone the repository
   ```bash
   git clone https://github.com/denichinv/investment_calculator.git
   ```

2. Install dependencies
   ```bash
   cd investment_calculator
   npm install
   ```

3. Run the application
   ```bash
   npm start
   ```

## How to Use
1. Enter your initial investment amount
2. Set annual investment contribution
3. Specify expected annual return rate
4. Choose investment duration
5. Select your preferred currency
6. View detailed year-by-year investment breakdown

## Customization
- Modify `currencyRates` in `App.jsx` to update currency conversion rates
- Adjust initial default values in `useState` for different starting points

