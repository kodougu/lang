import { cloneDeep } from 'lodash'

export interface Resource {
  [key: string]: any
}

const targetTypes: string[] = ['boolean', 'number', 'string']

/**
 * 指定のオブジェクトの値のみをコピーして新しいインスタンスを生成する
 * 値： boolean, number, string のみ
 * @param obj
 */
export default function cloneOnlyValue<T extends Resource>(obj: T): T {
  const copy: T = cloneDeep(obj)
  for (const props in copy) {
    const type = Object.prototype.toString
      .call(copy[props])
      .slice(8, -1)
      .toLowerCase()
    if (!targetTypes.includes(type)) {
      delete copy[props]
    }
  }
  return copy
}
