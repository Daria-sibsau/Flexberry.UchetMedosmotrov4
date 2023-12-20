import {
  defineNamespace,
  defineProjections,
  Model as КонтингентСотрMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov4-контингент-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтингентСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
