
ifndef mablung-makefile-path
export mablung-makefile-path := $(shell npx mablung-makefile get-path)
endif

include $(mablung-makefile-path)

ifndef current-build-folder

pre-build::
	$(info - pre-build ----------------------------)
	$(if $(verbose),@echo update .... .eslintrc.json babel.config.json and get-header.js)
	@npx mablung-makefile update
	
endif