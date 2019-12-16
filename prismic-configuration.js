import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://your-repo-name.prismic.io/api/v2'
export const client = Prismic.client(apiEndpoint)
 

// static async getInitialProps(context) {
//   const req = context.req
//   const home = await this.getHomePage(req)

//   static async getHomePage (req) {
//     const API = await Prismic.getApi(apiEndpoint, { req })
//     return await API.getSingle('homepage')
//   }
//   const response = await client.query(
//     Prismic.Predicates.at('document.type', 'blog_post'),
//     { orderings: '[my.blog_post.date desc]' }
//   )
//   if (response) {
//   }

//   return {
//     doc: home
//   }// response is the response object, response.results holds the documents
// }

// export default PrismicConfiguration;