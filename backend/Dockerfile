# Use Java 17 runtime
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy the JAR file
COPY target/*.jar app.jar

# Application port
EXPOSE 8080

# Start the application
ENTRYPOINT ["java","-jar","app.jar"]