---
sidebar_position: 2
---

# Server Gateway Interface

## ASGI Configuration

This module sets up the **Asynchronous Server Gateway Interface (ASGI)** for Django, enabling support for WebSockets and other asynchronous protocols.

- **`get_asgi_application()`**: Initializes the Django ASGI application.

### Environment Variables:
  - `DJANGO_SETTINGS_MODULE`: Sets the default settings module (`Backend.settings`).

### Protocol Routing:
  - `ProtocolTypeRouter`: Routes between different protocols (`http`, `websocket`).
  - `AuthMiddlewareStack`: Handles authentication for WebSocket connections.
  - `URLRouter`: Routes WebSocket requests based on `websocket_urlpatterns`.

---

## Celery Configuration

This module configures Celery for asynchronous task processing in the Django application.

- **`Celery('Backend')`**: Instantiates a Celery application named `Backend`.

### Configuration:
  - `app.config_from_object(settings, namespace="CELERY")`: Loads Celery settings from Django settings.
  - `app.autodiscover_tasks()`: Automatically discovers tasks from installed Django apps.

### Debug Task:
  - `debug_task(self)`: Prints the task request for debugging.

### Logging Setup:
  - `@setup_logging.connect`: Configures logging using Django's logging settings via `dictConfig`.

---

## WSGI Configuration

This module sets up the **Web Server Gateway Interface (WSGI)** for Django, enabling synchronous request handling.

- **`get_wsgi_application()`**: Initializes the Django WSGI application.

### Environment Variables:
  - `DJANGO_SETTINGS_MODULE`: Sets the default settings module (`Backend.settings`).

This configuration is used by WSGI-compatible servers like **Gunicorn** or **uWSGI** to serve the Django application.

