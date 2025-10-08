# DEBUGGING.md - Assignment 2: The Debugging Detective 🕵️

## Part A: Analyzing the Working Pipeline

### How Our Working Pipeline Works

Our GitHub Actions workflow in `.github/workflows/build.yml` implements a **two-job CI/CD pipeline** that demonstrates proper dependency management and build verification.

#### Pipeline Structure:

**1. test-job (Testing & Verification)**
- **Trigger**: Runs on every push to `main` branch and on pull requests
- **Environment**: `ubuntu-latest` 
- **Purpose**: Validates code quality and functionality before allowing builds
- **Steps**:
  - Checkout code from repository
  - Setup Node.js 18 with npm caching for faster builds
  - Install dependencies using `npm install`
  - Run comprehensive tests with coverage reporting (`npm test -- --coverage --watchAll=false`)
  - Test production build process (`npm run build`)
  - Verify application can be packaged successfully

**2. build-job (Docker Image Creation)**
- **Environment**: `ubuntu-latest`
- **Purpose**: Creates a production-ready Docker image
- **Dependency**: `needs: test-job` - **This is the critical keyword that creates job dependencies**
- **Steps**:
  - Checkout code from repository
  - Setup Docker Buildx for advanced build capabilities
  - Build Docker image using our Dockerfile (`docker build -t hello-world-app:latest .`)
  - Verify the image was created successfully
  - Display image information for confirmation

#### The `needs:` Keyword Explained

The `needs: test-job` keyword is a **core CI concept** that:
- **Creates Dependencies**: Ensures `build-job` only runs if `test-job` completes successfully
- **Prevents Waste**: Avoids building Docker images from broken code
- **Enforces Quality Gates**: Implements the principle "test first, build second"
- **Saves Resources**: Failed tests stop the pipeline early, saving compute time and costs
- **Mirrors Production**: Reflects real-world practices where builds should only happen after validation

#### Workflow Trigger
- **Event**: `on: push: branches: [main]` and `on: pull_request: branches: [main]`
- **Purpose**: Automatically validates every code change
- **Behavior**: Runs the complete pipeline on every commit to ensure continuous integration

This pipeline demonstrates **professional CI/CD practices** by ensuring code quality before resource-intensive build operations.

---

## Part B: The "Break and Fix" Challenge

*[This section will be completed after intentionally breaking and fixing the pipeline]*