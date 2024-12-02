"use client"

import { useAppDispatch, useAppSelector } from '@/store/reduxHooks'
import { getCounterValue } from '@/store/features/counter/counterSelector'
import { decrement, increment } from '@/store/features/counter/counterSlice'

const CounterActions = () => {
  // Type the selector and state
  const count = useAppSelector(getCounterValue)

  // Type the dispatch hook
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default CounterActions;