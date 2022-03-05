
# ifndef mablung-makefile-path
# export mablung-makefile-path := $(shell npx mablung-makefile get-path)
# endif

# include $(mablung-makefile-path)

include node_modules/@virtualpatterns/mablung-makefile/makefile

ifneq ($(is-building),true)
ifneq ($(is-cleaning),true)

pre-build::
	$(info - pre-build ----------------------------)
	$(if $(is-verbose),@echo copy ...... .eslintrc.json babel.config.json)
	@npx shx cp node_modules/@virtualpatterns/mablung-makefile/.eslintrc.json node_modules/@virtualpatterns/mablung-makefile/babel.config.json .
	@$(MAKE) --no-print-directory commit message=pre-build include-commit-item=".eslintrc.json babel.config.json"

pre-clean::
	$(info - pre-clean ----------------------------)
	$(if $(is-verbose),@echo delete .... .eslintrc.json babel.config.json)
	@npx shx rm -Rf .eslintrc.json babel.config.json

endif
endif
