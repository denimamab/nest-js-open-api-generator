codegen-axios:
	docker run --rm --network host -u $(CURUSER):$(CURGROUP) -v ${CURDIR}:/local \
					openapitools/openapi-generator-cli generate \
                   	-i http://localhost:3000/api-json \
                   	-g typescript-axios \
                   	--additional-properties=withInterfaces=true,prefixParameterInterfaces=true,npmName=@todo-api-client/axios,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
                   	-o /local/clients/axios