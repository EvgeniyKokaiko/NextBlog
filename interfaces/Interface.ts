export interface Post {
  body: string;
  id: number;
  title: string;
}

export interface DispatchObj {
  type: string;
  payload: object | any;
}
