echo "Show All"
ls -lah

echo "Show PWD"
pwd 

echo "Create DB"
psql -U postgres -f ./docker-entrypoint-initdb.d/init.sql