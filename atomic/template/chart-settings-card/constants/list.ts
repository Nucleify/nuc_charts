import type { SettingsGroupInterface } from 'nucleify'

import { modulesGroups } from '../../../../../nuc_settings/constants/modules'

export function getDisplayChartGroups(): SettingsGroupInterface[] {
  return [
    {
      name: 'nuc_admin',
      items: ['Admin'],
    },
    ...modulesGroups(true),
  ]
}

export function getDisplayChartList(): string[] {
  return getDisplayChartGroups().flatMap((group) => group.items as string[])
}

export const displayChartGroups: SettingsGroupInterface[] = []
export const displayChartList: string[] = []

if (typeof window !== 'undefined') {
  displayChartGroups.push(...getDisplayChartGroups())
  displayChartList.push(...getDisplayChartList())
}
