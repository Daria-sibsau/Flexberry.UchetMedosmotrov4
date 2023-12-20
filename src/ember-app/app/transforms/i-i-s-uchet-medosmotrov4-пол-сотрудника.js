import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолСотрудникаEnum from '../enums/i-i-s-uchet-medosmotrov4-пол-сотрудника';

export default FlexberryEnum.extend({
  enum: ПолСотрудникаEnum,
  sourceType: 'IIS.UchetMedosmotrov4.ПолСотрудника'
});
