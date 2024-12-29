authControllers for users,resellers,and admins using email.
compares the hashed password using bcrypt.compare
if successful,generates a JWT token with user'ID and role.
Example Flow:
User submits login form in the frontend.
API endpoint /api/auth/login is called.
Backend verifies credentials and returns a token.
Frontend stores the token in localStorage for future API calls.
Interaction:
Uses the User model to fetch user details.
Relies on the jsonwebtoken library to issue tokens.
Validates requests via the frontend login component.
2. keyController.js
Purpose:
Manages WhatsApp keys for resellers and users.

Key Functions:
getAllKeys(req, res):

Input: No specific input (headers contain the JWT token).
Process:
Retrieves all keys from the database using the Key model.
Output: Returns an array of keys.
Usage:
Used by admins and resellers to monitor available keys.
createKey(req, res):

Input: validity (date), usageLimit (number of uses).
Process:
Generates a secure key string using keyGenerator.js.
Creates a new Key document in the database.
Output: Returns the newly created key.
Example Flow:
Admin or reseller initiates key generation in the frontend.
API endpoint /api/keys is called with key parameters.
Backend saves the key in the database and responds with the new key.
Interaction:
Interacts with the Key model to store and fetch data.
Uses keyGenerator.js to generate unique keys.
3. resellerController.js
Purpose:
Manages resellers created by the admin.

Key Functions:
getResellers(req, res):

Input: No specific input (headers contain the JWT token).
Process:
Fetches all resellers using the Reseller model.
Output: Returns a list of resellers.
Usage:
Admins use this to monitor and manage all resellers.
createReseller(req, res):

Input: name, email, password.
Process:
Hashes the password using bcrypt.hash.
Creates a new Reseller document in the database.
Output: Returns the newly created reseller.
Example Flow:
Admin fills out the reseller registration form in the frontend.
API endpoint /api/resellers is called.
Backend saves the reseller in the database.
Interaction:
Uses the Reseller model to store and fetch reseller data.
Hashes passwords with bcrypt.
4. userController.js
Purpose:
Manages users (agencies) under resellers.

Key Functions:
getUsers(req, res):

Input: No specific input (headers contain the JWT token).
Process:
Fetches all users (agencies) using the User model.
Output: Returns a list of users.
Usage:
Resellers use this to monitor their associated agencies.
createUser(req, res):

Input: name, email, password.
Process:
Hashes the password using bcrypt.hash.
Creates a new User document in the database.
Output: Returns the newly created user.
Example Flow:
Reseller registers an agency in the frontend.
API endpoint /api/users is called.
Backend saves the agency in the database.
Interaction:
Uses the User model to store and fetch agency data.
Validates user creation requests via middleware.
5. adminController.js
Purpose:
Handles admin-specific operations, such as managing resellers.

Key Functions:
createReseller(req, res):

See resellerController.js (similar functionality).
viewResellers(req, res):

See resellerController.js (similar functionality).
Interaction:
Provides APIs for the admin dashboard in the frontend.
Integrates with the Reseller model.
How Controllers Work Together
Request Flow:
Frontend:
Sends a request to an API endpoint (e.g., /api/auth/login).
Middleware:
Verifies JWT tokens (authMiddleware.js) and checks user roles.
Controllers:
Processes the request and interacts with the database models.
Database:
Stores or retrieves data using MongoDB.
Response:
Sends the appropriate response back to the frontend.
Example:
Creating a Key:
Admin clicks "Generate Key" in the frontend.
API call to /api/keys with key parameters.
Middleware verifies admin access.
createKey in keyController.js generates a key and saves it.
Response is sent back to the frontend with the new key.


Backend Use Case:
Backend Use Cases and Flow
The backend is designed to support multiple user roles (Admin, Reseller, and User/Agency) and provide APIs to manage entities like keys, resellers, and users. Here's an explanation of its use cases and how the system flows:

1. Backend Use Cases
A. Authentication and Authorization
Actors: All roles (Admin, Reseller, User)

Use Case: Login
Purpose: Authenticate users and issue JWT tokens.
Flow:
Frontend: User submits email and password.
Backend:
Validates credentials against the User, Reseller, or Admin collection.
Issues a JWT token with user ID and role.
Frontend: Stores the token and uses it for subsequent API calls.
B. Key Management
Actors: Admins and Resellers

