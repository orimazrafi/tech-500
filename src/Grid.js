import React from 'react';

const headlineField = 'title';
const Grid = ({ config, data }) => {
	return (
		<table>
			<thead>
				<tr>
					{config.map((con) => (
						<th key={con?.[headlineField]}>
							{con?.[headlineField]}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.map((tableBody, index) => (
					<tr key={tableBody?.[Object.keys(tableBody)?.[0]] || index}>
						{config?.map((con) => (
							<td key={tableBody?.[con?.field]}>
								{con?.component &&
								typeof con?.component === 'function'
									? con.component({
											data: tableBody?.[con?.field],
									  })
									: tableBody?.[con?.field]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Grid;
