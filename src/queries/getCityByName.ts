import { gql } from "@apollo/client";

export const GET_CITY_BY_NAME = gql`
  query ($name: String!){
    getCityByName(name: $name,config:{units:metric}) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;