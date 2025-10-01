# Development Setup Guide

This guide will help you set up your development environment for Kendy MCP Assistant.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Tools

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** for version control
- A code editor (VS Code recommended)

### Optional Tools (for advanced development)

- **Docker** (v20+ recommended) - For containerized development and deployment
- **Docker Compose** (v2+) - For multi-container orchestration
- **React Native CLI** - If working on mobile components in the future
- **TypeScript** (global installation) - For CLI tools and type checking

### VS Code Extensions (Recommended)

If using VS Code, install these extensions for better development experience:

- **ESLint** - JavaScript and TypeScript linting
- **Prettier** - Code formatting
- **TypeScript and JavaScript Language Features** (built-in)
- **Jest** - Test running and debugging
- **GitLens** - Enhanced Git capabilities
- **Docker** - Docker container management

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/phuhokhongtien/kendy-mcp-assistant.git
cd kendy-mcp-assistant
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required development dependencies including:

- TypeScript
- ESLint and Prettier for code quality
- Jest for testing
- tsx for development

### 3. Environment Configuration

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` with your local configuration settings.

## Development Workflow

### Available Scripts

#### Development

```bash
npm run dev
```

Starts the development server with hot-reload using tsx watch mode.

#### Building

```bash
npm run build
```

Compiles TypeScript code to JavaScript in the `dist/` directory.

#### Testing

```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

#### Code Quality

```bash
npm run lint          # Check for linting issues
npm run lint:fix      # Automatically fix linting issues
npm run format        # Format code with Prettier
npm run format:check  # Check if code is formatted
npm run type-check    # Run TypeScript type checking
```

#### Cleaning

```bash
npm run clean         # Remove build artifacts
```

## Project Structure

```
kendy-mcp-assistant/
├── src/                    # Frontend/main source code
│   ├── components/         # Reusable UI components
│   ├── services/           # Business logic services
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   ├── hooks/              # Custom React hooks
│   ├── contexts/           # React context providers
│   └── index.ts            # Main entry point
├── backend/                # Backend services
│   ├── api/                # API routes and controllers
│   ├── models/             # Data models
│   ├── services/           # Business logic
│   ├── middleware/         # Express middleware
│   ├── config/             # Configuration files
│   ├── utils/              # Backend utilities
│   ├── tests/              # Backend tests
│   └── server.ts           # Server entry point
├── docs/                   # Documentation
│   ├── architecture/       # Architecture docs
│   ├── api/                # API documentation
│   ├── guides/             # User and developer guides
│   └── tutorials/          # Step-by-step tutorials
└── scripts/                # Utility scripts
```

## Development Best Practices

### Code Style

- Follow the ESLint and Prettier configurations
- Use TypeScript for type safety
- Write self-documenting code with clear naming
- Add comments for complex logic
- Keep functions small and focused

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests and linting: `npm run lint && npm test`
4. Commit with conventional commits format
5. Push and create a pull request

### Testing

- Write tests for new features
- Maintain test coverage
- Test edge cases
- Run tests before committing

### Type Safety

- Use TypeScript strict mode
- Define interfaces for data structures
- Avoid `any` type when possible
- Use type guards for runtime checks

## IDE Setup

### VS Code Recommended Extensions

- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Jest Runner
- GitLens

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Troubleshooting

### Module Resolution Issues

If you encounter module resolution issues, try:

```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Run type checking explicitly:

```bash
npm run type-check
```

### Build Failures

Check that all dependencies are installed:

```bash
npm install
npm run build
```

## Next Steps

- Read the [Architecture Guide](../architecture/README.md)
- Check the [API Documentation](../api/README.md)
- Review the [Contributing Guide](../../CONTRIBUTING.md)
- Join the [GitHub Discussions](https://github.com/phuhokhongtien/kendy-mcp-assistant/discussions)

## Getting Help

If you encounter issues:

1. Check this guide and other documentation
2. Search existing GitHub issues
3. Ask in GitHub Discussions
4. Create a new issue with detailed information
