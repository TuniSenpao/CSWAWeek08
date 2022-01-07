import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
    @attr email;
    @attr first_name;
    @attr last_name;
    @attr role;
}
