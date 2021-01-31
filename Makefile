
make init:
	@git init

set-remote:
	@git remote add origin $(filter-out $@, $(MAKECMDGOALS))
	
commit-msg:
	@git commit -m "$$(git branch --show-current): $(filter-out $@, $(MAKECMDGOALS))"

show-origin:
	@git remote -v

pull: 
	@git pull origin $$(git branch --show-current) --rebase

push:
	@git push origin $$(git branch --show-current)