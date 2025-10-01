# Quick Start Guide

Get up and running with Kendy MCP Assistant in minutes!

## Installation

### 1. Clone and Install

```bash
git clone https://github.com/phuhokhongtien/kendy-mcp-assistant.git
cd kendy-mcp-assistant
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your settings (defaults work for development).

### 3. Build the Project

```bash
npm run build
```

### 4. Run the Application

```bash
npm start
```

You should see:

```
Kendy MCP Assistant v0.1.0
Initializing...
```

## Development Mode

For development with hot-reload:

```bash
npm run dev
```

## Verify Installation

Run the following commands to verify everything is set up correctly:

```bash
# Check TypeScript compilation
npm run type-check

# Run linting
npm run lint

# Check code formatting
npm run format:check

# Run tests
npm test

# Build the project
npm run build
```

All commands should complete successfully!

## Project Status

This is an **alpha version (0.1.0)** with foundational structure in place. Core MCP integration and features are coming soon.

### What's Available

- ✅ Project structure and directory organization
- ✅ TypeScript configuration
- ✅ Build and development tooling
- ✅ Code quality tools (ESLint, Prettier)
- ✅ Testing framework (Jest)
- ✅ Documentation structure

### What's Coming

- 🚧 Core MCP integration
- 🚧 UI components
- 🚧 API implementation
- 🚧 Authentication system
- 🚧 Database integration

## Next Steps

1. **Explore the Code**: Check out `src/` and `backend/` directories
2. **Read the Docs**: Browse the `/docs` directory for detailed documentation
3. **Contribute**: See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines
4. **Stay Updated**: Watch the repository for updates

## Need Help?

- 📖 [Full Documentation](../README.md)
- 🔧 [Development Setup Guide](./development-setup.md)
- 💬 [GitHub Discussions](https://github.com/phuhokhongtien/kendy-mcp-assistant/discussions)
- 🐛 [Report Issues](https://github.com/phuhokhongtien/kendy-mcp-assistant/issues)

## Example: Running Tests

```bash
# Create a simple test file
mkdir -p src/__tests__
cat > src/__tests__/example.test.ts << 'EOF'
describe('Example Test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
EOF

# Run the test
npm test
```

## Example: Building and Running

```bash
# Build the project
npm run build

# Run the built application
node dist/src/index.js

# Run the backend server
node dist/backend/server.js
```

Happy coding! 🚀
