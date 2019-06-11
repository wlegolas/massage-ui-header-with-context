import React from 'react'
const AppContext = React.createContext()

function useAppContext() {
  const context = React.useContext(AppContext)

  if (!context) {
    throw new Error(`useAppContext must be used within a AppContext`)
  }

  return context
}

function AppProvider(props) {
  const initialState = { initials: 'WO' }
  const [userInfo, setUserInfo] = React.useState(initialState)
  const value = React.useMemo(() => ({ userInfo, setUserInfo }), [userInfo])

  return <AppContext.Provider value={value} {...props} />
}

export { AppProvider, useAppContext }
