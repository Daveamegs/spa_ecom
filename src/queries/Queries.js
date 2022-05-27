import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      name
      products {
        name
        brand
        id
        gallery
        inStock
        description
        prices {
          amount
        }
      }
    }
  }
`;