Use Case: Key Creation
Purpose: Generate WhatsApp keys with a validity period and usage limit.
Flow:
Frontend: Admin/Reseller provides key parameters (validity and usage limit).
Backend:
Verifies admin/reseller role using middleware.
Generates a secure key using keyGenerator.js.
Saves the key in the Key collection.
Frontend: Receives the new key for display.
Use Case: Assign Keys
Purpose: Distribute keys to users/agencies.
Flow:
Frontend: Reseller selects a key and assigns it to an agency.
Backend:
Verifies reseller role.
Updates the Key collection to associate the key with the agency.
Frontend: Updates the agency's dashboard with the assigned key.
Use Case: Key Usage
Purpose: Track key usage and ensure limits are respected.
Flow:
WhatsApp Tool: Makes an API call when a key is used.
Backend:
Verifies the key's validity and usage limit.
Updates the usage count in the Key collection.
Frontend: Reflects the updated usage in dashboards.
C. Reseller Management
Actors: Admins

Use Case: Create Reseller
Purpose: Add new resellers who can distribute keys to agencies.
Flow:
Frontend: Admin fills in reseller details (name, email, password).
Backend:
Verifies admin role using middleware.
Hashes the password and saves the reseller in the Reseller collection.
Frontend: Displays the newly created reseller.
Use Case: View Resellers
Purpose: Monitor reseller activity.
Flow:
Frontend: Admin requests a list of resellers.
Backend:
Fetches all resellers from the Reseller collection.
Frontend: Displays reseller information.
D. User/Agency Management
Actors: Resellers

Use Case: Create Agency
Purpose: Add users/agencies under a reseller.
Flow:
Frontend: Reseller enters agency details (name, email, password).
Backend:
Verifies reseller role.
Hashes the password and saves the agency in the User collection.
Frontend: Displays the new agency in the reseller dashboard.
Use Case: Assign Keys to Agencies
Purpose: Distribute keys to agencies for their usage.
Flow:
Frontend: Reseller selects keys to assign to an agency.
Backend:
Updates the Key document to associate it with the agency.
Frontend: Updates the agency dashboard.
E. Monitoring and Error Handling
Purpose: Track API activity and handle errors consistently.
Flow:
Backend:
Logs API requests, responses, and errors using logger.js (integrated with Datadog for real-time monitoring).
Uses middleware to format error responses and return appropriate HTTP codes.
Frontend:
Displays user-friendly error messages.
2. Backend Flow
Request-Response Lifecycle
Request:

The client (frontend or external tool) sends an HTTP request to an API endpoint.
Example: POST /api/auth/login with email and password.
Middleware:

Executes global middleware (express.json, helmet, etc.).
Role-specific middleware verifies the user's role and token (e.g., authenticate, authorizeAdmin).
Controllers:

Business logic is executed based on the endpoint.
Example: The login function in authController.js validates credentials and issues a token.
Models:

Data is fetched, updated, or created using Mongoose models (e.g., User, Key, Reseller).
Response:

The controller sends an appropriate response back to the client (e.g., 200 OK, 401 Unauthorized).
Backend Data Flow
Authentication:
User logs in → Backend verifies credentials → Issues token.
Admin Actions:
Admin creates reseller → Reseller added to database → Displayed in admin dashboard.
Reseller Actions:
Reseller creates agency → Agency added to database → Keys assigned to agency.
User Actions:
User views keys → Backend fetches key data → Updates usage limits.
Interconnected Systems
Frontend:
Sends API requests and receives responses to update dashboards.
Backend:
Processes requests, executes business logic, and interacts with the database.
Database:
Stores relationships between users, resellers, agencies, and keys.
3. Example Backend Use Case: Creating a Key
Frontend:
Admin inputs validity and usageLimit → API call to POST /api/keys.
Middleware:
Verifies admin role using authorizeAdmin.
Controller:
createKey in keyController.js generates a key and saves it in the Key model.
Database:
A new document is added to the Key collection.
Response:
The created key is returned to the frontend.
This backend structure ensures:

Role-based security: Only authorized users can access specific endpoints.
Scalability: Well-structured models and modular controllers.
Monitoring: Logging with Datadog for performance and error tracking.
Let me know if you'd like further details on specific flows or modules! 🚀