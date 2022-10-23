
import React, { createContext, ReactNode, useCallback, useRef } from 'react'

export type Store = {
  firstName: string;
  lastName: string;
  dob: string; 
}

type StoreContextType = {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => (() => void) // return a callback to unsusbscribe
}

export const StoreContext = createContext<StoreContextType | null>(null)

const subscribers = new Set<() => void>([])

export default function StoreProvider({children}: {children: ReactNode}) {
  const store = useRef<Store>({
    firstName: '',
    lastName: '',
    dob: ''
  })

  const get = useCallback(() => {
    return store.current;
  }, [store])

  const set = useCallback((value: Partial<Store>) => {
    store.current = {...store.current, ...value}
    subscribers.forEach(callback => callback())
  }, [store])

  const subscribe = useCallback((callback: () => void) => {
    subscribers.add(callback);
    return () => subscribers.delete(callback)
  }, [])

  return (
    <StoreContext.Provider value={{get, set, subscribe}}>
      {children}
    </StoreContext.Provider>
  )
}
