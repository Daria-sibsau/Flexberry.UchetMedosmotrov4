import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-uchet-medosmotrov4-должности-l');
  this.route('i-i-s-uchet-medosmotrov4-должности-e',
  { path: 'i-i-s-uchet-medosmotrov4-должности-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-должности-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-должности-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-инд-напр-медосм-l');
  this.route('i-i-s-uchet-medosmotrov4-инд-напр-медосм-e',
  { path: 'i-i-s-uchet-medosmotrov4-инд-напр-медосм-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-инд-напр-медосм-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-инд-напр-медосм-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-класс-вред-факт-l');
  this.route('i-i-s-uchet-medosmotrov4-класс-вред-факт-e',
  { path: 'i-i-s-uchet-medosmotrov4-класс-вред-факт-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-класс-вред-факт-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-класс-вред-факт-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-мед-учреждение-l');
  this.route('i-i-s-uchet-medosmotrov4-мед-учреждение-e',
  { path: 'i-i-s-uchet-medosmotrov4-мед-учреждение-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-мед-учреждение-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-мед-учреждение-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-организация-l');
  this.route('i-i-s-uchet-medosmotrov4-организация-e',
  { path: 'i-i-s-uchet-medosmotrov4-организация-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-организация-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-организация-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-подразделения-l');
  this.route('i-i-s-uchet-medosmotrov4-подразделения-e',
  { path: 'i-i-s-uchet-medosmotrov4-подразделения-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-подразделения-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-подразделения-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-приказ-м-з-р-l');
  this.route('i-i-s-uchet-medosmotrov4-приказ-м-з-р-e',
  { path: 'i-i-s-uchet-medosmotrov4-приказ-м-з-р-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-приказ-м-з-р-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-приказ-м-з-р-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-сотрудники-l');
  this.route('i-i-s-uchet-medosmotrov4-сотрудники-e',
  { path: 'i-i-s-uchet-medosmotrov4-сотрудники-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-сотрудники-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-сотрудники-e/new' });
  this.route('i-i-s-uchet-medosmotrov4-список-на-медосм-l');
  this.route('i-i-s-uchet-medosmotrov4-список-на-медосм-e',
  { path: 'i-i-s-uchet-medosmotrov4-список-на-медосм-e/:id' });
  this.route('i-i-s-uchet-medosmotrov4-список-на-медосм-e.new',
  { path: 'i-i-s-uchet-medosmotrov4-список-на-медосм-e/new' });
});

export default Router;
