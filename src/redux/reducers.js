import { createSlice } from "@reduxjs/toolkit";

const codeBlocksSlice = createSlice({
  name: "codeBlocks",
  initialState: [],
  reducers: {
    setCodeBlocks: (state, action) => {
      return action.payload;
    },
    editCodeBlock: (state, action) => {
      const { index, code } = action.payload;
      const updatedCodeBlocks = [...state];
      updatedCodeBlocks[index] = {
        ...updatedCodeBlocks[index],
        code,
      };
      return updatedCodeBlocks;
    },
  },
});

export const { setCodeBlocks, editCodeBlock } = codeBlocksSlice.actions;
export const codeBlocksReducer = codeBlocksSlice.reducer;
