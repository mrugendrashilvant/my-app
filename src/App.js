import React, { Component } from 'react';

import JqxGrid, { jqx } from './assets/jqwidgets-react/react_jqxgrid';
import BarGauge from './components/BarGauge';
import BulletChart from './components/BulletChart';
import Button from './components/Button';
import Grid from './components/Grid';

class App extends Component {
    render() {

        return (
            <div>
                <BarGauge />
                <BulletChart />
                <Button />
                <div className='grid'><Grid /></div>

            </div>
        );
    }
}

export default App;