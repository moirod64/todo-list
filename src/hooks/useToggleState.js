import { useState } from "react";

export default function useToggleState(initialValue = false) {
  // STATE TOGGLING TRUE OR FALSE STATE
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
