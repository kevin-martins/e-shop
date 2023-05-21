import { ProductProps, ProductResponseProps } from "@/models/product";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async (): Promise<ProductProps[]> => {
  const query = gql`
    query Assets {
      products {
        id
        name
        image {
          url
        }
        price
        comments {
          rating
        }
      }
    }
  `
  const result: ProductResponseProps = await request(graphqlAPI!, query);

  return result.products;
}

export const getProductDetail = async (id: string): Promise<any> => {
  const query = gql`
    query Assets {
      product (where: id) {
        id
        name
        price
        slug
        createdAt
        publishedAt
        updatedAt
        comments {
          user
          title
          rating
          description
          publishedAt
        }
      }
    }
  `
  const result: any = await request(graphqlAPI!, query);

  return result.products;
}
