import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  наименование: DS.attr('string'),
  подразделения: DS.belongsTo('i-i-s-uchet-medosmotrov4-подразделения', { inverse: null, async: false })
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-должности.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-uchet-medosmotrov4-должности', {
    наименование: attr('Наименование', { index: 0 }),
    iDДолжности: attr('ID должности', { index: 1 }),
    подразделения: belongsTo('i-i-s-uchet-medosmotrov4-подразделения', 'Подразделение', {
      наименование: attr('Подразделение', { index: 3 })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-uchet-medosmotrov4-должности', {
    наименование: attr('Наименование', { index: 0 }),
    iDДолжности: attr('ID должности', { index: 1 }),
    подразделения: belongsTo('i-i-s-uchet-medosmotrov4-подразделения', 'Подразделение', {
      наименование: attr('Подразделение', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
