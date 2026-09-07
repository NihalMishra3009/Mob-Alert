# ==========================================
# Build Stage
# ==========================================
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Copy Maven wrapper & pom.xml first for layer caching
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./

RUN chmod +x mvnw
# Download dependencies in an isolated step
RUN ./mvnw dependency:go-offline -B || true

# Copy source code
COPY src ./src

# Build production artifact without running integration tests requiring a live DB
RUN ./mvnw clean package -DskipTests -B

# ==========================================
# Runtime Stage
# ==========================================
FROM eclipse-temurin:21-jre-alpine AS runner

# Add non-root system user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy built JAR from builder
COPY --from=builder /app/target/*.jar app.jar

# Set ownership
RUN chown -R appuser:appgroup /app

USER appuser

# Environment defaults
ENV PORT=8080 \
    JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0 -Djava.security.egd=file:/dev/./urandom"

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
