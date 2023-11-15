'use client'
import { persistedStore, store } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={false} persistor={persistedStore}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider