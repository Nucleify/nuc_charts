import type { SettingsGroupInterface } from 'atomic'
import { modulesGroups } from 'atomic'

export const displayChartGroups: SettingsGroupInterface[] =
  typeof window !== 'undefined' && typeof modulesGroups === 'function'
    ? [
        {
          name: 'nuc_admin',
          items: ['Admin'],
        },
        ...modulesGroups(true),
      ]
    : []

export const displayChartList: string[] =
  typeof window !== 'undefined'
    ? displayChartGroups.flatMap((group) => group.items as string[])
    : []
