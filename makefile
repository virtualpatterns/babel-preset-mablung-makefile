
ifndef mablung-makefile-path
export mablung-makefile-path := node_modules/@virtualpatterns/mablung-makefile/makefile
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