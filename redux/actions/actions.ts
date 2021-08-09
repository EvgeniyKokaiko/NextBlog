import { Dispatch } from "redux";
import axios from "axios";
import { ActionTypes } from "../types";
import { DispatchObj } from "../../interfaces/Interface";

export const fetchPosts = () => async (dispatch: Dispatch<DispatchObj>) => {
  const response = await axios.get("https://simple-blog-api.crew.red/posts");

  dispatch<DispatchObj>({
    type: ActionTypes.fetchPosts,
    payload: response.data,
  });
};

export const fetchPost =
  (id: string | string[]) => async (dispatch: Dispatch<DispatchObj>) => {
    const response = await axios.get(
      `https://simple-blog-api.crew.red/posts/${id}`
    );

    dispatch({ type: ActionTypes.fetchPost, payload: response.data });
  };

export const AddPost =
  (title: string, body: string) => async (dispatch: Dispatch<DispatchObj>) => {
    const response = await axios.post(
      `https://simple-blog-api.crew.red/posts`,
      {
        title: title,
        body: body,
      }
    );

    dispatch({ type: ActionTypes.AddPost, payload: response.data });
  };

export default {};
