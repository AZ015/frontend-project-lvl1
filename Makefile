install:
	npm install

start-calc:
	node bin/brain-calc.js

start-even:
	node bin/brain-even.js

start-gcd:
	node bin/brain-gcd.js

start-prime:
	node bin/brain-prime.js

start-progression:
	node bin/brain-progression.js

lint:
	npx eslint .
	
publish:
	npm publish --dry-run