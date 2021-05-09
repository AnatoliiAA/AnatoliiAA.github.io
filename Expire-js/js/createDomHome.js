function createElem(tag, ...classNames) {
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  return element;
}

const container = document.getElementById('main-content');
const callback = document.getElementById('callback');
const tools = document.getElementById('tools');
const map = document.getElementById('googleMap');


const aboutContainer = createElem('div', 'container');
const aboutRow = createElem('div', 'row');
aboutContainer.appendChild(aboutRow);
const aboutArticle = createElem('article', 'about-us');
aboutRow.appendChild(aboutArticle);
const aboutHeading = createElem('h1', 'home-heading');
const aboutHeading2 = createElem('h2', 'section-idea');
aboutArticle.appendChild(aboutHeading);
aboutArticle.appendChild(aboutHeading2);
aboutHeading.append(document.createTextNode(aboutUs.header));
aboutHeading2.append(document.createTextNode(aboutUs.idea));

const aboutMore = createElem('section', 'about-us__more');
const aboutMoreText = createElem('p', 'about-us__text', 'about-us__text--big');
const aboutMoreLink = createElem('a', 'about-us__link');
const aboutMoreIcon = createElem('span', 'about-us__icon');
aboutMoreLink.append(document.createTextNode('the more you know'));
aboutMoreText.append(document.createTextNode(aboutUs.more));
aboutMoreLink.appendChild(aboutMoreIcon);
aboutMore.appendChild(aboutMoreText);
aboutMore.appendChild(aboutMoreLink);
aboutMoreLink.setAttribute('href', '#');
aboutArticle.appendChild(aboutMore);

const aboutHeadings = aboutUs.sectionHeadings.split(',');
const aboutContent = aboutUs.sectionContent.split('#');
const aboutTypes = ['typo', 'set', 'ruler'];

for (let i = 0; i < 3; i++) {
  const aboutOption = createElem('section', 'about-us__option');
  const aboutOptionHeading = createElem('h3', 'about-us__skill-heading');
  const aboutOptionText = createElem('p', 'about-us__text');
  const aboutOptionIcon = createElem('span', 'about-us__skill-icon', `about-us__skill-icon--${aboutTypes[i]}`);
  aboutOption.appendChild(aboutOptionHeading);
  aboutOption.appendChild(aboutOptionText);
  aboutOptionHeading.appendChild(aboutOptionIcon);
  aboutOptionHeading.append(document.createTextNode(aboutHeadings[i]));
  aboutOptionText.append(document.createTextNode(aboutContent [i]));
  aboutArticle.appendChild(aboutOption);
}

const paralaxArticle = createElem('article', 'paralax');
const paralaxContainer = createElem('div', 'container');
const paralaxRow = createElem('div', 'row');
const paralaxHeading = createElem('h1', 'home-heading', 'home-heading--centered', 'home-heading--white');
const paralaxHeading2 = createElem('h2', 'section-idea', 'section-idea--centered', 'section-idea--white');
const paralaxContent = createElem('div', 'paralax__content');
const paralaxText = createElem('p', 'paralax__quote');
const paralaxQuote = createElem('span', 'paralax__icon');
const paralaxTextAuth = createElem('p', 'paralax__quote-auth');

paralaxArticle.appendChild(paralaxContainer);
paralaxContainer.appendChild(paralaxRow);
paralaxRow.appendChild(paralaxHeading);
paralaxRow.appendChild(paralaxHeading2);
paralaxRow.appendChild(paralaxContent);
paralaxContent.appendChild(paralaxText);
paralaxContent.appendChild(paralaxTextAuth);
paralaxText.appendChild(paralaxQuote);
paralaxHeading.append(document.createTextNode(paralax.header));
paralaxHeading2.append(document.createTextNode(paralax.idea));
paralaxText.append(document.createTextNode(paralax.sectionContent));
paralaxTextAuth.innerHTML = paralax.author;

