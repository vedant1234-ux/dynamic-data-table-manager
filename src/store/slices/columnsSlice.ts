import { ColumnConfig } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ColumnsState {
    columns: ColumnConfig[];
}

const defaultColumns: ColumnConfig[] = [
    { id: 'name', label: 'Name', visible: true, order: 0, type: 'string' },
    { id: 'email', label: 'Email', visible: true, order: 1, type: 'email' },
    { id: 'age', label: 'Age', visible: true, order: 2, type: 'number' },
    { id: 'role', label: 'Role', visible: true, order: 3, type: 'string' },
];

const initialState: ColumnsState = {
    columns: defaultColumns,
};

const columnsSlice = createSlice({
    name: 'columns',
    initialState,
    reducers: {
        toggleColumnVisibility: (state, action: PayloadAction<string>) => {
            const column = state.columns.find(col => col.id === action.payload);
            if (column) {
                column.visible = !column.visible;
            }
        },
        addColumn: (state, action: PayloadAction<Omit<ColumnConfig, 'order'>>) => {
            const newOrder = Math.max(...state.columns.map(col => col.order)) + 1;
            state.columns.push({
                ...action.payload,
                order: newOrder,
            });
        },
        removeColumn: (state, action: PayloadAction<string>) => {
            state.columns = state.columns.filter(col => col.id !== action.payload);
        },
        reorderColumns: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [removed] = state.columns.splice(sourceIndex, 1);
            state.columns.splice(destinationIndex, 0, removed);

            // Update order values
            state.columns.forEach((col, index) => {
                col.order = index;
            });
        },
    },
});

export const {
    toggleColumnVisibility,
    addColumn,
    removeColumn,
    reorderColumns,
} = columnsSlice.actions;

export default columnsSlice.reducer; 