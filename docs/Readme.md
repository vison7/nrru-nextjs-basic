# NextJS Basic Training
## Course Detail


---

## Git 
`git -v`

`git clone git@github.com:vison7/nrru-nextjs-tailwind-basic.git .`

## Docker Postgres
`docker run --name mypostgres -e POSTGRES_PASSWORD=root -d postgres`

> docker run -d \
	--name my-postgres \
    -p 5432:5432 \
	-e POSTGRES_PASSWORD=root \
	-e PGDATA=/var/lib/postgresql/data/pgdata \
	-v ./data-postgres:/var/lib/postgresql/data \
	postgres


`docker run -d --name mypostgres -p 5432:5432 -e POSTGRES_PASSWORD=root postgres`

## Rebuild Docker
`docker-compose up -d --force-recreate --no-deps --build $service`

## NextJS install


Install lib
`npm install --save @types/bcrypt`

`npm install --save @types/jsonwebtoken`

## PostgreSQL

https://www.postgresql.org

Install postgres libraly

https://node-postgres.com/

`npm i --save-dev @types/pg`

## Tailwind
CSS Framework

https://tailwindcss.com/

Document
https://tailwindcss.com/docs/

UI Block
https://tailwindcss.com/plus/ui-blocks

#### Using React
`npm install @headlessui/react @heroicons/react`


npm install @headlessui/react @heroicons/react

