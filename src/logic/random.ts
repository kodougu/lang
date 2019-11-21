export function randomElement(arr: Array<any>): any {
  return arr[Math.floor(Math.random() * arr.length)]
}
export function randomString(length?: number, seed?: string): string {
  const SEED = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const LENGTH = 4
  if (!seed) seed = SEED
  if (!length) length = LENGTH
  // ランダムな文字列の生成
  let result = ''
  for (let i = 0; i < length; i++) {
    result += seed.charAt(Math.floor(Math.random() * seed.length))
  }
  return result
}
