// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
  let res = []
  // console.log(cb(e));
  this.forEach((ele,index)=>{
    let flag = cb(ele)
    if(flag){
      res.push(this[index])
    }
    }
  )
  return res
};
