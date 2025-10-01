# Contributing to Kendy MCP Assistant

Thank you for your interest in contributing to Kendy MCP Assistant! We appreciate your time and effort in helping improve this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Community](#community)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## 🚀 Getting Started

### Prerequisites

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/kendy-mcp-assistant.git
   cd kendy-mcp-assistant
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/phuhokhongtien/kendy-mcp-assistant.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

### Setting Up Your Development Environment

1. Create a new branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes following our coding standards
3. Test your changes thoroughly
4. Commit your changes with clear commit messages

## 🤝 How to Contribute

There are many ways to contribute to Kendy MCP Assistant:

### Reporting Bugs

- Check if the bug has already been reported in [Issues](https://github.com/phuhokhongtien/kendy-mcp-assistant/issues)
- If not, create a new issue with a clear title and description
- Include steps to reproduce, expected behavior, and actual behavior
- Add relevant labels and provide system information

### Suggesting Enhancements

- Open an issue with the `enhancement` label
- Clearly describe the enhancement and its benefits
- Provide examples or mockups if applicable
- Explain why this enhancement would be useful

### Contributing Code

1. Find an issue to work on or create one
2. Comment on the issue to let others know you're working on it
3. Fork the repository and create a feature branch
4. Write clean, maintainable code
5. Add or update tests as necessary
6. Update documentation to reflect your changes
7. Submit a pull request

### Improving Documentation

- Documentation improvements are always welcome
- Check for typos, unclear explanations, or missing information
- Update examples and tutorials as needed
- Submit PRs for documentation changes

## 🔧 Development Workflow

### Branch Naming Convention

Use descriptive branch names:
- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation changes
- `refactor/description` - for code refactoring
- `test/description` - for test improvements

### Testing

Before submitting your contribution:

1. Run the test suite:
   ```bash
   npm test
   ```
2. Run linting:
   ```bash
   npm run lint
   ```
3. Check code formatting:
   ```bash
   npm run format
   ```
4. Ensure all tests pass and code meets quality standards

### Building

Test your changes with a production build:

```bash
npm run build
```

## 📝 Coding Standards

### General Principles

- Write clean, readable, and maintainable code
- Follow the DRY (Don't Repeat Yourself) principle
- Keep functions small and focused
- Use meaningful variable and function names
- Comment complex logic but write self-documenting code

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow ESLint configuration
- Use async/await over callbacks
- Prefer const over let, avoid var
- Use template literals for string interpolation

### Code Style

- Use 2 spaces for indentation
- Use semicolons consistently
- Use single quotes for strings (except in JSX)
- Maximum line length: 100 characters
- Add trailing commas in multi-line objects/arrays

### File Organization

- One component per file
- Group related files in directories
- Use index files for clean imports
- Keep file names descriptive and consistent

## 💬 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
feat(auth): add user authentication system

Implement JWT-based authentication with refresh tokens.
Includes login, logout, and token validation.

Closes #123
```

```bash
fix(api): resolve null pointer exception in user service

Add null checks before accessing user properties.
```

## 🔄 Pull Request Process

### Before Submitting

1. Update your branch with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. Ensure all tests pass
3. Update documentation if needed
4. Review your own code changes

### Submitting a Pull Request

1. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Go to the repository on GitHub and create a Pull Request
3. Fill out the PR template completely
4. Link related issues using keywords (Fixes #123, Closes #456)
5. Add relevant labels
6. Request review from maintainers

### PR Title Format

Use the same format as commit messages:
```
feat: add new authentication feature
fix: resolve memory leak in data processing
docs: update installation instructions
```

### During Review

- Respond to feedback promptly and professionally
- Make requested changes in new commits
- Update the PR description if scope changes
- Mark conversations as resolved when addressed

### After Approval

- Maintainers will merge your PR
- Your contribution will be included in the next release
- You'll be added to the contributors list

## 🐛 Issue Reporting

### Bug Reports

When reporting bugs, include:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, etc.)
- Screenshots or error logs if applicable
- Possible solutions if you have ideas

### Feature Requests

When suggesting features, include:

- Clear use case and benefits
- Proposed implementation approach
- Any alternatives considered
- Mockups or examples if relevant

## 👥 Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and discussions
- **Pull Requests**: Code contributions and reviews

### Getting Help

- Check existing documentation first
- Search closed issues for similar problems
- Ask in GitHub Discussions for general questions
- Be patient and respectful when asking for help

## 🙏 Recognition

Contributors are recognized in several ways:

- Listed in the project's contributors page
- Mentioned in release notes for significant contributions
- Invited to become maintainers for consistent, quality contributions

## 📚 Additional Resources

- [Project README](README.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

---

Thank you for contributing to Kendy MCP Assistant! Your efforts help make this project better for everyone.
