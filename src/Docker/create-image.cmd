docker build --no-cache -f SQL\Dockerfile.PostgreSql -t uchetmedosmotrov4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t uchetmedosmotrov4/app ../..
