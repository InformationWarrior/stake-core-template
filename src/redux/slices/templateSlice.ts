import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BetMode, TemplateState } from "@/types/template";

const initialState: TemplateState = {
  mode: BetMode.MANUAL,
  isManual: true,
  isAuto: false,
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<BetMode>) {
      const mode = action.payload;
      state.mode = mode;
      state.isManual = mode === BetMode.MANUAL;
      state.isAuto = mode === BetMode.AUTO;
      console.log(`Mode set to ${mode}`);
      console.log(`isManual set to ${state.isManual}`);
      console.log(`isAuto set to ${state.isAuto}`);
    },
  },
});

export const { setMode } = templateSlice.actions;

export default templateSlice.reducer;
