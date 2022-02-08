
# ifndef mablung-makefile-path
# export mablung-makefile-path := $(shell npx mablung-makefile get-path)
# endif

# include $(mablung-makefile-path)

include node_modules/@virtualpatterns/mablung-makefile/makefile

ifndef current-build-folder
ifndef current-clean-folder

pre-build::
	$(info - pre-build ----------------------------)
	$(if $(verbose),@echo copy .... .eslintrc.json babel.config.json)
	@npx shx cp -u node_modules/@virtualpatterns/mablung-makefile/.eslintrc.json node_modules/@virtualpatterns/mablung-makefile/babel.config.json .
	@$(MAKE) --no-print-directory commit message=post-pre-build include-commit-item=".eslintrc.json babel.config.json"

endif
endif
