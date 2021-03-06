const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar JSON
  scalar DateTime

  enum Status {
    NEW
    PAYMENT
    PAID
    SHIPPING
    REJECTED
    CANCELED
    FINISHED
  }

  type Order {
    id: ID
    value: Float!
    status: Status!
    createdAt: DateTime
    updatedAt: DateTime
    updateLogs: JSON
  }

  type OrderList {
    items: [Order]
    nextToken: JSON
  }

  input CreateOrderInput {
    id: ID
    value: Float!
  }

  input UpdateOrderInput {
    id: ID!
    value: Float
    status: Status
  }

  input PayOrderInput {
    id: ID!
    cardHash: String!
  }

  type Query {
    listOrders(nextToken: ID): OrderList
    getOrder(id: ID!): Order
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order
    updateOrder(input: UpdateOrderInput!): Order
    payOrder(input: PayOrderInput!): String
  }

  type Subscription {
    onCreateOrder: Order
    onUpdateOrder: Order
  }
`;

module.exports = typeDefs;
