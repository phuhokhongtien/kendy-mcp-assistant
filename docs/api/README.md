# API Documentation

This directory contains API documentation for the Kendy MCP Assistant.

## Contents

- API endpoints and methods
- Request/response examples
- Authentication requirements
- Error codes and handling
- Rate limiting information
- Versioning strategy

## API Documentation Format

Use the following structure for API endpoints:

```markdown
## [METHOD] /endpoint/path

Description of what this endpoint does.

### Request

**Headers:**
- Authorization: Bearer {token}
- Content-Type: application/json

**Body:**
```json
{
  "field": "value"
}
```

### Response

**Success (200 OK):**
```json
{
  "status": "success",
  "data": {}
}
```

**Error (4xx/5xx):**
```json
{
  "status": "error",
  "message": "Error description"
}
```
```

## Tools

Consider using tools like Swagger/OpenAPI for automated API documentation.
