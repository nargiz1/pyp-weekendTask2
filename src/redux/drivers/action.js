import axios from "axios";
import { getPayload } from "../../utils";

export const getAllDrivers = (offset) => {
  const type = "LIST_OF_DRIVERS";

  return (dispatch) => {
    dispatch({ type: type, payload: getPayload("pending", null) });
    axios
      .get(`http://ergast.com/api/f1/drivers.json?limit=30&offset=${offset}`)
      .then((res) =>
        dispatch({ type: type, payload: getPayload("success", res.data.MRData) })
      )
      .catch((err) =>
        dispatch({ type: type, payload: getPayload("error", err) })
      );
  };
};
