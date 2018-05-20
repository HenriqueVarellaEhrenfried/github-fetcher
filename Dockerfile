FROM postgres:latest

COPY backend/database.sql .

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 123mudar

CMD psql -U postgres --password 123mudar -f database.sql