export interface IActionType {
  type: string;
}

export interface IActionPayload extends IActionType{
  payload: any
}
