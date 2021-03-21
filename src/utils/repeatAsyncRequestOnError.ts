/**
 * Repeat Async request on error.
 * For example, it can be used for handling Unauthorized (401) error by sending second request.
 * @param fn Input function
 */
export function repeatAsyncRequestOnError<T extends Array<unknown>, U>(fn: (...args: T) => Promise<U>) {
  return (...args: T) => fn(...args).catch(() => fn(...args))
}