const paralaxBenefits = createElem('div', 'benefits');
const benefitsContainer = createElem('div', 'container');
const benefitsRow = createElem('div', 'row');
const benefitsIconUser = createElem('div', 'benefits__icon', 'benefits__icon--user');
const benefitsIconCart = createElem('div', 'benefits__icon', 'benefits__icon--cart');
const benefitsIconComm = createElem('div', 'benefits__icon', 'benefits__icon--comment');
const benefitsIconCopy = createElem('div', 'benefits__icon', 'benefits__icon--copy');
const benefitsInfo1 = createElem('div', 'benefits__info');
const benefitsInfo2 = createElem('div', 'benefits__info');
const benefitsInfo3 = createElem('div', 'benefits__info');
const benefitsInfo4 = createElem('div', 'benefits__info');
const benefitsNumberUser = createElem('p', 'benefits__number');
const benefitsNumberCart = createElem('p', 'benefits__number');
const benefitsNumberComm = createElem('p', 'benefits__number');
const benefitsNumberCopy = createElem('p', 'benefits__number');
const benefitsTextUser = createElem('p', 'benefits__text');
const benefitsTextCart = createElem('p', 'benefits__text');
const benefitsTextComm = createElem('p', 'benefits__text');
const benefitsTextCopy = createElem('p', 'benefits__text');

paralaxArticle.appendChild(paralaxBenefits);
paralaxBenefits.appendChild(benefitsContainer);
benefitsContainer.appendChild(benefitsRow);

benefitsRow.appendChild(benefitsIconUser);
benefitsRow.appendChild(benefitsInfo1);
benefitsInfo1.appendChild(benefitsNumberUser);
benefitsInfo1.appendChild(benefitsTextUser);
benefitsNumberUser.append(document.createTextNode(paralax.userCount));
benefitsTextUser.append(document.createTextNode('Happy users'));

benefitsRow.appendChild(benefitsIconCart);
benefitsRow.appendChild(benefitsInfo2);
benefitsInfo2.appendChild(benefitsNumberCart);
benefitsInfo2.appendChild(benefitsTextCart);
benefitsNumberCart.append(document.createTextNode(paralax.soldCount));
benefitsTextCart.append(document.createTextNode('Sold products'));

benefitsRow.appendChild(benefitsIconComm);
benefitsRow.appendChild(benefitsInfo3);
benefitsInfo3.appendChild(benefitsNumberComm);
benefitsInfo3.appendChild(benefitsTextComm);
benefitsNumberComm.append(document.createTextNode(paralax.commentsCount));
benefitsTextComm.append(document.createTextNode('Comments'));

benefitsRow.appendChild(benefitsIconCopy);
benefitsRow.appendChild(benefitsInfo4);
benefitsInfo4.appendChild(benefitsNumberCopy);
benefitsInfo4.appendChild(benefitsTextCopy);
benefitsNumberCopy.append(document.createTextNode(paralax.userCount));
benefitsTextCopy.append(document.createTextNode('Lines of code'));

const latestArticle = createElem('article', 'latest-posts');
const latestContainer = createElem('div', 'container');
const latestRow = createElem('div', 'row');
const latestSliderContainer = createElem('div', 'slider-container');
const latestHeading = createElem('h1', 'home-heading', 'home-heading--centered');
const latestHeading2 = createElem('h2', 'section-idea', 'section-idea--centered');

latestArticle.appendChild(latestContainer);
latestContainer.appendChild(latestRow);
latestRow.appendChild(latestHeading);
latestRow.appendChild(latestHeading2);
latestRow.appendChild(latestSliderContainer);
latestHeading.append(document.createTextNode(latest.header));
latestHeading2.append(document.createTextNode(latest.idea));
latestSliderContainer.id = 'latest-slider';

