import { createSlice } from "@reduxjs/toolkit";

interface SliceState {
  sendMessageIsOpen: boolean;
}
const initialState: SliceState = {
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    opneSendMessage(state) {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage(state) {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { opneSendMessage, closeSendMessage } = mailSlice.actions;
export default mailSlice.reducer;
