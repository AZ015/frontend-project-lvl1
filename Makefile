install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx exlint .
	
publish:
	npm publish --dry-run