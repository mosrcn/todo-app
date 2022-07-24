import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/th';
import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend((o, c) => {
  // locale needed later
  const proto = c.prototype;
  const oldFormat = proto.format;
  // extend en locale here
  proto.format = function (format = '') {
    const yearBias = 543;
    // before 500 year to update code
    const isYearBias = this.$y - new Date().getFullYear() > 500 ? true : false;
    if (this.locale() === 'th' && !isYearBias) {
      format = format.replace(/(\[[^\]]+])|YYYY|YY/g, (match, a) => {
        const year = String(this.$y + yearBias);
        const args = match === 'YY' ? [year.slice(-2), 2] : [year, 4];
        return a || this.$utils().s(...args, '0');
      });
    } else if (this.locale() === 'en' && isYearBias) {
      format = format.replace(/(\[[^\]]+])|YYYY|YY/g, (match, a) => {
        const year = String(this.$y - yearBias);
        const args = match === 'YY' ? [year.slice(-2), 2] : [year, 4];
        return a || this.$utils().s(...args, '0');
      });
    }
    return oldFormat.bind(this)(format);
  };
});

export default dayjs;
