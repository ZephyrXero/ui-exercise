// I've opted for a simple state manager via React's Context system
import React, { useEffect } from 'react';

const SERVER = "http://localhost:3000"; // TODO: choose dynamically from environment
const initialState = {
  currentEmail: null,
  emailList: []
};

export const DMailState = React.createContext();

export function DMailStateProvider(props) {
  const { children } = props;
  const [state, setState] = React.useState({
    ...initialState,
    actions: {
      setCurrentEmail
    }
  });

  useEffect(() => {
    getEmails();
  }, []);

  return <DMailState.Provider value={state}>{children}</DMailState.Provider>

  async function getEmails() {
    const FILE_PATH = "/emails.json";
    const emails = await fetch(SERVER + FILE_PATH)
      .then(response => response.json())
      .catch(error => console.error('Data file failed to load'));

    setState(priorState => {
      return { ...priorState, ...{ emailList: emails.messages }};
    });
  }

  function setCurrentEmail(id) {
    const newId = id ? String(id) : null;

    setState(priorState => {
      return { ...priorState, ...{ currentEmail: newId } };
    });
  }
}

export default DMailState;
