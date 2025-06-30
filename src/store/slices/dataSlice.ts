import { TableData, TableState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TableState = {
    data: [
        { id: '1', name: 'John Doe', email: 'john@example.com', age: 30, role: 'Developer' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 25, role: 'Designer' },
        { id: '3', name: 'Bob Johnson', email: 'bob@example.com', age: 35, role: 'Manager' },
    ],
    columns: [],
    search: '',
    sortBy: null,
    sortOrder: 'asc',
    page: 0,
    rowsPerPage: 10,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<TableData[]>) => {
            state.data = action.payload;
        },
        addRow: (state, action: PayloadAction<TableData>) => {
            state.data.push(action.payload);
        },
        updateRow: (state, action: PayloadAction<{ id: string; data: Partial<Omit<TableData, 'id'>> }>) => {
            const index = state.data.findIndex(row => row.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = { ...state.data[index], ...action.payload.data };
            }
        },
        updateCell: (state, action: PayloadAction<{ id: string; field: string; value: string | number }>) => {
            const index = state.data.findIndex(row => row.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = {
                    ...state.data[index],
                    [action.payload.field]: action.payload.value
                };
            }
        },
        deleteRow: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(row => row.id !== action.payload);
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            state.page = 0;
        },
        setSort: (state, action: PayloadAction<{ field: string; order: 'asc' | 'desc' }>) => {
            state.sortBy = action.payload.field;
            state.sortOrder = action.payload.order;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setRowsPerPage: (state, action: PayloadAction<number>) => {
            state.rowsPerPage = action.payload;
            state.page = 0;
        },
    },
});

export const {
    setData,
    addRow,
    updateRow,
    updateCell,
    deleteRow,
    setSearch,
    setSort,
    setPage,
    setRowsPerPage,
} = dataSlice.actions;

export default dataSlice.reducer; 