import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import * as nucleify from 'nucleify'
import { testCases } from './cases'

describe('useDisplayChartsStore > toggle', (): void => {
  let store: nucleify.NucDisplayChartsStateInterface
  let keys: nucleify.NucDisplayChartsStateKeyType[]

  beforeEach((): void => {
    setActivePinia(createPinia())

    store = nucleify.useDisplayChartsStore()
    keys = Object.keys(store.$state)
  })

  testCases.forEach(({ value, description }): void => {
    it(description, (): void => {
      for (const key of keys) {
        if (value === false) {
          store.toggle(key)
        }

        store.toggle(key)

        expect(store[key]).toBe(!value)
      }
    })
  })
})
