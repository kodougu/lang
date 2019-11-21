/**
 * 配列が undefined や null の可能性がある場合に、いちいち if でチェックしないと forEach がエラーになる
 * forEach で回したい場合は、空の配列であれば良いので、 undefined や null の場合に空の配列とする
 * @param arr
 */
export default function actualArray<T>(arr: T[] | undefined | null): T[] {
  if (!arr) {
    return []
  }
  return arr
}
