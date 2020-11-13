// schema/index.js => Query + 접근하는 데이터의 형태를 정의.
// Content 타입의 데이터 리스트를 반환하는 contents 쿼리 정의.
// Content 타입의 데이터 형태 정의
const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    ytbChannel: [Channel]
  }
  type Channel {
    _id: ID
    ytbProfile: String
    ytbLinkAddress: String
    ytbSubscribe: Int
    ytbHits: Int
    video: [Video]
  }
  type Video {
    ytbVideoId: Int
    ytbVideoName: String
    ytbThumbnail: String
    ytbAddress: String
    hits: Int
    storeId: Int
    uploadDate: String
  }
  input ChannelInput {
    ytbProfile: String
    ytbLinkAddress: String
  }
  type Mutation{
    createChannel(channelInput: ChannelInput): Channel!
  }
`;

module.exports = typeDefs;