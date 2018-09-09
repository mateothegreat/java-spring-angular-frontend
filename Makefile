VERSION	    = $(shell git rev-parse HEAD)
NAME	    = 644368304333.dkr.ecr.ap-southeast-2.amazonaws.com/cake-manager-ui
ALIAS	    = cake-manager-ui
APP			= cake-manager-ui
export

#grant all privileges on platform_base.* to 'platform_base'@'%' identified by 'agaeq14';

.PHONY: all build test tag_latest release

all:	build push

docker-login:	; $(shell aws ecr get-login --no-include-email --region eu-central-1)

build:

	npm run build --prod

	echo "Building an image with the current tag $(NAME):$(VERSION).."

	docker build 	--rm 	\
					--tag $(NAME):$(VERSION) \
					.

run: stop

	docker run 	--rm    				                        \
				--publish 8080:8080		                        \
				--name $(ALIAS)                                 \
				$(NAME):$(VERSION)

stop:

	docker rm -f $(ALIAS) | true

logs:

	docker logs -f $(ALIAS)

#shell:
#
#	docker run 	--rm -it 				                        \
#				--volume $(PWD)/jenkins_home:/var/jenkins_home 	\
#				--publish 8080:8080		                        \
#				--publish 50000:50000                           \
#				--name $(ALIAS)                                 \
#				--entrypoint /bin/sh                            \
#				$(NAME):$(VERSION)

tag_latest:

	docker tag $(NAME):$(VERSION) $(NAME):latest

push: docker-login

	@echo "*** PUSHING $(NAME)"

	docker push $(NAME)
