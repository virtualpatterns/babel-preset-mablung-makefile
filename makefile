
# ifndef mablung-makefile-path
# export mablung-makefile-path := $(shell npx mablung-makefile get-path)
# endif

# include $(mablung-makefile-path)

include node_modules/@virtualpatterns/mablung-makefile/makefile

ifneq ($(is-building),true)
ifneq ($(is-cleaning),true)

pre-build::
	$(info - pre-build ----------------------------)
	@npx shx cp -u node_modules/@virtualpatterns/mablung-makefile/.eslintrc.json .
	@npx shx cp -u node_modules/@virtualpatterns/mablung-makefile/babel.config.json .

endif
endif
