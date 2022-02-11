import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '../../types/Employee';

type State = {
    name: string;
    initialState: {
        employees: Employee[]
    };
    reducers: any
}

const state: State = {
    name: 'employees',
    initialState: {
        employees: [],
    },
    reducers: {}
}

export const employeesSlice = createSlice({
    ...state,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload.employees;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setEmployees } = employeesSlice.actions

export default employeesSlice.reducer