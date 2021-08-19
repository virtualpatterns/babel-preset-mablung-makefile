
ifndef mablung-makefile-path
export mablung-makefile-path := $(shell npx mablung-makefile get-path)
endif

include $(mablung-makefile-path)

ifndef current-folder

pre-build::
	$(if $(verbose),@echo update .... check.json and compile.json)
	@npx mablung-makefile update-configuration
	
endif