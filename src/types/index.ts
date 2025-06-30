export interface TableData {
    id: string;
    name: string;
    email: string;
    age: number;
    role: string;
    [key: string]: string | number | undefined; // For dynamic columns
}

export interface ColumnConfig {
    id: string;
    label: string;
    visible: boolean;
    order: number;
    type: 'string' | 'number' | 'email';
}

export interface TableState {
    data: TableData[];
    columns: ColumnConfig[];
    search: string;
    sortBy: string | null;
    sortOrder: 'asc' | 'desc';
    page: number;
    rowsPerPage: number;
}

export interface ThemeState {
    mode: 'light' | 'dark';
} 