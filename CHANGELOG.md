# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-10-01

### Added

#### Project Structure

- Created comprehensive directory structure for `src/`, `backend/`, `docs/`, and `scripts/`
- Added subdirectories for organized code:
  - `src/`: components, services, utils, types, constants, hooks, contexts
  - `backend/`: api, models, services, middleware, config, utils, tests
  - `docs/`: architecture, api, guides, tutorials
- Added `.gitkeep` files to ensure empty directories are tracked

#### Configuration Files

- `package.json` - Project metadata and npm scripts
- `tsconfig.json` - TypeScript configuration for the entire project
- `backend/tsconfig.json` - Backend-specific TypeScript configuration
- `.eslintrc.json` - ESLint configuration for code linting
- `.prettierrc` - Prettier configuration for code formatting
- `.prettierignore` - Files to ignore in Prettier formatting
- `jest.config.js` - Jest configuration for testing
- `.env.example` - Example environment variables

#### Source Code

- `src/index.ts` - Main application entry point
- `backend/server.ts` - Backend server entry point

#### Documentation

- `docs/architecture/overview.md` - System architecture overview
- `docs/guides/development-setup.md` - Comprehensive development setup guide
- `docs/guides/quick-start.md` - Quick start guide for new users
- `docs/architecture/README.md` - Architecture documentation index
- `docs/api/README.md` - API documentation index
- `docs/guides/README.md` - Guides documentation index
- `docs/tutorials/README.md` - Tutorials documentation index

#### Development Tools

- TypeScript compilation with strict mode enabled
- ESLint for code quality and standards enforcement
- Prettier for consistent code formatting
- Jest for unit and integration testing
- tsx for development with hot-reload
- Path aliases for cleaner imports

#### NPM Scripts

- `npm start` - Run the compiled application
- `npm run dev` - Start development server with hot-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests
- `npm run lint` - Check for linting issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

### Changed

- Updated README.md roadmap to reflect completed foundation tasks
- Configured TypeScript to support both `src/` and `backend/` directories

### Fixed

- Resolved TypeScript configuration issues with rootDir
- Fixed ESLint configuration to properly lint both src and backend code
- Removed deprecated Prettier option `jsxBracketSameLine`
- Fixed console.log linting warnings in entry point files
- Configured Jest to pass with no tests during foundation phase

### Developer Notes

This release establishes the foundation for the Kendy MCP Assistant project. All core development tools are configured and working:

- ✅ TypeScript compilation successful
- ✅ ESLint passing with no errors
- ✅ Prettier formatting applied to all files
- ✅ Jest testing framework configured
- ✅ Build artifacts properly excluded from git
- ✅ Entry points compile and run successfully

### Next Steps

The following features are planned for upcoming releases:

- Core MCP (Model Context Protocol) integration
- Basic UI components
- RESTful API implementation
- Authentication and authorization
- Database integration
- Real-time communication features

---

## [Unreleased]

### Planned

- MCP protocol integration
- Frontend framework selection and setup
- Backend API framework implementation
- Database schema and ORM setup
- Authentication system
- Basic UI components
- API endpoints

[0.1.0]: https://github.com/phuhokhongtien/kendy-mcp-assistant/releases/tag/v0.1.0
