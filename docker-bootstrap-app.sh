#!/bin/sh
# ENVIRONEMTN from docker-compose.yaml doesn't get through to subprocesses
# Need to explicit pass DATABASE_URL here, otherwise migration doesn't work
# Run migrations
DATABASE_URL="postgresql://shatynska:shatynska@185.233.36.64:5432/appdb?sslmode=disable" npx prisma migrate deploy
# start app
DATABASE_URL="postgresql://shatynska:shatynska@185.233.36.64:5432/workler?sslmode=disable" node server.js