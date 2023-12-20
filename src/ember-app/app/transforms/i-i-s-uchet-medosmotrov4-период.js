import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПериодEnum from '../enums/i-i-s-uchet-medosmotrov4-период';

export default FlexberryEnum.extend({
  enum: ПериодEnum,
  sourceType: 'IIS.UchetMedosmotrov4.Период'
});
