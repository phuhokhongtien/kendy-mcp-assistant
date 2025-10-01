# Scripts Directory

This directory contains utility scripts for development, deployment, and maintenance tasks.

## Purpose

Store automation scripts and tools here:

```
scripts/
├── setup.sh           # Initial setup script
├── deploy.sh          # Deployment script
├── seed-data.sh       # Database seeding
├── generate-docs.sh   # Documentation generation
└── cleanup.sh         # Cleanup utilities
```

## Guidelines

- Make scripts executable: `chmod +x script-name.sh`
- Add documentation at the top of each script
- Use shellcheck for bash scripts
- Handle errors gracefully
- Make scripts idempotent when possible

## Usage

Run scripts from the project root directory:

```bash
./scripts/setup.sh
./scripts/deploy.sh
```

## Creating New Scripts

When adding a new script:

1. Add a clear description at the top
2. Document required parameters
3. Include usage examples
4. Test thoroughly before committing

Add your utility scripts here as needed.
