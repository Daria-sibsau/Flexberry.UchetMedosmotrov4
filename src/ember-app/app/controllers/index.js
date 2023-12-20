import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.caption'),
          title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.title'),
          children: [{
            link: 'i-i-s-uchet-medosmotrov4-класс-вред-факт-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-класс-вред-факт-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-класс-вред-факт-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-список-на-медосм-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-список-на-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-список-на-медосм-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-сотрудники-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-инд-напр-медосм-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-инд-напр-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-инд-напр-медосм-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-мед-учреждение-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-мед-учреждение-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-мед-учреждение-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-подразделения-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-подразделения-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-должности-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-должности-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-приказ-м-з-р-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-приказ-м-з-р-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-приказ-м-з-р-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov4-организация-l',
            caption: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.uchet-medosmotrov4.i-i-s-uchet-medosmotrov4-организация-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})