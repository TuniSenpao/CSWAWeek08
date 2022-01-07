import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = 'https://mht.uzi.uni-halle.de';
    namespace = 'client-seitige-web-anwendungen/api/example';
}
