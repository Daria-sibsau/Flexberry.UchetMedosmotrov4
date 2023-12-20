import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-medosmotrov4-должности', 'Unit | Serializer | i-i-s-uchet-medosmotrov4-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-uchet-medosmotrov4-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-uchet-medosmotrov4-период',
    'transform:i-i-s-uchet-medosmotrov4-пол-сотрудника',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
