
ifndef mablung-makefile-path
export mablung-makefile-path := $(shell npx mablung-makefile get-path)
endif

include $(mablung-makefile-path)

ifndef current-folder

pre-build::
	$(if $(verbose),@echo update ....  configuration/check.json configuration/compile.json)
	@npx mablung-makefile update-configuration
	
endif