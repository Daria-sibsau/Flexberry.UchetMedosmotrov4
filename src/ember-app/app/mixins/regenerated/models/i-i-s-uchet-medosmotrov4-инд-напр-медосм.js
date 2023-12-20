import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДок: DS.attr('number'),
  медУчреждение: DS.belongsTo('i-i-s-uchet-medosmotrov4-мед-учреждение', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-uchet-medosmotrov4-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-uchet-medosmotrov4-сотрудники', { inverse: null, async: false }),
  вреднФактПроиз: DS.hasMany('i-i-s-uchet-medosmotrov4-вредн-факт-произ', { inverse: 'индНапрМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-инд-напр-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-инд-напр-медосм.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  медУчреждение: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-инд-напр-медосм.validations.медУчреждение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-инд-напр-медосм.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-инд-напр-медосм.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вреднФактПроиз: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov4-инд-напр-медосм.validations.вреднФактПроиз.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИндНапрМедосмE', 'i-i-s-uchet-medosmotrov4-инд-напр-медосм', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    организация: belongsTo('i-i-s-uchet-medosmotrov4-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: 2, displayMemberPath: 'наименование' }),
    медУчреждение: belongsTo('i-i-s-uchet-medosmotrov4-мед-учреждение', 'Медицинское учреждение', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: 4, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-uchet-medosmotrov4-сотрудники', 'Сотрудники', {
      iDСотрудника: attr('ID сотрудника', { index: 7 }),
      фИО: attr('ФИО', { index: 8 }),
      датаРождения: attr('Дата рождения', { index: 9 }),
      должности: belongsTo('i-i-s-uchet-medosmotrov4-должности', '', {
        наименование: attr('Должность', { index: 10 }),
        подразделения: belongsTo('i-i-s-uchet-medosmotrov4-подразделения', '', {
          наименование: attr('Подразделение', { index: 11 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    вреднФактПроиз: hasMany('i-i-s-uchet-medosmotrov4-вредн-факт-произ', 'Вредные факторы производства', {
      классВредФакт: belongsTo('i-i-s-uchet-medosmotrov4-класс-вред-факт', 'Вредные факторы', {
        наименование: attr('Наименование', { index: 1 })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ИндНапрМедосмL', 'i-i-s-uchet-medosmotrov4-инд-напр-медосм', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-uchet-medosmotrov4-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    медУчреждение: belongsTo('i-i-s-uchet-medosmotrov4-мед-учреждение', 'Медицинское учреждение', {
      наименование: attr('Медицинское учреждение', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
