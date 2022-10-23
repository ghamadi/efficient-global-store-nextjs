import { useCallback, useContext, useEffect, useState } from "react";
import { Store, StoreContext } from "./store-provider";

export default function useStore<K extends keyof Store>(key?: K):  [Store | Store[K], ((value: Partial<Store>) => void)] {
  let storeContext = useContext(StoreContext)
  if (!storeContext) {
    throw new Error ('useStore must be used within a StoreProvider')
  }

  const selector = useCallback((store: Store) => {
    return key ? store[key] : store
  }, [key])
  
  let [storeState, setStoreState] = useState(selector(storeContext?.get() as Store))

  useEffect(() => { 
    return storeContext?.subscribe(() => {
      setStoreState(selector(storeContext?.get() as Store))
    })
  }, [selector, storeContext])

  return [storeState, storeContext.set]
}