# Hello World CI/CD Pipeline 🚀

[![Build & Test](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/build.yml/badge.svg)](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/build.yml)
[![Release](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/release.yml/badge.svg)](https://github.com/RbMo7/LSP-CI-CD-Workflow/actions/workflows/release.yml)
[![Docker Image](https://img.shields.io/badge/docker-ghcr.io-blue)](https://github.com/RbMo7/LSP-CI-CD-Workflow/pkgs/container/lsp-ci-cd-workflow)
[![Latest Release](https://img.shields.io/github/v/release/RbMo7/LSP-CI-CD-Workflow)](https://github.com/RbMo7/LSP-CI-CD-Workflow/releases/latest)
[![Docker Image Size](https://img.shields.io/docker/image-size/ghcr.io/rbmo7/lsp-ci-cd-workflow/latest)](https://github.com/RbMo7/LSP-CI-CD-Workflow/pkgs/container/lsp-ci-cd-workflow)
[![License](https://img.shields.io/github/license/RbMo7/LSP-CI-CD-Workflow)](LICENSE)

A React app that showcases modern DevOps practices. Built this as part of my learning journey into CI/CD, containerization, and automated deployments. What started as a simple "Hello World" turned into a full production-ready pipeline!

## 🎯 What I Built

This project evolved through three phases:

**Phase 1 - Basic CI/CD**
Got the fundamentals down - automated testing, Docker builds, and basic pipeline setup. Nothing fancy, but solid foundations.

**Phase 2 - Debugging Skills** 
Learned the hard way how to read error logs and fix broken pipelines. Turns out most of DevOps is just being good at debugging!

**Phase 3 - Production Ready**
Now we're talking! Multi-stage Docker builds, security scanning, automated releases, and proper versioning. This actually feels like something you'd see in a real company.

## 🏗️ How It Works

### The Pipeline
Two main workflows handle different scenarios:

**build.yml** - Runs on every push
- Tests the code (React Testing Library)
- Builds a Docker image if tests pass
- Basic but reliable - catches issues early

**release.yml** - Runs when I tag a version
- Multi-stage Docker build (way smaller images)
- Security scanning with Trivy
- Pushes to GitHub Container Registry
- Creates GitHub releases automatically

### Docker Setup
Started with a basic Dockerfile, then evolved it:
- **Before**: Single stage, runs as root, ~200MB image
- **After**: Multi-stage build, non-root user, health checks, ~50MB image

The difference is night and day - both in size and security.

## 🚀 Releases & Versioning

### How I Handle Versions
Using semantic versioning because it just makes sense:
- `v1.0.0` - Major releases (breaking changes)
- `v1.1.0` - New features 
- `v1.0.1` - Bug fixes
- `v1.1.0-beta` - Testing new stuff

### Release Process
Super simple now:
```bash
git tag v1.0.0
git push origin v1.0.0
```

That's it! The pipeline handles:
- Building optimized Docker images
- Running security scans (Trivy catches vulnerabilities)  
- Pushing to container registry
- Creating GitHub releases with changelogs

Took me a while to get this working, but now releases are completely automated.

## 🚀 Try It Out

### Run Locally
```bash
npm install
npm start
```
Opens at http://localhost:3000

### Run with Docker
```bash
# Use the latest release
docker run -p 3000:3000 ghcr.io/rbmo7/lsp-ci-cd-workflow:latest
```

### Development
```bash
npm test          # Run tests
npm run build     # Production build
```

Pretty standard React setup, nothing crazy here.

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
