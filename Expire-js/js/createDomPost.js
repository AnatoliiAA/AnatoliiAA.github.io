function createElem(tag,...classNames) {
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  return element;
}

const allComments = document.createDocumentFragment();

function createComment(commentObj, type = 'normal') {
  const newComment = document.createDocumentFragment();
  let postComment = createElem('div', 'comment');
  if (type === 'reply') {
    postComment.classList.add('comment--answer');
  }
  let commentAva = createElem('div', 'comment__author');
  let commentBorder = createElem('div', 'comment__border');
  commentAva.appendChild(commentBorder);
  let commentContent = createElem('div', 'comment__content');
  let commentAuthor = createElem('p', 'comment__author-name');
  commentAuthor.append(document.createTextNode(commentObj.commentAuthor));
  let commentText = createElem('p', 'comment__text');
  commentText.append(document.createTextNode(commentObj.commentText));
  let reply = createElem('a', 'comment__reply');
  reply.setAttribute('href', '#');
  reply.append(document.createTextNode('Reply'));
  newComment.appendChild(postComment);
  postComment.appendChild(commentAva);
  postComment.appendChild(commentContent);
  commentContent.appendChild(commentAuthor);
  commentContent.appendChild(commentText);
  commentContent.appendChild(reply);
  allComments.appendChild(newComment);
  if (commentObj.commentReplies) {
    console.log(commentObj.commentReplies);
    for (let i = 0; i < commentObj.commentReplies.length; i++) {
      createComment(commentObj.commentReplies[i], 'reply');
    }
  }
  return allComments;
}



const container = document.getElementById('main-content');
const share = document.getElementById('share');
const makeComm = document.getElementById('make-comm');
const search = document.getElementById('search');
const searchBorder = document.getElementById('search-border');

