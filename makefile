
ifndef mablung-makefile-path
export mablung-makefile-path := $(shell npx mablung-makefile get-path)
endif

include $(mablung-makefile-path)

ifndef current-folder
pre-build::
	@npx shx echo update .... package.json
	@npx mablung-makefile update-package
endif