function createNewPostOnHome(index, type = 'normal') {
  const newPost = createElem('div', 'latest-posts__post');
  const postThumb = createElem('div', 'latest-posts__thumb');
  const postTitle = createElem('a', 'latest-posts__title');
  postTitle.append(document.createTextNode(latest.posts[index].header));
  const postAuthor = createElem('a', 'latest-posts__author');
  const postComments = createElem('a', 'latest-posts__comments');
  const postDate = createElem('a', 'latest-posts__date');
  const postAuthorIcon = createElem('span', 'latest-posts__icon', 'latest-posts__icon--author');
  const postCommentsIcon = createElem('span', 'latest-posts__icon', 'latest-posts__icon--comments');
  const postDateIcon = createElem('span', 'latest-posts__icon', 'latest-posts__icon--date');
  const postText = createElem('p', 'latest-posts__text');
  const postMore = createElem('a', 'latest-posts__read-more');
  if (type === 'next' || index > 2 && type != 'prev') {
    newPost.classList.add('latest-posts__post--next');
    newPost.classList.add('latest-posts__post--absolute');
  }
  if (type === 'prev') {
    newPost.classList.add('latest-posts__post--prev');
    newPost.classList.add('latest-posts__post--absolute');
  }
  newPost.appendChild(postThumb);
  newPost.appendChild(postTitle);
  newPost.appendChild(postAuthor);
  newPost.appendChild(postDate);
  newPost.appendChild(postComments);
  newPost.appendChild(postText);
  newPost.appendChild(postMore);
  postAuthor.appendChild(postAuthorIcon);
  postComments.appendChild(postCommentsIcon);
  postDate.appendChild(postDateIcon);
  postAuthor.append(document.createTextNode(latest.posts[index].authorName));
  postComments.append(document.createTextNode(latest.posts[index].comments));
  postDate.append(document.createTextNode(latest.posts[index].day + ' ' + latest.posts[index].month + ' ' + latest.posts[index].year));
  postText.append(document.createTextNode(latest.posts[index].mainText));
  postMore.append(document.createTextNode('read more'));

  if (type === 'prev') {
    latestSliderContainer.prepend(newPost);
  } else {
    latestSliderContainer.appendChild(newPost);
  }
}
latest.posts.forEach((post, i) => {

});

for (i = 0; i < 3; i++) {
  createNewPostOnHome(i);
}
const latestLinkPrev = createElem('a', 'slider-control', 'slider-control--prev', 'slider-control--red');
const latestLinkNext = createElem('a', 'slider-control', 'slider-control--next', 'slider-control--red');
const latestIconPrev = createElem('span', 'slider-control__icon', 'slider-control__icon--prev');
const latestIconNext = createElem('span', 'slider-control__icon', 'slider-control__icon--next');
latestIconNext.id = 'next';
latestIconPrev.id = 'prev';
latestLinkPrev.appendChild(latestIconPrev);
latestLinkNext.appendChild( latestIconNext);
latestContainer.appendChild(latestLinkPrev);
latestContainer.appendChild(latestLinkNext);


const portfolioArticle = createElem('article', 'portfolio');
const portfolioHeading = createElem('h1', 'home-heading', 'home-heading--centered');
const portfolioList = createElem('div', 'portfolio__list');
const portfolioMore = createElem('div', 'portfolio__read-more');
const portfolioReadMore = createElem('a', 'portfolio__more');

portfolio.posts.forEach((post) => {
  const portfolioItem = createElem('div', 'portfolio__item');
  const portfolioInside = createElem('a', 'portfolio__inside');
  const portfolioInfo = createElem('div', 'portfolio__info');
  const portfolioTitle = createElem('h2', 'portfolio__heading');
  const portfolioDescription = createElem('p', 'portfolio__description');
  const portfolioHover = createElem('div', 'portfolio__hover');
  const portfolioHoverImg = createElem('img', 'portfolio__links-back');
  const portfolioLinks = createElem('div', 'portfolio__links');
  const portfolioLinkLink = createElem('a', 'portfolio__link');
  const portfolioLinkZoom = createElem('a', 'portfolio__link');
  const portfolioIconLink = createElem('span', 'portfolio__icon', 'portfolio__icon--link');
  const portfolioIconZoom = createElem('span', 'portfolio__icon', 'portfolio__icon--zoom');

  portfolioItem.appendChild(portfolioInside);
  portfolioItem.appendChild(portfolioLinks);
  portfolioInside.appendChild(portfolioInfo);
  portfolioInside.appendChild(portfolioHover);
  portfolioInfo.appendChild(portfolioTitle);
  portfolioInfo.appendChild(portfolioDescription);
  portfolioHover.appendChild(portfolioHoverImg);
  portfolioLinks.appendChild(portfolioLinkLink);
  portfolioLinks.appendChild(portfolioLinkZoom);
  portfolioLinkLink.appendChild(portfolioIconLink);
  portfolioLinkZoom.appendChild(portfolioIconZoom);

  portfolioHoverImg.setAttribute('src', 'img/hover-portfolio.png');
  portfolioInside.setAttribute('href', '#');

  portfolioTitle.append(document.createTextNode(post.header));
  portfolioDescription.append(document.createTextNode(post.description));

  portfolioList.appendChild(portfolioItem);
});

