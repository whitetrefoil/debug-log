import debug from 'debug'


type DebuggerFn = (formatter: unknown, ...args: unknown[]) => void

export interface ILog {
  debug: DebuggerFn
}

const factoryDevLog = (name: string): ILog => {
  const d = debug(name)
  return {
    debug: (formatter: unknown, ...args: unknown[]) => {
      d(formatter, ...args)
    },
  }
}

const factoryProdLog = (): ILog => ({
  debug: () => undefined,
})

export function getLogger(name: string): ILog {
  if (typeof process !== 'undefined'
    && process != null
    && typeof process.env !== 'undefined'
    && process.env != null
    && process.env.NODE_ENV === 'development'
  ) {
    return factoryDevLog(name)
  }
  return factoryProdLog()
}
