.ONESHELL:
DIST_DIRECTORY=.vuepress/dist

build:
	yarn build

add_domain:
	cd $(DIST_DIRECTORY)
	echo "jag.gy" > 'CNAME'

persist:
	cd $(DIST_DIRECTORY)
	git init
	git add -A
	git commit -m 'deploy'

deploy: build add_domain persist
	cd $(DIST_DIRECTORY)
	git push -f git@github.com:jaggy/jag.gy master:gh-pages
