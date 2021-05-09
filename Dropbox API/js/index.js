import { Dropbox } from '../node_modules/dropbox/src/dropbox.js';

let filesList = [];
let currentPath = '';
const contentArea = document.getElementById('main-content');
const breadCrumbs = document.getElementById('breadcrumbs');
const navigation = document.getElementById('navigation');
const dbx = new Dropbox({
    accessToken: 'CnXx7Rho-RIAAAAAAAAAAUGVV4QSKTzYIu6ChydSNSG9fTmM7ChxkHY4YMMna6w1',
    fetch
})

/**
 * This function creates element with tags.
 *
 * @param {string} tag - Tag of an element
 * @param {string} classNames - Classname of an element
 * @return {Element} A new element with class namess
 *
 */
function createElem(tag, ...classNames) {
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    return element;
}

/**
 * This function confirms action.
 *
 * @param {*} obj - Name of object to download
 *
 */
function confirmDownload(obj) {
    return (confirm(`Do you want to download ${obj}?`))
}

/**
 * @typedef {object} MouseEvent
 */
/**
 * Send a request to server to get list of files and render them on page.
 *
 * @param  {MouseEvent} e - Event
 * @property {string} e.target.dataset.path - Path to open
 *
 */
function openPath(e) {
    let folderPath = e.target.dataset.path;
    let folderName = folderPath.split('/');

    if (e.target.dataset.path !== currentPath && e.target.dataset.path !== ' ') {
        const pathItem = createElem('li', 'breadcrumb-item');
        const pathLink = createElem('a');
        pathItem.appendChild(pathLink);
        pathLink.appendChild(document.createTextNode(folderName[folderName.length - 1]));
        pathLink.setAttribute('href', '#');
        pathLink.setAttribute('data-path', `${folderPath}`);
        breadCrumbs.appendChild(pathItem);
    }

    if (e.target.dataset.path === ' ') {
        currentPath = '';
    } else {
        currentPath = folderPath;
    }

    dbx.filesListFolder({
        path: currentPath
    }).then(res => {
        filesList = [...res.entries];
        renderContent(filesList);
    });

    while (e.target.parentNode.nextElementSibling && e.target.parentNode.tagName == 'LI') {
        e.target.parentNode.nextElementSibling.remove();
    }
}

/**
 * Render a row.
 *
 * @param  {object} obj - File object
 * @param  {string} obj.name - File name
 * @param  {string} obj.size - File size
 * @param  {string} obj.server_modified - File date of modification
 * @param  {string} obj.path_lower - Path to file
 *
 */
function createRow(obj) {
    let date = (new Date(obj.server_modified).toLocaleTimeString()) + ' ' + (new Date(obj.server_modified).toLocaleDateString());
    let size = (obj.size / 1048576).toFixed(3) + " Mb"

    const fileRow = createElem('div', 'file');
    const fileCheckbox = createElem('input', 'file__checkbox');
    const fileName = createElem('p', 'file__name');
    const fileSize = createElem('p', 'file__size');
    const fileDate = createElem('p', 'file__date');
    const fileTooltip = createElem('span', 'file__tooltip');
    const contextMenu = createElem('div', 'context-menu');
    fileCheckbox.setAttribute('type', 'checkbox');
    contentArea.appendChild(fileRow);
    fileRow.appendChild(fileCheckbox);
    fileRow.appendChild(fileName);
    fileRow.appendChild(fileSize);
    fileRow.appendChild(fileDate);
    fileName.appendChild(document.createTextNode(obj.name));
    fileTooltip.appendChild(document.createTextNode(obj.name));
    contextMenu.appendChild(document.createTextNode('Do you want to delete this row? Be aware that this will not affect files on dropbox.'));

    if (obj.name.length > 30) {
        fileRow.appendChild(fileTooltip);
    }

    if (obj[".tag"] === 'folder') {
        fileName.setAttribute('data-path', `${currentPath}/${obj.name}`)
        fileName.addEventListener('click', openPath);
    };

    if (obj[".tag"] === 'file') {
        fileSize.appendChild(document.createTextNode(size));
        fileDate.appendChild(document.createTextNode(date));
        fileName.addEventListener('click', () => {
            dbx.filesGetTemporaryLink({
                path: obj.path_lower
            }).then(res => {
                if (confirmDownload(res.metadata.name)) {
                    window.open(res.link);
                }
            })
        })
    };

    contentArea.appendChild(contextMenu);
    fileRow.addEventListener('click', (e) => {
        if (!e.target.classList.contains('file__name')) {
            fileRow.nextElementSibling.classList.toggle('context-menu--visible');
        }
    })
    contextMenu.addEventListener('click', (e) => {
        e.target.previousElementSibling.remove();
        e.target.remove();
    })
}


/**
 * Clear the content area and render many rows.
 *
 * @param  {Array} arr - Array of objects to render
 *
 */
function renderContent(arr) {
    while (contentArea.firstChild) {
        contentArea.removeChild(contentArea.firstChild);
    }
    arr.forEach(function (file) {
        createRow(file);
    });
}

breadCrumbs.addEventListener('click', openPath);
navigation.addEventListener('click', (e) => {
    if (!e.target.classList.contains('navigation__link--implemented')) {
        alert('Not implemented');
    }
});

dbx.filesListFolder({
    path: currentPath
}).then(res => {
    filesList = [...res.entries];
    renderContent(filesList);
});
