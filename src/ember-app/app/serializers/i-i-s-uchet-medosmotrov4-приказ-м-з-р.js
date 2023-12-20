import { Serializer as ПриказМЗРSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-medosmotrov4-приказ-м-з-р';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриказМЗРSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
