"use strict";

var books = {
    "python": {
      author: 'Mark Summerfield',
      published: 'November 2008'
    },
    "c++": {
      author: 'Bjarne Stroustrup',
      published: 'October 1985'
    },
    "Javascript": {
      author: 'Marijn Haverbeke',
      published: '2011'
    }
};

function getBookAuthor(name) {
    return books[name].author
};

function getDatePublished(name) {
  return books[name].published
};

module.exports = {
    getBookAuthor: getBookAuthor,
    getDatePublished: getDatePublished
  };