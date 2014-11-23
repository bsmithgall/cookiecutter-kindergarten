angular.module('{{ cookiecutter.app_name }}-mocks', ['ngMockE2E'])
    .run(function($httpBackend) {

      /**
        * Mock out API calls here to return mock data.
        * A sample with the generic-list has been included.
        */

      $httpBackend.whenGET('/api/v1/list').repsond(200, E2Emocks.genericList);

    });