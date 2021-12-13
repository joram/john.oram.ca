run:
	cd app; yarn start

deploy:
	source .env; cd app; ./scripts/deploy