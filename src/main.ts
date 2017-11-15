export interface ILog {
  debug: Function
}

class DevLog implements ILog {
  debug: any

  constructor(private name: string, debug: any) {
    this.debug = debug(name)
    this.debug.log = console.log.bind(console)
  }
}

const prodLog: ILog = {
  debug() { return },
}

export function setFilter(filter = '/*'): void {
  process.env.DEBUG = filter
  if (typeof localStorage !== 'object' || localStorage == null) { return }
  localStorage.setItem('debug', filter)
}

export function removeFilter(): void {
  delete process.env.DEBUG
  if (typeof localStorage !== 'object' || localStorage == null) { return }
  localStorage.removeItem('debug')
}

export function getLogger(name: string): ILog {
  if (process.env.NODE_ENV === 'development') {
    // tslint:disable-next-line:no-implicit-dependencies
    return new DevLog(name, require('debug'))
  }
  removeFilter()
  return prodLog
}
