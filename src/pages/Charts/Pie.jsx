import React from 'react';
import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from '@syncfusion/ej2-react-kanban';

import { Header } from '../../components';

const Pie = () => {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Charts' title='Pie' />
		</div>
	);
};

export default Pie;
