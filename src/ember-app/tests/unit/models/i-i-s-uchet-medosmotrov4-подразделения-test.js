import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-medosmotrov4-подразделения', 'Unit | Model | i-i-s-uchet-medosmotrov4-подразделения', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-uchet-medosmotrov4-вредн-факт-произ',
    'model:i-i-s-uchet-medosmotrov4-должности',
    'model:i-i-s-uchet-medosmotrov4-инд-напр-медосм',
    'model:i-i-s-uchet-medosmotrov4-класс-вред-факт',
    'model:i-i-s-uchet-medosmotrov4-контингент-сотр',
    'model:i-i-s-uchet-medosmotrov4-мед-учреждение',
    'model:i-i-s-uchet-medosmotrov4-организация',
    'model:i-i-s-uchet-medosmotrov4-подразделения',
    'model:i-i-s-uchet-medosmotrov4-приказ-м-з-р',
    'model:i-i-s-uchet-medosmotrov4-сотрудники',
    'model:i-i-s-uchet-medosmotrov4-список-на-медосм',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
