import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async (): Promise<any> => {
  const query = gql`
    query Assets {
      products {
        id
        name
        price
        slug
        description
        reviews {
          rating
        }
      }
    }
  `
  const result: any = await request(graphqlAPI!, query);
  console.log("res", result.products)
  return result.products;
}
