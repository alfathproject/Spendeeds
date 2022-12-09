const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  parseActiveUrlWithQuery() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlQuery(splitedUrl);
  },

  parseActiveUrlWithoutQuery() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlQuerySplitter(splitedUrl);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
    );
  },

  _urlQuerySplitter(splitedUrl) {
    const urlsSplits = splitedUrl.resource.split('?');
    return {
      resource: urlsSplits[0] || null,
      query: urlsSplits[1] || null,
    };
  },

  _urlQuery(splitedUrl) {
    const urlsSplits = splitedUrl.resource.split('?');
    return (
      (urlsSplits[0] ? `/${urlsSplits[0]}` : '?')
      + (urlsSplits[1] ? '?:query' : '')
    );
  },
};

export default UrlParser;
