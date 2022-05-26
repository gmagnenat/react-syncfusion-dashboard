import React from 'react';
import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from '@syncfusion/ej2-react-kanban';

import { Header, AreaChart } from '../../components';

const Area = () => {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
			<Header category='Area' title='Inflation Rate in Percentage' />

			<div className='w-full'>
				<AreaChart />
			</div>
		</div>
	);
};

export default Area;
