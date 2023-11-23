function flattenArray(arr) {
    let result = []; // 空数组等着拿结果
    arr.map(item => { // 遍历数组中的每个元素
      if (Array.isArray(item)) { // 如果当前元素是数组
        result = result.concat(flattenArray(item)); // 递归，合并
      } else { // 不是数组的话
        result.push(item); // 将当前元素添加到 result 数组中
      }
    });
    return result; // 返回扁平化后的结果
  }