## Routes

### User Routes

- **POST /api/auth/register**
    - Description: Register a new user
    - Request Body: 
        ```json
        {
            "email": "string",
            "password": "string",
            "name": "string",
            "age": "number",
            "gender": "string",
            "phoneNumber": "string",
            "universityEnrollmentId": "string",
            "pgAddress": "string"
        }
        ```
    - Response: 
        ```json
        {
            "user": {
                "id": "number",
                "email": "string",
                "name": "string",
                "age": "number",
                "gender": "string",
                "phoneNumber": "string",
                "universityEnrollmentId": "string",
                "pgAddress": "string"
            }
        }
        ```

- **POST /api/auth/login**
    - Description: Login a user
    - Request Body: 
        ```json
        {
            "email": "string",
            "password": "string"
        }
        ```
    - Response: 
        ```json
        {
            "token": "string"
        }
        ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_NAME=yukkta_dev_database
DB_PORT=5432
JWT_SECRET=yukktasecret
PORT=5000
```
