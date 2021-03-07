/**
 * This function is workaround for react-router v6 issue: https://github.com/ReactTraining/react-router/issues/7216
 * @param path Path.
 * @returns Modified path with base url.
 */
export function publicUrlPath(path: string): string {
  return process.env.PUBLIC_URL + path
}
