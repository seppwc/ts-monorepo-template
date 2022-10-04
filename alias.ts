import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@unocss/astro': r('./packages/astro/src/'),
  '~core': r('./packages/core/src'),
  '~cli': r('./packages/cli/src'),
  '~shared': r('./packages/shared/src'),
}
