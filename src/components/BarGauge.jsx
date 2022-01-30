import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../assets/jqwidgets-react/react_jqxbargauge.js';

export default class BarGauge extends Component {
    render() {
        let tooltip = {
            formatFunction: (value, index) => {
                return `${value}`
            },
            visible: true,
            precision: 0
        }
        return <div>
            <JqxBarGauge
                width={600} height={600}
                max={150} disable={true}
                startAngle={180} endAngle={0}
                values={[102, 115, 130, 137]}
                tooltip={tooltip}
            />
        </div>;
    }
}
