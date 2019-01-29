.PHONY: docker-sandbox

docker-build:
	# Build instrumentl container
	docker-compose -f docker/docker-compose.yml build

docker-run:
	# Run the container
	docker-compose -f docker/docker-compose.yml up --force-recreate
