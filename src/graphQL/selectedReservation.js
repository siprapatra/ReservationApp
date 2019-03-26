import gql from "graphql-tag";
export const selectedReservation=(id) => gql`
  query {
    reservation(where: {id:"${id}"}){
      arrivalDate
      id
      name
      hotelName
      departureDate
      arrivalDate  
    }
  }`;