const createPost = function (blogPostObj) {
  const row = createElem('div', 'row');
  const fragment = document.createDocumentFragment();
  const postArticle = createElem('article', 'post', `post--${blogPostObj.type}`, 'post--inside');
  const postDate = createElem('div', 'post__date', 'post__date--inside');

  const postYear = createElem('p', 'post__text', 'post__text--year');
  const postMonth = createElem('p', 'post__text', 'post__text--month');
  const postDay = createElem('p', 'post__text', 'post__text--day');

  const postContent = createElem('div', 'post__content', 'post__content--inside');
  const postHeader = createElem('h1', 'post__heading', 'post__heading--inside');
  const postAuthorIcon = createElem('span', 'post__icon', 'post__icon--author', 'post__icon--inside');
  const postAuthorLink = createElem('a', 'post__author', 'post__author--inside');
  const postCommentsIcon = createElem('span', 'post__icon', 'post__icon--comments');
  const postCommentsLink = createElem('a', 'post__comments');
  const postThumb = createElem('div', 'post__thumb', 'post__thumb--inside');
  if (blogPostObj.type === 'simple') {
    postThumb.classList.add('post__thumb--simple');
  }
  const postMark = createElem('div', 'post__mark', 'post__mark--inside');
  const postWrapper = createElem('div', 'wrapper', 'wrapper--inside');

  function splitText(string) {
    const splittedText = string.split('&*');
    for (let i = 0; i< splittedText.length; i++) {
      let someText = createElem('p', 'post__text', 'post__text--inside');
      if (splittedText[i][0] === '~') {
        splittedText[i] = splittedText[i].slice(1);
        someText.classList.add('post__text--quote');
      }
      someText.append(document.createTextNode(splittedText[i]));
      postWrapper.appendChild(someText);
    }
  }
  splitText(blogPostObj.mainText);

  const controls = createElem('div', 'controls');
  const controlsPrev = createElem('a', 'controls__prev');
  const controlsPrevIcon = createElem('span', 'controls__icon', 'controls__icon--prev');
  controlsPrev.appendChild(controlsPrevIcon);
  const controlsNext = createElem('a', 'controls__next');
  controlsNext.append(document.createTextNode('next post'));

  
  const commentSection = createElem('section', 'comments');
  const commentHeader = createElem('h1', 'comments__heading');
  commentSection.appendChild(commentHeader);

  blogPostObj.commentaries.forEach((post) => {
    commentSection.appendChild(createComment(post));
  });

  const sidebar = createElem('aside', 'side-nav');
  sidebar.appendChild(search);
  sidebar.appendChild(searchBorder);
  side.forEach((section) => {
    let headerSide = createElem('h2', 'section__title');
    headerSide.append(document.createTextNode(section.header));
    sidebar.appendChild(headerSide);

    if (section.header === 'Categories') {
      const list = createElem('ul', 'section__list');
      let listItems = section.categories.split(',');
      for (let i = 0; i < listItems.length; i++) {
        let category = createElem('li', 'section__item');
        let categoryLink = createElem('a', 'section__link');
        let categoryLinkIcon = createElem('span', 'section__link-icon');
        category.appendChild(categoryLink);
        categoryLink.appendChild(categoryLinkIcon);
        categoryLink.append(document.createTextNode(listItems[i]));
        categoryLink.setAttribute('href', '#');
        list.appendChild(category);
      }
      sidebar.appendChild(list);
    }

    if (section.header === 'Tags') {
      const allTags = createElem('div', 'section__wrap');
      let tagsList = section.tags.split(',');
      for (let i = 0; i < tagsList.length; i++) {
        let tag = createElem('a', 'section__tag');
        tag.append(document.createTextNode(tagsList[i]));
        tag.setAttribute('href', '#');
        allTags.appendChild(tag);
      }
      sidebar.appendChild(allTags);
    }

    if (section.header === 'Recent posts') {
      const allRecentPosts = document.createDocumentFragment();
      for (let i = 0; i < section.recentPosts.length; i++) {
        const recent = createElem('a', 'section__recent');
        const sectionPost = createElem('div', 'section__post');
        const sectionBorder = createElem('div', 'section__border');
        sectionPost.appendChild(sectionBorder);
        const recentInfo = createElem('div', 'section__recent-info');
        const recentPostHeader = createElem('h2', 'section__recent-title');
        const recentPostDate = createElem('p', 'section__recent-info');
        const recentPostDateIcon = createElem('span', 'section__icon-date');
        recentInfo.appendChild(recentPostHeader);
        recentInfo.appendChild(recentPostDate);
        recentPostDate.appendChild(recentPostDateIcon);
        allRecentPosts.appendChild(recent);
        recent.appendChild(sectionPost);
        recent.appendChild(recentInfo);
        recentPostHeader.append(
          document.createTextNode(section.recentPosts[i].recentPostHeader)
          );
        recentPostDate.append(
          document.createTextNode(section.recentPosts[i].recentPostDate)
          );
      }
      sidebar.appendChild(allRecentPosts);
    }

    if (section.header === 'Twitter feed') {
      const tweet = createElem('div', 'tweet');
      const tweetLink = createElem('a', 'tweet__link');
      const tweetLinkIcon = createElem('span', 'tweet__logo');
      tweetLink.appendChild(tweetLinkIcon);
      const tweetAuthor = createElem('a', 'tweet__author');
      const tweetText = createElem('p', 'tweet__text');
      const tweetDate = createElem('p', 'tweet__date');
      tweet.appendChild(tweetLink);
      tweet.appendChild(tweetAuthor);
      tweet.appendChild(tweetText);
      tweet.appendChild(tweetDate);
      tweetAuthor.append(document.createTextNode(section.tweetAuthor));
      tweetText.append(document.createTextNode(section.tweetContent));
      tweetDate.append(document.createTextNode(section.tweetDate));
      sidebar.appendChild(tweet);
    }
  });

  const relatedRow = createElem('div', 'row');
  const relatedSection = createElem('section', 'related');
  const relatedControl = createElem('div', 'related__control');
  const relatedLinkPrev = createElem('a', 'related__link');
  const relatedLinkPrevIcon = createElem('span', 'related__icon', 'related__icon--prev');
  const relatedContent = createElem('div', 'related__content');
  const relatedHeading = createElem('h1', 'related__heading');
  relatedHeading.append(document.createTextNode('Related posts'));
  const relatedPosts = createElem('div', 'related__posts');

  relatedRow.appendChild(relatedSection);
  relatedSection.appendChild(relatedControl);
  relatedControl.appendChild(relatedLinkPrev);
  relatedLinkPrev.appendChild(relatedLinkPrevIcon);
  relatedSection.appendChild(relatedContent);
  relatedContent.appendChild(relatedHeading);
  relatedContent.appendChild(relatedPosts);

  related.forEach((post) => {
    const relatedPost = createElem('div', 'related__post');
    const relatedBorder = createElem('div', 'related__border');
    const overflow = createElem('div', 'overflow');
    const relatedAbout = createElem('div', 'related__about');
    const relatedTitle = createElem('h2', 'related__title');
    relatedTitle.append(document.createTextNode(post.header));
    const relatedImage = createElem('img', 'related__image');
    relatedImage.setAttribute('src', 'img/hover.png');
    const relatedList = createElem('ul', 'related__list');
    const relatedItemLink = createElem('li', 'related__item');
    const relatedLinkLink = createElem('a', 'related__share-link');
    const relatedLinkLinkIcon = createElem('span', 'related__share-icon', 'related__share-icon--link');
    const relatedItemConv = createElem('li', 'related__item');
    const relatedLinkConv = createElem('a', 'related__share-link');
    const relatedLinkConvIcon = createElem('span', 'related__share-icon', 'related__share-icon--conv');
    const relatedItemMssg = createElem('li', 'related__item');
    const relatedLinkMssg = createElem('a', 'related__share-link');
    const relatedLinkMssgIcon = createElem('span', 'related__share-icon', 'related__share-icon--messg');

    relatedList.appendChild(relatedItemLink);
    relatedList.appendChild(relatedItemConv);
    relatedList.appendChild(relatedItemMssg);

    relatedItemLink.appendChild(relatedLinkLink);
    relatedLinkLink.appendChild(relatedLinkLinkIcon);

    relatedItemConv.appendChild(relatedLinkConv);
    relatedLinkConv.appendChild(relatedLinkConvIcon);

    relatedItemMssg.appendChild(relatedLinkMssg);
    relatedLinkMssg.appendChild(relatedLinkMssgIcon);

    relatedPost.appendChild(relatedBorder);
    relatedPost.appendChild(overflow);
    overflow.appendChild(relatedAbout);
    relatedAbout.appendChild(relatedTitle);
    relatedAbout.appendChild(relatedImage);
    relatedAbout.appendChild(relatedList);

    relatedPosts.appendChild(relatedPost);
  });
  const relatedControl2 = createElem('div', 'related__control');
  const relatedLinkNext = createElem('a', 'related__link');
  const relatedLinkNextIcon = createElem('span', 'related__icon', 'related__icon--next');

  relatedSection.appendChild(relatedControl2);
  relatedControl2.appendChild(relatedLinkNext);
  relatedLinkNext.appendChild(relatedLinkNextIcon);
  relatedLinkPrev.setAttribute('href', '#');
  relatedLinkNext.setAttribute('href', '#');

  postYear.append(document.createTextNode(blogPostObj.year));
  postMonth.append(document.createTextNode(blogPostObj.month));
  postDay.append(document.createTextNode(blogPostObj.day));
  postHeader.append(document.createTextNode(blogPostObj.header));
  postAuthorLink.append(document.createTextNode(blogPostObj.authorName));
  postCommentsLink.append(document.createTextNode(blogPostObj.comments));
  postAuthorLink.setAttribute('href', '#');
  postCommentsLink.setAttribute('href', '#');
  commentHeader.append(document.createTextNode('Say what’s on your mind'));

  fragment.appendChild(row);
  row.appendChild(postArticle);
  row.appendChild(sidebar);
  postArticle.appendChild(postDate);
  postDate.appendChild(postYear);
  postDate.appendChild(postMonth);
  postDate.appendChild(postDay);
  postArticle.appendChild(postContent);
  postContent.appendChild(postHeader);
  postContent.appendChild(postAuthorIcon);
  postContent.appendChild(postAuthorLink);
  postContent.appendChild(postCommentsIcon);
  postContent.appendChild(postCommentsLink);
  postContent.appendChild(postThumb);
  postThumb.appendChild(postMark);
  postContent.appendChild(postWrapper);
  postContent.appendChild(share);
  postContent.appendChild(controls);
  controls.appendChild(controlsPrev);
  controls.appendChild(controlsNext);
  postContent.appendChild(commentSection);
  postContent.appendChild(makeComm);
  fragment.appendChild(relatedRow);



  container.appendChild(fragment);
};

createPost(post);

