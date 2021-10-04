function countFollow() {
    var count = document.querySelector('.body-following-content-count').textContent;
    var divEle = document.querySelector('.body-following-action');
    if(divEle.className.includes('followed'))
    {
        divEle.classList.remove('followed');
        document.querySelector('.body-following-content-count').textContent = parseInt(count) -1;
        divEle.textContent = "Theo dõi";
    }
    else {
        divEle.classList.add('followed');
        document.querySelector('.body-following-content-count').textContent = parseInt(count) +1;
        divEle.textContent = "Đã theo dõi";
    }
}