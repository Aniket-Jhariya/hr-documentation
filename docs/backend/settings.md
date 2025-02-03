---
sidebar_position: 3
---

# Settings

## Base Configuration
Defines core configurations for the Django project.

### Fields:
- `BASE_DIR` (Path): Base directory of the project.
- `DEBUG` (bool): Debug mode status.
- `DOMAIN` (str): The application's domain based on the environment.

---

## Security Settings
Defines security-related configurations.

### Fields:
- `SECRET_KEY` (str): Secret key for Django security.
- `ALLOWED_HOSTS` (list): List of allowed hosts.
- `CSRF_TRUSTED_ORIGINS` (list): List of trusted CSRF origins.

---

## Email Configuration
Defines settings for sending emails.

### Fields:
- `EMAIL_BACKEND` (str): Backend for sending emails.
- `EMAIL_HOST` (str): SMTP host.
- `EMAIL_PORT` (int): SMTP port.
- `EMAIL_HOST_USER` (str): SMTP user name.
- `EMAIL_HOST_PASSWORD` (str): SMTP password.
- `DEFAULT_FROM_EMAIL` (str): Default email sender address.

---

## Installed Apps
Lists all installed Django apps.

### Fields:
- Includes built-in Django apps and custom applications like `accounts`, `job`, `resume_parser`, `candidates`, etc.

---

## Middleware
Defines middleware for request and response processing.

### Fields:
- Includes security, authentication, session, and CORS middleware.

---

## Templates
Defines template-related configurations.

### Fields:
- `BACKEND` (str): Template engine used.
- `DIRS` (list): List of template directories.
- `OPTIONS` (dict): Context processors for templates.

---

## REST Framework Settings
Configures Django REST framework.

### Fields:
- `DEFAULT_AUTHENTICATION_CLASSES`: Uses JWT authentication.
- `DEFAULT_THROTTLE_CLASSES`: Implements request throttling.
- `DEFAULT_FILTER_BACKENDS`: Uses Django filter backend.
- `DEFAULT_PAGINATION_CLASS`: Defines pagination settings.

---

## JWT Authentication
Defines settings for Simple JWT authentication.

### Fields:
- `ACCESS_TOKEN_LIFETIME` (timedelta): Expiry duration of access tokens.
- `REFRESH_TOKEN_LIFETIME` (timedelta): Expiry duration of refresh tokens.
- `AUTH_HEADER_TYPES` (tuple): Authorization header type.

---

## Database Configuration
Defines database settings.

### Fields:
- `ENGINE` (str): Database backend.
- `NAME` (str): Database name.
- `USER` (str): Database user.
- `PASSWORD` (str): Database password.
- `HOST` (str): Database host.
- `PORT` (str): Database port.

---

## Logging Configuration
Defines logging settings for different modules.

### Fields:
- Loggers for `django`, `celery`, `resume_parser`, `candidates`, `job`, etc.
- `LOGGING`: Specifies log handlers and formatters.

---

## Static and Media Files
Defines settings for static and media file storage.

### Fields:
- `STATIC_URL` (str): URL path for static files.
- `STATIC_ROOT` (Path): Root directory for collected static files.
- `MEDIA_URL` (str): URL path for media files.
- `MEDIA_ROOT` (Path): Directory for media file storage.

---

## AWS S3 Storage
Configures AWS S3 for static and media file storage.

### Fields:
- `AWS_ACCESS_KEY_ID` (str): AWS access key.
- `AWS_SECRET_ACCESS_KEY` (str): AWS secret key.
- `AWS_STORAGE_BUCKET_NAME` (str): S3 bucket name.

---

## Caching Configuration
Defines caching backend settings.

### Fields:
- `CACHES`: Uses Redis as cache backend.
- `KEY_PREFIX` (str): Cache key prefix.

---

## Celery Configuration
Defines settings for Celery task queue.

### Fields:
- `CELERY_BROKER_URL` (str): Redis URL for Celery broker.
- `CELERY_RESULT_BACKEND` (str): Redis URL for Celery results.
- `CELERY_TASK_SERIALIZER` (str): Serialization format.

---

## Encryption Key
Stores encryption key for secure data handling.

### Fields:
- `ENCRYPTION_KEY` (str): Encryption key fetched from environment variables.

