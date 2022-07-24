import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState, AppDispatch } from '../redux/store';

type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};

export const createAppThunk = <Returned, ThunkArg = void>(
  type: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>
): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> => {
  return createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(type, (arg, thunkAPI) => {
    const source = axios.CancelToken.source();
    thunkAPI.signal.addEventListener('abort', () => source.cancel());
    return payloadCreator(arg, thunkAPI);
  });
};
