import Model, { attr, belongsTo} from '@ember-data/model';

export default class ModuleModel extends Model {
    @attr code;
    @attr name;
    @attr semester;

    @belongsTo('user') teacher;

    get sections() {
      return {
          dates: {
              title: 'Dates',
              icon: 'mdi mdi-calendar-clock',
          },
          documents: {
              title: 'Documents',
              icon: 'mdi mdi-file-document-box-multiple-outline',
          },
          exercises: {
              title: 'Exercises',
              icon: 'mdi mdi-test-tube',
          },
          students: {
              title: 'TeilnehmerInnen',
              icon: 'mdi mdi-account-multiple',
          },
      };
  }

  get actions() {
      return {
          delete: {
              icon: 'mdi mdi-delete warning',
              title: 'Delete',
              action: 'delete',
          },
      };
  }
}
