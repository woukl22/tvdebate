import { createSlice } from '@reduxjs/toolkit';

// 스크립트 버튼 슬라이스
const scriptSlice = createSlice({
    name: 'script',
    initialState: {
        isOpen: false,
    },
    reducers: {
        scriptIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { scriptIsOpen } = scriptSlice.actions;
export const scriptReducer = scriptSlice.reducer;
