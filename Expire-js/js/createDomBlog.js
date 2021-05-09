function createElem(tag,...classNames) {
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  return element;
}

const container = document.getElementById('main-content');


const createBlogPost = function (blogPostObj) {
  const row = createElem('div', 'row');
  const fragment = document.createDocumentFragment();
  const postArticle = createElem('article', 'post', `post--${blogPostObj.type}`);
  const postDate = createElem('div', 'post__date');

  const postYear = createElem('p', 'post__text', 'post__text--year');
  const postMonth = createElem('p', 'post__text', 'post__text--month');
  const postDay = createElem('p', 'post__text', 'post__text--day');

  const postContent = createElem('div', 'post__content');
  const postWrapper = createElem('div', 'wrapper');
  const postThumb = createElem('div', 'post__thumb');
  if (blogPostObj.type === 'simple') {
    postThumb.classList.add('post__thumb--simple');
  }
  const postMark = createElem('div', 'post__mark');

  const postHeader = createElem('h1', 'post__heading');
  const postAuthorIcon = createElem('span', 'post__icon', 'post__icon--author');
  const postAuthorLink = createElem('a', 'post__author');
  const postCommentsIcon = createElem(
    'span',
    'post__icon',
    'post__icon--comments'
    );
  const postCommentsLink = createElem('a', 'post__comments');
  const postText = createElem('p', 'post__text');
  const postButton = createElem('button', 'post__read-more');

  postYear.append(document.createTextNode(blogPostObj.year));
  postMonth.append(document.createTextNode(blogPostObj.month));
  postDay.append(document.createTextNode(blogPostObj.day));
  postHeader.append(document.createTextNode(blogPostObj.header));
  postAuthorLink.append(document.createTextNode(blogPostObj.authorName));
  postCommentsLink.append(document.createTextNode(blogPostObj.comments));
  postText.append(document.createTextNode(blogPostObj.mainText));
  postButton.append(document.createTextNode('read more'));

  postAuthorLink.setAttribute('href', '#');
  postCommentsLink.setAttribute('href', '#');

  fragment.appendChild(row);
  row.appendChild(postArticle);
  postArticle.appendChild(postDate);
  postDate.appendChild(postYear);
  postDate.appendChild(postMonth);
  postDate.appendChild(postDay);
  postArticle.appendChild(postContent);
  postContent.appendChild(postWrapper);
  postWrapper.appendChild(postThumb);
  postWrapper.appendChild(postHeader);
  postWrapper.appendChild(postAuthorIcon);
  postWrapper.appendChild(postAuthorLink);
  postWrapper.appendChild(postCommentsIcon);
  postWrapper.appendChild(postCommentsLink);
  postWrapper.appendChild(postText);
  postWrapper.appendChild(postButton);
  postThumb.appendChild(postMark);
  container.appendChild(fragment);
}

for (let i = 0; i < blogPosts.length; i++) {
  createBlogPost(blogPosts[i]);
}

const postNav = createElem('nav', 'post-nav');
const postNavButton = createElem('button', 'post-nav__button');
const postNavButton2 = createElem('button', 'post-nav__button');
const postNavButtonNext = createElem('button', 'post-nav__button', 'post-nav__button--next');

postNavButton.append(document.createTextNode('1'));
postNavButton2.append(document.createTextNode('2'));
postNavButtonNext.append(document.createTextNode('next page'));

container.appendChild(postNav);
postNav.appendChild(postNavButton);
postNav.appendChild(postNavButton2);
postNav.appendChild(postNavButtonNext);
