# Multi-stage build for optimized production image

# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for building)
RUN npm install

# Copy source code
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Production stage  
FROM node:18-alpine AS production

# Install curl for health checks and create non-root user for security
RUN apk add --no-cache curl && \
    addgroup -g 1001 -S nodejs && \
    adduser -S reactuser -u 1001

# Set the working directory
WORKDIR /app

# Install serve globally for serving static files
RUN npm install -g serve

# Copy only the built application from builder stage
COPY --from=builder /app/build ./build

# Change ownership to non-root user
RUN chown -R reactuser:nodejs /app

# Switch to non-root user
USER reactuser

# Expose the port
EXPOSE 3000

# Health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000 || exit 1

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]