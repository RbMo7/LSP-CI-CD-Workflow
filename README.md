# Hello World React App - DevOps CI/CD Demo 🚀

[![Build & Test](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/build.yml/badge.svg)](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/build.yml)
[![Release](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/release.yml/badge.svg)](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/release.yml)

This is a simple React application created for **LSPP 2025 Assignment 3: The Release Architect**. This project demonstrates professional-grade CI/CD with Docker multi-stage builds, security scanning, automated releases, and container registry integration.

## 🎯 Project Overview

This application showcases:
- ✅ **Docker containerization** with multi-stage builds
- ✅ **GitHub Actions CI/CD** with automated testing and building  
- ✅ **Automated testing** with comprehensive test coverage
- ✅ **Build verification** ensuring reliable deployments

## 🏗️ Architecture

### CI/CD Pipeline
Our GitHub Actions workflow (`build.yml`) implements a two-job pipeline:

1. **test-job**: Runs all tests and verifies the application builds successfully
2. **build-job**: Creates a Docker image (only runs if tests pass, using `needs: test-job`)

### Docker Strategy
The `Dockerfile` uses Node.js Alpine for a lightweight, production-ready container that:
- Installs dependencies efficiently with `npm ci`
- Builds the React app for production
- Serves the static files using the `serve` package

## 🚀 Release Strategy & Versioning

### Semantic Versioning
This project follows [Semantic Versioning](https://semver.org/) (SemVer):
- **MAJOR.MINOR.PATCH** (e.g., v1.2.3)
- **MAJOR**: Breaking changes that require user action
- **MINOR**: New features that are backward compatible  
- **PATCH**: Bug fixes and small improvements
- **Pre-release**: Beta versions (e.g., v1.1.0-beta, v2.0.0-rc1)

### Automated Release Process
Our release pipeline triggers on Git tags starting with `v`:
1. **Multi-Stage Docker Build**: Creates optimized, secure production images
2. **Security Scanning**: Scans images for vulnerabilities using Trivy
3. **Container Registry**: Pushes validated images to GitHub Container Registry (ghcr.io)
4. **GitHub Releases**: Automatically creates releases with generated changelogs

### How to Create a Release
```bash
# Create and push a new version tag
git tag v1.0.0
git push origin v1.0.0

# For pre-release versions
git tag v1.1.0-beta
git push origin v1.1.0-beta
```

## 🚀 Quick Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
