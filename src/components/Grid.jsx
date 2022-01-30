import React, { Component } from 'react';
import JqxGrid, { jqx } from '../assets/jqwidgets-react/react_jqxgrid.js';

export default class grid extends Component {
    componentDidMount() {
        this.refs.Grid.on('cellbeginedit', (event) => {
            let args = event.args;
            document.getElementById("cellBeginEdit").innerHTML = ("Event Type: cellBeginEdit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
        });
        this.refs.Grid.on('cellendedit', (event) => {
            let args = event.args;
            document.getElementById("cellEndEdit").innerHTML = ("Event Type: cellEndEdit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
        });
    }
    render() {

        const source =
        {
            datatype: 'xml',
            datafields: [
                { name: 'ProductName', type: 'string' },
                { name: 'QuantityPerUnit', type: 'int' },
                { name: 'UnitPrice', type: 'float' },
                { name: 'UnitsInStock', type: 'float' },
                { name: 'Discontinued', type: 'bool' }
            ],
            root: 'Products',
            record: 'Product',
            id: 'ProductID',
            url: './assets/products.xml'
        };

        let dataAdapter = new jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Product Name', columntype: 'textbox', datafield: 'ProductName', width: 250 },
                { text: 'Quantity', datafield: 'QuantityPerUnit', columntype: 'textbox' },
                { text: 'Unit price', columntype: 'dropdownlist', datafield: 'UnitPrice' },
                { text: 'InStock', datafield: 'available', columntype: 'checkbox', width: 67 },
                { text: 'Discontinued', columntype: 'checkbox', datafield: 'discontinued', align: 'center' }
            ];
        return (
            <JqxGrid ref='Grid'
                width={"100%"} height={"100%"} source={dataAdapter} editable={true} columns={columns}
                enabletooltips={true} selectionmode={'multiplecellsadvanced'}
            />
        );
    }
}
