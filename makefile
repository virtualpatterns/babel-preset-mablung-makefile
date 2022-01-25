
ifndef mablung-makefile-path
export mablung-makefile-path := $(shell npx mablung-makefile get-path)
endif

include $(mablung-makefile-path)

ifndef current-build-folder
ifndef current-clean-folder

pre-build::
	$(info - pre-build ----------------------------)
	$(if $(verbose),@echo update .... .eslintrc.json and babel.config.json)
	@npx mablung-makefile update
	
endif
endif