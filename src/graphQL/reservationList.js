import gql from "graphql-tag";
export const reservationList = gql`
  query {
    reservations {
      arrivalDate
      id
      name
      hotelName
      departureDate
      arrivalDate
    }
  }
`;