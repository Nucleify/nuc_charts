'use client'

import type { JSX } from 'react'
import { useMemo } from 'react'

import type {
  NucChartSettingsCardInterface,
  NucDisplayChartsStateKeyType,
} from 'nucleify'
import {
  AdLabel,
  AdSelectButton,
  getDisplayChartGroups,
  NucSettingsCard,
  useDisplayChartsStore,
} from 'nucleify'

const options = ['On', 'Off']

export function NucChartSettingsCard({
  heading,
}: NucChartSettingsCardInterface): JSX.Element {
  const displayChartsStore = useDisplayChartsStore()
  const displayChartGroups = useMemo(() => getDisplayChartGroups(), [])

  return (
    <NucSettingsCard
      heading={heading || 'Settings'}
      showButton
      onButtonClick={() => displayChartsStore.setAllTo(true)}
    >
      {displayChartGroups.map((group) => (
        <div key={group.name} className="settings-card-group">
          <h4 className="settings-card-group-title">{group.name}</h4>
          <ul className="settings-card-item-list">
            {(group.items ?? []).map((item) => (
              <li key={item} className="settings-card-item">
                <AdLabel label={item} forInput={item} />
                <AdSelectButton
                  adType="main"
                  value={
                    displayChartsStore[item as NucDisplayChartsStateKeyType]
                      ? 'On'
                      : 'Off'
                  }
                  options={options}
                  onChange={() =>
                    displayChartsStore.toggle(
                      item as NucDisplayChartsStateKeyType
                    )
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </NucSettingsCard>
  )
}
