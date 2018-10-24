FROM java:8-jre
WORKDIR usr/src
ENV MYSQL_DATABASE=movieDb
ENV MYSQL_USER=app_root
ENV MYSQL_PASSWORD=root123
ENV MYSQL_CI_URL=jdbc:mysql://localhost:3306/movieDb
ADD ./target/MovieCruiserService-0.0.1-SNAPSHOT.jar /usr/src/MovieCruiserService-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-Xmx200m", "-jar", "/usr/src/MovieCruiserService-0.0.1-SNAPSHOT.jar"]