portfolioArticle.appendChild(portfolioHeading);
portfolioArticle.appendChild(portfolioList);
portfolioArticle.appendChild(portfolioMore);
portfolioMore.appendChild(portfolioReadMore);
portfolioHeading.append(document.createTextNode(portfolio.header));
portfolioReadMore.append(document.createTextNode('view more'));
portfolioReadMore.setAttribute('href', '#');

const opinionArticle = createElem('article', 'opinion');
const opinionContainer = createElem('div', 'container');
const opinionRow = createElem('div', 'row');
const opinionHeader = createElem('h1', 'home-heading', 'home-heading--centered', 'home-heading--white');
const opinionShort = createElem('div', 'opinion__comment', 'opinion__comment--short');
const opinionContent = createElem('div', 'opinion__content');
const opinionBorder = createElem('div', 'opinion__border');
const opinionAva = createElem('div', 'opinion__author');
const opinionAvaBorder = createElem('div', 'opinion__border-author');
const opinionAuthor = createElem('h2', 'opinion__name');
const opinionJob = createElem('p', 'opinion__job');
const opinionShortText = createElem('p', 'opinion__text', 'opinion__text--italic');
const opinionFull = createElem('div', 'opinion__comment', 'opinion__comment--extended');
const opinionContent2 = createElem('div', 'opinion__content');
const opinionBorder2 = createElem('div', 'opinion__border', 'opinion__border--large');
const opinionDown = createElem('a', 'opinion__link');
const opinionIconDown = createElem('span', 'opinion__icon', 'opinion__icon--down');
const opinionText = createElem('p', 'opinion__text', 'opinion__text--moved-top');
const opinionTop = createElem('a', 'opinion__link');
const opinionIconTop = createElem('span', 'opinion__icon', 'opinion__icon--top');
const opinionInactive = createElem('a', 'opinion__link');
opinionArticle.appendChild(opinionContainer);
opinionContainer.appendChild(opinionRow);
opinionRow.appendChild(opinionHeader);
opinionRow.appendChild(opinionShort);
opinionShort.appendChild(opinionContent);
opinionContent.appendChild(opinionBorder);
opinionContent.appendChild(opinionAva);
opinionAva.appendChild(opinionAvaBorder);
opinionContent.appendChild(opinionAuthor);
opinionContent.appendChild(opinionJob);
opinionContent.appendChild(opinionShortText);
opinionRow.appendChild(opinionFull);
opinionFull.appendChild(opinionContent2);
opinionContent2.appendChild(opinionBorder2);
opinionBorder2.appendChild(opinionDown);
opinionDown.appendChild(opinionIconDown);
opinionContent2.appendChild(opinionText);
opinionContent2.appendChild(opinionTop);
opinionTop.appendChild(opinionIconTop);
opinionContent2.appendChild(opinionInactive);

opinionHeader.append(document.createTextNode(opinion.header));
opinionAuthor.append(document.createTextNode(opinion.comments[0].author));
opinionJob.append(document.createTextNode(opinion.comments[0].authorJob));
opinionShortText.append(document.createTextNode(opinion.comments[0].mainText.split('.')[0]));
opinionText.append(document.createTextNode(opinion.comments[0].mainText));
opinionInactive.append(document.createTextNode('inactive'));

container.appendChild(aboutContainer);
container.appendChild(paralaxArticle);
container.appendChild(latestArticle);
container.appendChild(portfolioArticle);
container.appendChild(tools);
container.appendChild(opinionArticle);

container.appendChild(callback);
container.appendChild(map);

var slider = document.getElementById('latest-slider');
var slides = document.querySelectorAll('.latest-posts__post');
var nextSlide = document.getElementById('next');
var prevSlide = document.getElementById('prev');
var timer = true;

let slidesCounter = 3;
let slidesCounterBack = latest.posts.length;

nextSlide.addEventListener('click', goNext);
prevSlide.addEventListener('click', goPrev);

let distance;

slider.addEventListener('mousedown', countX);
slider.addEventListener('mouseup', countDiscance);

function countX() {
  distance = event.clientX;
}

