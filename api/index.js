import Prismic from 'prismic-javascript';
import { apiEndpoint } from '../prismic-configuration';

const getHomepageAPI = async params => {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(apiEndpoint);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'homepage'),
      {
        orderings: '[my.blog_post.date desc]',
        ...params
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { getHomepageAPI };