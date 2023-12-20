import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-мед-учреждение.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-мед-учреждение.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-мед-учреждение.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МедУчреждениеE', 'i-i-s-uchet-medosmotrov4-мед-учреждение', {
    наименование: attr('Наименование', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адрес: attr('Адрес', { index: 2 })
  });

  modelClass.defineProjection('МедУчреждениеL', 'i-i-s-uchet-medosmotrov4-мед-учреждение', {
    наименование: attr('Наименование', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адрес: attr('Адрес', { index: 2 })
  });
};
