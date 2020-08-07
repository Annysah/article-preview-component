const shareImg = document.querySelector('share-img');
const share = document.querySelector('share');
shareImg.addEventListener('click', show);
function show () {
    share.style.visibility = 'visible';
    shareImg.style.visibility = 'hidden';
}