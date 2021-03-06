/**
 * buddha like sort
 * strong and powerful
 *
 * 代码就在这里，如果和它有缘，数组自然会进行排序
 * @param  {Array}    arr   要进行排序的数组
 * @param  {Boolean}  desc  是否为降序排序
 */

function buddhaStyleSort (arr, desc) {
  let len = arr.length - 1
  while (!arr.every((item, index) => {
    return len === index || (desc ? item >= arr[index + 1] : item <= arr[index + 1])
  })) {
    arr = sortArr(arr)
  }

  return arr
}

function sortArr (arr) {
  console.log('trigger sortArr')
  return arr.sort(_ => Math.random() * 2 | 0 % 2)
}

// test code
console.log(buddhaStyleSort([3, 1, 2]))
console.log(buddhaStyleSort([3, 1, 2], true))