function countDiscance() {
  if (distance - event.clientX > 100) {
    goNext();
  } else if (distance - event.clientX < -100) {
    goPrev();
  }
}

function goPrev() {
  if (slidesCounterBack <= 0) {
    slidesCounterBack = latest.posts.length;
  }
  if (slidesCounter <= 0) {
    slidesCounter = 5;
  }
  slidesCounterBack--;
  slidesCounter--;

  createNewPostOnHome(slidesCounterBack, 'prev');

  slides = document.querySelectorAll('.latest-posts__post');
  prevSlide.removeEventListener('click', goPrev);
  nextSlide.removeEventListener('click', goNext);
  slider.removeEventListener('mouseup', countDiscance);
  timer = false;
  setTimeout(function() {
    removeLast();
  }, 0);
}

function goNext() {
  if (slidesCounter >= latest.posts.length) {
    slidesCounter = 0;
  }
  if (slidesCounterBack >= latest.posts.length) {
    slidesCounterBack = 0;
  }
  if (slidesCounter < 3) {
    createNewPostOnHome(slidesCounter, 'next');
  } else {
    createNewPostOnHome(slidesCounter);
  }
  slidesCounterBack++;
  slidesCounter++;

  slides = document.querySelectorAll('.latest-posts__post');
  prevSlide.removeEventListener('click', goPrev);
  nextSlide.removeEventListener('click', goNext);
  slider.removeEventListener('mouseup', countDiscance);
   timer = false;
  setTimeout(function() {
    removeFirst();
  }, 0);
}


function removeFirst() {
  slides[0].classList.add('latest-posts__post--moved-b');
  slides[1].classList.add('latest-posts__post--moved-b');
  slides[2].classList.add('latest-posts__post--moved-b');
  slides[3].classList.add('latest-posts__post--next-process');
  setTimeout(function() {
    slides[1].style.transition = 'all 0s';
    slides[2].style.transition = 'all 0s';
    slides[3].style.transition = 'all 0s';
    slides[0].remove();
    slides[3].classList.remove('latest-posts__post--absolute');
    slides[3].classList.remove('latest-posts__post--next-process');
    slides[3].classList.remove('latest-posts__post--next');
    slides[1].classList.remove('latest-posts__post--moved-b');
    slides[2].classList.remove('latest-posts__post--moved-b');
  }, 1000);
  setTimeout(function() {
    slides[1].style.transition = 'all 1s ease-out';
    slides[2].style.transition = 'all 1s ease-out';
    slides[3].style.transition = 'all 1s ease-out';
    nextSlide.addEventListener('click', goNext);
    prevSlide.addEventListener('click', goPrev);
    slider.addEventListener('mouseup', countDiscance);
    timer = true;
  }, 1100);
}

function removeLast() {
  slides[0].classList.add('latest-posts__post--prev-process');
  slides[1].classList.add('latest-posts__post--moved-f');
  slides[2].classList.add('latest-posts__post--moved-f');
  slides[3].classList.add('latest-posts__post--moved-f');

  setTimeout(function() {
    slides[0].style.transition = 'all 0s';
    slides[1].style.transition = 'all 0s';
    slides[2].style.transition = 'all 0s';
    slides[0].classList.remove('latest-posts__post--absolute');
    slides[0].classList.remove('latest-posts__post--prev-process');
    slides[0].classList.remove('latest-posts__post--prev');
    slides[1].classList.remove('latest-posts__post--moved-f');
    slides[2].classList.remove('latest-posts__post--moved-f');
    slides[3].classList.remove('latest-posts__post--moved-f');
    slides[3].remove();
  }, 1000);
  setTimeout(function() {
    slides[0].style.transition = 'all 1s ease-out';
    slides[1].style.transition = 'all 1s ease-out';
    slides[2].style.transition = 'all 1s ease-out';
    prevSlide.addEventListener('click', goPrev);
    nextSlide.addEventListener('click', goNext);
    slider.addEventListener('mouseup', countDiscance);
    timer = true;
  }, 1100);
}

setInterval(function() {
  if (timer) {
    goNext();
  }
}, 3000);

function clearSliderInterval() {
  if (timer) {
    timer = false;
  }
}

slider.addEventListener('mouseover', clearSliderInterval);
slider.addEventListener('mouseleave', startSliderInterval);

function startSliderInterval() {
  timer = true;
}

