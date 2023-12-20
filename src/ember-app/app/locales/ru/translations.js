import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISUchetMedosmotrov4ДолжностиLForm from './forms/i-i-s-uchet-medosmotrov4-должности-l';
import IISUchetMedosmotrov4ИндНапрМедосмLForm from './forms/i-i-s-uchet-medosmotrov4-инд-напр-медосм-l';
import IISUchetMedosmotrov4КлассВредФактLForm from './forms/i-i-s-uchet-medosmotrov4-класс-вред-факт-l';
import IISUchetMedosmotrov4МедУчреждениеLForm from './forms/i-i-s-uchet-medosmotrov4-мед-учреждение-l';
import IISUchetMedosmotrov4ОрганизацияLForm from './forms/i-i-s-uchet-medosmotrov4-организация-l';
import IISUchetMedosmotrov4ПодразделенияLForm from './forms/i-i-s-uchet-medosmotrov4-подразделения-l';
import IISUchetMedosmotrov4ПриказМЗРLForm from './forms/i-i-s-uchet-medosmotrov4-приказ-м-з-р-l';
import IISUchetMedosmotrov4СотрудникиLForm from './forms/i-i-s-uchet-medosmotrov4-сотрудники-l';
import IISUchetMedosmotrov4СписокНаМедосмLForm from './forms/i-i-s-uchet-medosmotrov4-список-на-медосм-l';
import IISUchetMedosmotrov4ДолжностиEForm from './forms/i-i-s-uchet-medosmotrov4-должности-e';
import IISUchetMedosmotrov4ИндНапрМедосмEForm from './forms/i-i-s-uchet-medosmotrov4-инд-напр-медосм-e';
import IISUchetMedosmotrov4КлассВредФактEForm from './forms/i-i-s-uchet-medosmotrov4-класс-вред-факт-e';
import IISUchetMedosmotrov4МедУчреждениеEForm from './forms/i-i-s-uchet-medosmotrov4-мед-учреждение-e';
import IISUchetMedosmotrov4ОрганизацияEForm from './forms/i-i-s-uchet-medosmotrov4-организация-e';
import IISUchetMedosmotrov4ПодразделенияEForm from './forms/i-i-s-uchet-medosmotrov4-подразделения-e';
import IISUchetMedosmotrov4ПриказМЗРEForm from './forms/i-i-s-uchet-medosmotrov4-приказ-м-з-р-e';
import IISUchetMedosmotrov4СотрудникиEForm from './forms/i-i-s-uchet-medosmotrov4-сотрудники-e';
import IISUchetMedosmotrov4СписокНаМедосмEForm from './forms/i-i-s-uchet-medosmotrov4-список-на-медосм-e';
import IISUchetMedosmotrov4ВреднФактПроизModel from './models/i-i-s-uchet-medosmotrov4-вредн-факт-произ';
import IISUchetMedosmotrov4ДолжностиModel from './models/i-i-s-uchet-medosmotrov4-должности';
import IISUchetMedosmotrov4ИндНапрМедосмModel from './models/i-i-s-uchet-medosmotrov4-инд-напр-медосм';
import IISUchetMedosmotrov4КлассВредФактModel from './models/i-i-s-uchet-medosmotrov4-класс-вред-факт';
import IISUchetMedosmotrov4КонтингентСотрModel from './models/i-i-s-uchet-medosmotrov4-контингент-сотр';
import IISUchetMedosmotrov4МедУчреждениеModel from './models/i-i-s-uchet-medosmotrov4-мед-учреждение';
import IISUchetMedosmotrov4ОрганизацияModel from './models/i-i-s-uchet-medosmotrov4-организация';
import IISUchetMedosmotrov4ПодразделенияModel from './models/i-i-s-uchet-medosmotrov4-подразделения';
import IISUchetMedosmotrov4ПриказМЗРModel from './models/i-i-s-uchet-medosmotrov4-приказ-м-з-р';
import IISUchetMedosmotrov4СотрудникиModel from './models/i-i-s-uchet-medosmotrov4-сотрудники';
import IISUchetMedosmotrov4СписокНаМедосмModel from './models/i-i-s-uchet-medosmotrov4-список-на-медосм';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-uchet-medosmotrov4-вредн-факт-произ': IISUchetMedosmotrov4ВреднФактПроизModel,
    'i-i-s-uchet-medosmotrov4-должности': IISUchetMedosmotrov4ДолжностиModel,
    'i-i-s-uchet-medosmotrov4-инд-напр-медосм': IISUchetMedosmotrov4ИндНапрМедосмModel,
    'i-i-s-uchet-medosmotrov4-класс-вред-факт': IISUchetMedosmotrov4КлассВредФактModel,
    'i-i-s-uchet-medosmotrov4-контингент-сотр': IISUchetMedosmotrov4КонтингентСотрModel,
    'i-i-s-uchet-medosmotrov4-мед-учреждение': IISUchetMedosmotrov4МедУчреждениеModel,
    'i-i-s-uchet-medosmotrov4-организация': IISUchetMedosmotrov4ОрганизацияModel,
    'i-i-s-uchet-medosmotrov4-подразделения': IISUchetMedosmotrov4ПодразделенияModel,
    'i-i-s-uchet-medosmotrov4-приказ-м-з-р': IISUchetMedosmotrov4ПриказМЗРModel,
    'i-i-s-uchet-medosmotrov4-сотрудники': IISUchetMedosmotrov4СотрудникиModel,
    'i-i-s-uchet-medosmotrov4-список-на-медосм': IISUchetMedosmotrov4СписокНаМедосмModel
  },

  'application-name': 'Uchet medosmotrov4',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Uchet medosmotrov4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Uchet medosmotrov4',
          title: 'Uchet medosmotrov4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'uchet-medosmotrov4': {
          caption: 'UchetMedosmotrov4',
          title: 'UchetMedosmotrov4',
          'i-i-s-uchet-medosmotrov4-класс-вред-факт-l': {
            caption: 'Класс вред факт',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-список-на-медосм-l': {
            caption: 'Список на медосм',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-инд-напр-медосм-l': {
            caption: 'Инд напр медосм',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-мед-учреждение-l': {
            caption: 'Мед учреждение',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-подразделения-l': {
            caption: 'Подразделения',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-приказ-м-з-р-l': {
            caption: 'Приказ МЗР',
            title: ''
          },
          'i-i-s-uchet-medosmotrov4-организация-l': {
            caption: 'Организация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-uchet-medosmotrov4-должности-l': IISUchetMedosmotrov4ДолжностиLForm,
    'i-i-s-uchet-medosmotrov4-инд-напр-медосм-l': IISUchetMedosmotrov4ИндНапрМедосмLForm,
    'i-i-s-uchet-medosmotrov4-класс-вред-факт-l': IISUchetMedosmotrov4КлассВредФактLForm,
    'i-i-s-uchet-medosmotrov4-мед-учреждение-l': IISUchetMedosmotrov4МедУчреждениеLForm,
    'i-i-s-uchet-medosmotrov4-организация-l': IISUchetMedosmotrov4ОрганизацияLForm,
    'i-i-s-uchet-medosmotrov4-подразделения-l': IISUchetMedosmotrov4ПодразделенияLForm,
    'i-i-s-uchet-medosmotrov4-приказ-м-з-р-l': IISUchetMedosmotrov4ПриказМЗРLForm,
    'i-i-s-uchet-medosmotrov4-сотрудники-l': IISUchetMedosmotrov4СотрудникиLForm,
    'i-i-s-uchet-medosmotrov4-список-на-медосм-l': IISUchetMedosmotrov4СписокНаМедосмLForm,
    'i-i-s-uchet-medosmotrov4-должности-e': IISUchetMedosmotrov4ДолжностиEForm,
    'i-i-s-uchet-medosmotrov4-инд-напр-медосм-e': IISUchetMedosmotrov4ИндНапрМедосмEForm,
    'i-i-s-uchet-medosmotrov4-класс-вред-факт-e': IISUchetMedosmotrov4КлассВредФактEForm,
    'i-i-s-uchet-medosmotrov4-мед-учреждение-e': IISUchetMedosmotrov4МедУчреждениеEForm,
    'i-i-s-uchet-medosmotrov4-организация-e': IISUchetMedosmotrov4ОрганизацияEForm,
    'i-i-s-uchet-medosmotrov4-подразделения-e': IISUchetMedosmotrov4ПодразделенияEForm,
    'i-i-s-uchet-medosmotrov4-приказ-м-з-р-e': IISUchetMedosmotrov4ПриказМЗРEForm,
    'i-i-s-uchet-medosmotrov4-сотрудники-e': IISUchetMedosmotrov4СотрудникиEForm,
    'i-i-s-uchet-medosmotrov4-список-на-медосм-e': IISUchetMedosmotrov4СписокНаМедосмEForm
  },

});

export default translations;
