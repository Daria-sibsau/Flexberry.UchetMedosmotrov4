import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДок: DS.attr('number'),
  контингентСотр: DS.hasMany('i-i-s-uchet-medosmotrov4-контингент-сотр', { inverse: 'списокНаМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-список-на-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-список-на-медосм.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контингентСотр: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-список-на-медосм.validations.контингентСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокНаМедосмE', 'i-i-s-uchet-medosmotrov4-список-на-медосм', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    контингентСотр: hasMany('i-i-s-uchet-medosmotrov4-контингент-сотр', 'Контингент сотрудников', {
      подразделения: belongsTo('i-i-s-uchet-medosmotrov4-подразделения', 'Подразделение', {
        наименование: attr('Подразделение', { index: 1 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      мужчины: attr('Мужчины', { index: 2 }),
      женщины: attr('Женщины', { index: 3 }),
      до21Года: attr('До21 года', { index: 4 }),
      всего: attr('Всего', { index: 5 }),
      классВредФакт: belongsTo('i-i-s-uchet-medosmotrov4-класс-вред-факт', 'Вредный фактор', {
        наименование: attr('Вредный фактор', { index: 7 })
      }, { index: 6, displayMemberPath: 'наименование' }),
      приказМЗР: belongsTo('i-i-s-uchet-medosmotrov4-приказ-м-з-р', 'Приказ МЗР', {
        номерПункта: attr('Номер пункта', { index: 9 })
      }, { index: 8, displayMemberPath: 'номерПункта' }),
      периодичность: attr('Периодичность', { index: 10 })
    })
  });

  modelClass.defineProjection('СписокНаМедосмL', 'i-i-s-uchet-medosmotrov4-список-на-медосм', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
