.PHONY: all build serve clean
	
all: build
	
build: clean
	docker buildx build . --target build --output type=local,dest=./_site

serve:
	docker compose up --build

clean:
	rm -rf _site
	
fmt:
	npm run format:fix

lint:
	npm run lint:fix

spellcheck:
	npm run spellcheck:staged
