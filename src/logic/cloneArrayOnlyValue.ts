import cloneOnlyValue, { Resource } from './cloneOnlyValue'

/**
 * 指定のオブジェクトの値のみをコピーして新しいインスタンスを生成する
 * 値： boolean, number, string のみ
 * @param obj
 */
export default function cloneArrayOnlyValue<T extends Resource>(arr: T[]) {
  const results: T[] = []
  arr.forEach(i => {
    results.push(cloneOnlyValue(i))
  })
  return results
}
