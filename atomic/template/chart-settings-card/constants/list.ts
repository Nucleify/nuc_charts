export interface ChartGroup {
  module: string
  items: string[]
}

export const displayChartGroups: ChartGroup[] = [
  {
    module: 'nuc_activity',
    items: ['Activity'],
  },
  {
    module: 'nuc_admin',
    items: ['Admin'],
  },
  {
    module: 'nuc_entities',
    items: ['Article', 'Contact', 'Entities', 'Feature', 'Money', 'Technology'],
  },
  {
    module: 'nuc_entities_structural',
    items: ['Card', 'Link', 'Question', 'Structural'],
  },
  {
    module: 'nuc_documentation',
    items: ['Documentation'],
  },
  {
    module: 'nuc_files',
    items: ['File'],
  },
  {
    module: 'nuc_tasks',
    items: ['Task'],
  },
] as const

export const displayChartList: string[] = displayChartGroups.flatMap(
  (group) => group.items
)
