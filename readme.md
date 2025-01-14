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

### Medicine Order Routes

- **POST /api/medicine-order/upload-prescription**
    - Description: Upload a prescription
    - Request Body:
        ```json
        {
            "userId": "number",
            "file": "file"
        }
        ```
    - Response:
        ```json
        {
            "message": "string",
            "prescription": {
                "id": "number",
                "user_id": "number",
                "file_name": "string",
                "file_path": "string",
                "upload_date": "string"
            }
        }
        ```

- **GET /api/medicine-order/check-prescriptions**
    - Description: Check uploaded prescriptions
    - Response:
        ```json
        {
            "prescriptions": [
                {
                    "id": "number",
                    "user_id": "number",
                    "file_name": "string",
                    "file_path": "string",
                    "upload_date": "string"
                }
            ]
        }
        ```

### Consultation Request Routes

- **POST /api/consultation/user**
    - Description: Request a consultation
    - Request Body:
        ```json
        {
            "userId": "number",
            "difficulty": "string"
        }
        ```
    - Response:
        ```json
        {
            "id": "number",
            "user_id": "number",
            "difficulty": "string"
        }
        ```

- **GET /api/consultation/admin**
    - Description: Get all consultation requests
    - Response:
        ```json
        {
            "consultations": [
                {
                    "id": "number",
                    "user_id": "number",
                    "difficulty": "string"
                }
            ]
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
