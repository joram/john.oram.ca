setup:
	cd app; npm install

run:
	cd app; npm start

audit:
	cd app; npm audit --production

deploy:
	cd app; yes | npx browserslist@latest --update-db
	cd app; npm run build
	cd app; AWS_PROFILE=personal aws s3 sync build/ s3://john.oram.ca/ --exclude "*photos*"
	cd app; AWS_PROFILE=personal aws cloudfront create-invalidation --distribution-id=E8AZBRUVVXGYV --paths=/*

deploy_all:
	cd app; npm run build
	cd app; aws s3 sync build/ s3://john.oram.ca/
	cd app; aws cloudfront create-invalidation --distribution-id=E8AZBRUVVXGYV --paths=/index.html

deploy-docker:
	./deploy.sh

logs-build:
	docker-compose -f docker-compose.prod.yml logs --tail=100 web

logs-runtime:
	docker-compose -f docker-compose.prod.yml logs -f web