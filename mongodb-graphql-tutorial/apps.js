const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');         // 쿼리 형태 정의
const resolvers = require('./graphql/resolvers');     // 쿼리에 해당하는 데이터를 가져오는 로직 정의
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./models');
dbConnect();

// ApolloServer는 typeDefs, resolvers, playground 속성을 가진 객체를 인자로 받는다.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true                                    // 작성한 쿼리를 테스트하는 클라이언트
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});