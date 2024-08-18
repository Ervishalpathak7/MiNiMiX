 Minimix - URL Shortener
   
  - Overview
   

  >Minimix is a web application that allows users to shorten long URLs into concise, shareable links. The app includes user authentication, enabling registered users to generate, manage, and store their              shortened URLs securely.
     

  - **Features**

      * URL Shortening: Convert long URLs into short, easily shareable links.
      * User Authentication: Secure login and sign-up functionality using JSON Web Tokens (JWT).
      * User Dashboard: Manage your shortened URLs in a personalized dashboard.
      * Persistent Data Storage: All data, including URLs and user information, is stored securely in MongoDB.



   - **Tech Stack**
      - *EJS* : Server-side templating for dynamic HTML rendering.
      - *Express* : Backend framework for handling routing, HTTP requests, and middleware integration.
      - *MongoDB* : NoSQL database for efficient storage and retrieval of URLs and user data.
      - *JWT (JSON Web Tokens)* : Used for secure user authentication and authorization.
      - *Bcrypt* : Password hashing for enhanced security during user authentication.
 
        



- **Installation** 

	1. Clone the repository

    		git clone https://github.com/Ervishalpathak7/minimix.git
    		cd minimix 
   
	3. Install dependencies

    		 npm install
   
	5. Configure environment variables
 		  > The project already includes a .env file. You just need to update the following values:

       		PORT=your_port_number
       		MONGODB_URI=your_mongodb_connection_string
       		JWT_SECRET=your_jwt_secret


	6. Run the application:

    		npm start




- **Usage**
  -  Sign up or log in:
     - Access the login or sign-up page.
     - Create a new account or log in with your existing credentials.


  - Generate a short URL:
     - Enter a long URL in the input field on the dashboard.
     - Click the "Generate" button to create a short link.


  - Manage your URLs:
    - View your shortened URLs in the dashboard.
    - Delete or update your URLs as needed.



- ***Contributing***
    
	*Feel free to fork this repository, make improvements, and submit a pull request. Any contributions are welcome!*
