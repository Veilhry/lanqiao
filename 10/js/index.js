let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数
let listGroup = document.querySelector('.list-group')
let page = document.querySelector('.col #pagination')
// TODO：待补充代码
let list = []
axios.get('./js/carlist.json').then(res => {
  console.log(res.data);
  list = res.data
  maxPage = list.length
  console.log(maxPage);


  for (let i = 0; i < 5; i++) {
    let price = list[i].price / 100
    let html = `<a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${list[i].name}</h5>
    <small>${price.toFixed(2)}元</small>
    </div>
    <p class="mb-1">${list[i].description}</p>
    </a>`
    listGroup.innerHTML += html
  }
  page.innerHTML = `共${Math.ceil(maxPage / 5)}页，当前${pageNum}页`
})

var title = document.querySelector('h5.mb-1')
var p = document.querySelector('p.mb-1')
var money = document.querySelector('small')
// console.log(title.innerHTML);
// console.log(money.innerHTML);
// console.log(p.innerHTML);

// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  if (pageNum == 1) return
  pageNum--
  var start = (pageNum - 1) * 5
  var end = start + 5
  listGroup.innerHTML = ''
  if (start + 5 < 0)
    end = 0
  for (let i = start; i < end; i++) {
    let price = list[i].price / 100
    let html = `<a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${list[i].name}</h5>
    <small>${price.toFixed(2)}元</small>
    </div>
    <p class="mb-1">${list[i].description}</p>
    </a>`
    listGroup.innerHTML += html
  }
  if (pageNum == 1) {
    this.classList.add('disabled')
  }
  if (pageNum <= maxPage) {
    next.classList.remove('disabled')
  }
  page.innerHTML = `共${Math.ceil(maxPage / 5)}页，当前${pageNum}页`
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  if (pageNum == 4) return
  var start = pageNum * 5
  var end = start + 5
  listGroup.innerHTML = ''
  if (start + 5 >= maxPage)
    end = maxPage
  for (let i = start; i < end; i++) {
    let price = list[i].price / 100
    let html = `<a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${list[i].name}</h5>
    <small>${price.toFixed(2)}元</small>
    </div>
    <p class="mb-1">${list[i].description}</p>
    </a>`
    listGroup.innerHTML += html
  }
  pageNum++
  if (pageNum > 1) {
    prev.classList.remove('disabled')
  }
  if (pageNum == 4) {
    this.classList.add('disabled')
  }
  page.innerHTML = `共${Math.ceil(maxPage / 5)}页，当前${pageNum}页`
};
