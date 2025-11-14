# Contributing Guide

Thank you for considering contributing! This document provides guidelines for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Commit Conventions](#commit-conventions)

## Code of Conduct

This project and everyone participating in it are governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report:

1. Check existing issues to avoid duplicates
2. Use the latest version of the project
3. Collect information about the bug

When creating a bug report, include:

- Use the bug report template
- Describe the expected vs actual behavior
- Provide steps to reproduce
- Include screenshots or logs if possible
- Specify your environment (OS, version, etc.)

### Suggesting Enhancements

Feature suggestions are welcome! To suggest an enhancement:

1. Use the feature request template
2. Clearly explain the problem it solves
3. Describe the proposed solution
4. Consider alternatives
5. Add mockups if possible

### Improving Documentation

Documentation improvements are always appreciated:

- Fix typos or unclear explanations
- Add examples
- Improve organization
- Translate documentation

### Contributing Code

Types of code contributions:

- Bug fixes
- New features
- Performance improvements
- Refactoring
- Tests

## Development Process

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/PROJECT_NAME.git
cd PROJECT_NAME
git remote add upstream https://github.com/ORIGINAL_OWNER/PROJECT_NAME.git
```

### 2. Setup Environment

```bash
npm install
# or
pip install -r requirements.txt
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Tests

### 4. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments when necessary
- Keep changes focused

### 5. Test Your Changes

```bash
npm test
# or
pytest
```

Ensure:
- All tests pass
- No linting errors
- Code coverage maintained

### 6. Commit Your Changes

Follow commit message conventions (see below).

```bash
git add .
git commit -m "type: description"
```

### 7. Keep Synced

```bash
git fetch upstream
git rebase upstream/main
```

### 8. Push and Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub.

## Code Standards

### JavaScript/TypeScript

- Use ES6+ features
- Follow ESLint rules
- Use meaningful variable names
- Add JSDoc comments for functions
- Prefer const over let
- Use async/await over promises

### Python

- Follow PEP 8
- Use type hints
- Write docstrings
- Use meaningful variable names
- Keep functions small and focused

### General Rules

- Write self-documenting code
- Keep functions under 50 lines
- Use descriptive names
- Avoid deep nesting
- Handle errors properly
- Write tests for new code

## Pull Request Process

### Before Submitting

- Run all tests
- Update documentation
- Add/update tests
- Follow commit conventions
- Rebase on latest main
- Resolve conflicts

### PR Description

Include in your PR:

- Description of changes
- Related issue number
- Type of change (bug fix, feature, etc.)
- Testing done
- Screenshots (if UI changes)
- Breaking changes (if any)

### Review Process

1. Automated checks must pass
2. Code review by maintainers
3. Address review comments
4. Approval required before merge
5. Squash and merge preferred

## Commit Conventions

Follow Conventional Commits format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting)
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

### Examples

```
feat(auth): add login with OAuth
fix(api): correct user validation
docs(readme): update installation steps
test(utils): add tests for helpers
```

### Best Practices

- Use imperative mood ("add" not "added")
- Keep first line under 72 characters
- Capitalize first letter
- No period at the end
- Provide context in body if needed

## Getting Help

If you need help:

- Check existing documentation
- Search closed issues
- Ask in discussions
- Tag maintainers in your PR

## Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing!
