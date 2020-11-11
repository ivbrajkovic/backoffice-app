// Store context
import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

// State reducer
import { defaultState, reducer } from "./reducer";

export const StoreStateContext = createContext();
export const StoreDispatchContext = createContext();

/* 
 withThunk is a dispatch middleware. When dispatch is 
 invoked  if the action is a function it will call 
 the function passing  down the dispatch itself, 
 if the action is not a function (an object) it will 
 delegate to dispatch
*/
const withThunk = (dispatch) => (actionOrThunk) =>
  typeof actionOrThunk === "function"
    ? actionOrThunk(dispatch)
    : dispatch(actionOrThunk);

// Speakers context provider
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const dispatchMemo = useMemo(() => withThunk(dispatch), []);

  return (
    <StoreDispatchContext.Provider value={withThunk(dispatch)}>
      <StoreStateContext.Provider value={state}>
        {children}
      </StoreStateContext.Provider>
    </StoreDispatchContext.Provider>
  );
};
StoreProvider.propTypes = { children: PropTypes.element.isRequired };

// Speaker context state
const useStoreState = () => {
  const context = useContext(StoreStateContext);
  if (context === undefined) {
    throw new Error("useStoreState() must be used within a DataProvider");
  }
  return context;
};

// Speaker context dispatch
const useStoreDispatch = () => {
  const context = useContext(StoreDispatchContext);
  if (context === undefined) {
    throw new Error("useStoreDispatch() must be used within a DataProvider");
  }
  return context;
};

export { StoreProvider, useStoreState, useStoreDispatch };
