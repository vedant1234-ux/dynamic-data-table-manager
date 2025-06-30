import { ColumnConfig, TableData } from '@/types';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

interface CSVRow {
    [key: string]: string | number;
}

export const importCSV = (file: File): Promise<TableData[]> => {
    return new Promise((resolve, reject) => {
        Papa.parse<CSVRow>(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                try {
                    const data = results.data.map((row, index) => ({
                        id: String(index + 1),
                        ...row,
                    }));
                    resolve(data as TableData[]);
                } catch {
                    reject(new Error('Failed to parse CSV file'));
                }
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export const exportCSV = (data: TableData[], visibleColumns: ColumnConfig[]) => {
    // Sort columns by order
    const sortedColumns = [...visibleColumns].sort((a, b) => a.order - b.order);

    // Create CSV data with only visible columns
    const csvData = data.map(row => {
        const newRow: Record<string, string | number> = {};
        sortedColumns.forEach(col => {
            if (col.visible) {
                const value = row[col.id];
                newRow[col.label] = value !== undefined ? value : '';
            }
        });
        return newRow;
    });

    // Convert to CSV string
    const csv = Papa.unparse(csvData);

    // Create and save file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'table-data.csv');
}; 