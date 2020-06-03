import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {$get} from 'plow-js';
import style from './style.css';
import dataLoader from './DataLoader/index';

@dataLoader()
export default class ColumnView extends PureComponent {
    static propTypes = {
        data: PropTypes.object.isRequired,
        options: PropTypes.shape({
            unit: PropTypes.string
        }).isRequired,

    }

    render() {
        const {data, options} = this.props;
        const low = $get('percentage.low', data);
        const medium = $get('percentage.medium', data);
        const high = $get('percentage.high', data);
        const fromDate = $get('fromDate', data);
        const toDate = $get('toDate', data);
        const total = $get('total', data);
        const thresholdMin = $get('threshold.min', data);
        const thresholdMax = $get('threshold.max', data);
        const unit = $get('unit', options);

        return (
            <div>
                <div class={style.bar}>
                    <span class={[style.bar__legend, style.bar__left].join(' ')} style={{ width: low + '%' }}>{thresholdMin}{unit}&nbsp;&rsaquo;</span>
                    <span class={[style.bar__legend, style.bar__middle].join(' ')} style={{ width: medium + '%' }}></span>
                    <span class={[style.bar__legend, style.bar__right].join(' ')} style={{ width: high + '%' }}>&lsaquo;&nbsp;{thresholdMax}{unit}</span>
                </div>
                <div class={style.bar}>
                    <span class={[style.bar__section, style.bar__low].join(' ')} style={{ width: low + '%' }}>{low}%</span>
                    <span class={[style.bar__section, style.bar__medium].join(' ')} style={{ width: medium + '%' }}>{medium}%</span>
                    <span class={[style.bar__section, style.bar__high].join(' ')} style={{ width: high + '%' }}>{high}%</span>
                </div>
                <div class={style.infopanel}>
                    <div class={style.infopanel__date}>{fromDate} - {toDate}</div>
                    <div class={style.infopanel__total}>{total}</div>
                </div>
            </div>
        );
    }
}
