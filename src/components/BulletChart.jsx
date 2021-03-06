import React, { Component } from 'react';
import JqxBulletChart from '../assets/jqwidgets-react/react_jqxbulletchart.js';

export default class BulletChart extends Component {
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
                { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
                { startValue: 250, endValue: 300, color: "#000000", opacity: 0.1 }
            ];
        let pointer = { value: 270, label: "Revenue 2014 YTD", size: "25%", color: "Black" };
        let target = { value: 260, label: "Revenue 2013 YTD", size: 4, color: "Black" };
        let ticks = { position: "both", interval: 50, size: 10 };
        return (
            <JqxBulletChart
                width={500} height={80} barSize={"40%"} ranges={ranges} ticks={ticks}
                title={"Revenue 2014 YTD"} description={"(U.S. $ in thousands)"}
                orientation={"horizontal"}
                pointer={pointer} target={target} labelsFormat={"c"} showTooltip={true}
            />
        )
    }
}
