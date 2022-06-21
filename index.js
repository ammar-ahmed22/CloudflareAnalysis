"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _readContent = _interopRequireDefault(require("./utils/readContent"));

var _connectDB = _interopRequireDefault(require("./utils/connectDB"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

_dotenv["default"].config({
  path: "./config.env"
});

var PORT = process.env.PORT || 8080;
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var app, server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app = (0, _express["default"])();
          server = new _apolloServerExpress.ApolloServer({
            resolvers: _resolvers["default"],
            typeDefs: (0, _readContent["default"])(process.env.NODE_ENV === "development" ? "./src/typeDefs.gql" : "./typeDefs.gql")
          });
          _context.next = 4;
          return server.start();

        case 4:
          server.applyMiddleware({
            app: app
          });
          (0, _connectDB["default"])(process.env.MONGO_URI);
          app.listen(PORT, function () {
            return console.log("Server ready at http://localhost:".concat(PORT).concat(server.graphqlPath, " \uD83D\uDE80"));
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();