import { TemplateItem, TemplateStateType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TemplateStateType = {}

const templateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        add(state, action: PayloadAction<TemplateItem>) {
            state[action.payload.id] = action.payload;
        }
    }
})

export const { add } = templateSlice.actions;
export default templateSlice.reducer;