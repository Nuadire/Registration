import { handleActions } from "redux-actions";
import { alertSuccess, alertError, alertClear } from "../_actions/actions";

export const alert = handleActions(
  {
    [alertSuccess]: (state, { payload }) => {
      return {
        type: "success",
        message: payload,
      };
    },
    [alertError]: (state, { payload }) => {
      const errorsKeys = Object.keys(payload);
      const newMessage = errorsKeys.reduce((acc, key) => {
        const row = payload[key].join(", ");
        return `${acc} ${key} ${row}\n`;
      }, "").trim();
      return {
        type: "error",
        message: newMessage,
      };
    },
    [alertClear]: () => {
      return {};
    },
  },
  {}
);
