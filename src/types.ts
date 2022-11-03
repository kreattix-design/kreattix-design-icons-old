export type IconNames = 'Logo' | 'Close' | 'Plus'
export interface IconNameListProps {
  [key: string]:
    | string
    | React.FunctionComponent<{}>
    | React.ComponentClass<{}, unknown>
}
