import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
    expenses: [
        {
            id : nanoid(),
            item: "God of War",
            date: "02/04/2000",
            amount: 50,
            category:"games"
        },
        {
            id : nanoid(),
            item: "Cheese Burger",
            date: "02/04/2000",
            amount: 200,
            category:"food"
        }
    ]
}


const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action)=>{
            state.expenses = [...state.expenses, action.payload]
        },
        editExpense: (state, action) => {
            state.expenses= state.expenses.map((expense)=> expense.id === action.payload.id ? action.payload : expense)
        },
        deleteExpense: (state, action) => {
            state.expenses= state.expenses.filter((expense)=> expense.id !== action.payload)
        }
    },
})

export const { addExpense, editExpense, deleteExpense} = expenseSlice.actions

export default expenseSlice.reducer