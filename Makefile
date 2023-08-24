setup:
	cd app; npm install

run:
	cd app; npm start

audit:
	cd app; npm audit --production

deploy:
	cd app; npm run build
	cd app; aws s3 sync build/ s3://john.oram.ca/ --exclude "*photos*"
	cd app; aws cloudfront create-invalidation --distribution-id=E8AZBRUVVXGYV --paths=/index.html

deploy_all:
	cd app; npm run build
	cd app; aws s3 sync build/ s3://john.oram.ca/
	cd app; aws cloudfront create-invalidation --distribution-id=E8AZBRUVVXGYV --paths=/index.html