setup:
	cd site; npm install

run:
	cd site; npm run dev

audit:
	cd site; npm audit --production

deploy:
	cd site; npm run build
	AWS_PROFILE=personal aws s3 sync site/dist/ s3://john.oram.ca/ --exclude "*photos*" --delete
	AWS_PROFILE=personal aws cloudfront create-invalidation --distribution-id=E8AZBRUVVXGYV --paths=/*

deploy_all:
	cd site; npm run build
	AWS_PROFILE=personal aws s3 sync site/dist/ s3://john.oram.ca/ --delete
	AWS_PROFILE=personal aws cloudfront create-invalidation --distribution-id=E8AZBRUVVXGYV --paths=/*

deploy-docker:
	./deploy.sh

logs-build:
	docker-compose -f docker-compose.prod.yml logs --tail=100 web

logs-runtime:
	docker-compose -f docker-compose.prod.yml logs -f web