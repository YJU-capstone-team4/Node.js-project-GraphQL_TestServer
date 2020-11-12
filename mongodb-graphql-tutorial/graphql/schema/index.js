// schema/index.js => Query + 접근하는 데이터의 형태를 정의.
// Content 타입의 데이터 리스트를 반환하는 contents 쿼리 정의.
// Content 타입의 데이터 형태 정의
const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    contents: [Content]
  }
  type Content {
    _id: ID
    title: String
    content: String
    createdAt: String
  }
  input ContentInput{
    title: String
    content: String
  }
  type Mutation{
    createContent(contentInput: ContentInput): Content!
  }
`;

module.exports = typeDefs;