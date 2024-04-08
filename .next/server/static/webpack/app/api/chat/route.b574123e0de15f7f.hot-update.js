"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/api/chat/route",{

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n/* harmony import */ var langchain_chat_models_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/chat_models/openai */ \"(rsc)/./node_modules/langchain/chat_models/openai.js\");\n/* harmony import */ var langchain_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/schema */ \"(rsc)/./node_modules/langchain/schema.js\");\n\n\n\nconst runtime = \"edge\";\nasync function POST(req) {\n    const { messages } = await req.json();\n    const currentMessageContent = messages[messages.length - 1].content;\n    const vectorSearch = await fetch(\"http://localhost:3000/api/vectorSearch\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: currentMessageContent\n    }).then((res)=>res.json());\n    const TEMPLATE = `\n  your are very polite waiter who take order from client  and answer with smiley in your text,\n   , if you can't understand the client ask him to repeat the order.\n  \n  Context sections:\n  ${JSON.stringify(vectorSearch)}\n\n  Question: \"\"\"\n  ${currentMessageContent}\n  \"\"\"\n  `;\n    messages[messages.length - 1].content = TEMPLATE;\n    const { stream, handlers } = (0,ai__WEBPACK_IMPORTED_MODULE_2__.LangChainStream)();\n    const llm = new langchain_chat_models_openai__WEBPACK_IMPORTED_MODULE_0__.ChatOpenAI({\n        modelName: \"gpt-3.5-turbo\",\n        streaming: true\n    });\n    llm.call(messages.map((m)=>m.role == \"user\" ? new langchain_schema__WEBPACK_IMPORTED_MODULE_1__.HumanMessage(m.content) : new langchain_schema__WEBPACK_IMPORTED_MODULE_1__.AIMessage(m.content)), {}, [\n        handlers\n    ]).catch(console.error);\n    return new ai__WEBPACK_IMPORTED_MODULE_2__.StreamingTextResponse(stream);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUU7QUFDWDtBQUNDO0FBRXBELE1BQU1LLFVBQVUsT0FBTztBQUV2QixlQUFlQyxLQUFLQyxHQUFZO0lBQ3JDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtJQUNuQyxNQUFNQyx3QkFBd0JGLFFBQVEsQ0FBQ0EsU0FBU0csTUFBTSxHQUFHLEVBQUUsQ0FBQ0MsT0FBTztJQUVuRSxNQUFNQyxlQUFlLE1BQU1DLE1BQU0sMENBQTBDO1FBQ3pFQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTVA7SUFDUixHQUFHUSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSVYsSUFBSTtJQUV6QixNQUFNVyxXQUFXLENBQUM7Ozs7O0VBS2xCLEVBQUVDLEtBQUtDLFNBQVMsQ0FBQ1QsY0FBYzs7O0VBRy9CLEVBQUVILHNCQUFzQjs7RUFFeEIsQ0FBQztJQUVERixRQUFRLENBQUNBLFNBQVNHLE1BQU0sR0FBRSxFQUFFLENBQUNDLE9BQU8sR0FBR1E7SUFFdkMsTUFBTSxFQUFFRyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHdkIsbURBQWVBO0lBRTVDLE1BQU13QixNQUFNLElBQUl2QixvRUFBVUEsQ0FBQztRQUN6QndCLFdBQVc7UUFDWEMsV0FBVztJQUNiO0lBRUFGLElBQ0dHLElBQUksQ0FDSCxTQUF3QkMsR0FBRyxDQUFDQyxDQUFBQSxJQUMxQkEsRUFBRUMsSUFBSSxJQUFJLFNBQ04sSUFBSTNCLDBEQUFZQSxDQUFDMEIsRUFBRWxCLE9BQU8sSUFDMUIsSUFBSVQsdURBQVNBLENBQUMyQixFQUFFbEIsT0FBTyxJQUU3QixDQUFDLEdBQ0Q7UUFBQ1k7S0FBUyxFQUVYUSxLQUFLLENBQUNDLFFBQVFDLEtBQUs7SUFFdEIsT0FBTyxJQUFJbEMscURBQXFCQSxDQUFDdUI7QUFDbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FwaS9jaGF0L3JvdXRlLnRzP2RlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyZWFtaW5nVGV4dFJlc3BvbnNlLCBMYW5nQ2hhaW5TdHJlYW0sIE1lc3NhZ2UgfSBmcm9tICdhaSc7XG5pbXBvcnQgeyBDaGF0T3BlbkFJIH0gZnJvbSAnbGFuZ2NoYWluL2NoYXRfbW9kZWxzL29wZW5haSc7XG5pbXBvcnQgeyBBSU1lc3NhZ2UsIEh1bWFuTWVzc2FnZSB9IGZyb20gJ2xhbmdjaGFpbi9zY2hlbWEnO1xuXG5leHBvcnQgY29uc3QgcnVudGltZSA9ICdlZGdlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnN0IGN1cnJlbnRNZXNzYWdlQ29udGVudCA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdLmNvbnRlbnQ7XG5cbiAgY29uc3QgdmVjdG9yU2VhcmNoID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3ZlY3RvclNlYXJjaFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IGN1cnJlbnRNZXNzYWdlQ29udGVudCxcbiAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuICBjb25zdCBURU1QTEFURSA9IGBcbiAgeW91ciBhcmUgdmVyeSBwb2xpdGUgd2FpdGVyIHdobyB0YWtlIG9yZGVyIGZyb20gY2xpZW50ICBhbmQgYW5zd2VyIHdpdGggc21pbGV5IGluIHlvdXIgdGV4dCxcbiAgICwgaWYgeW91IGNhbid0IHVuZGVyc3RhbmQgdGhlIGNsaWVudCBhc2sgaGltIHRvIHJlcGVhdCB0aGUgb3JkZXIuXG4gIFxuICBDb250ZXh0IHNlY3Rpb25zOlxuICAke0pTT04uc3RyaW5naWZ5KHZlY3RvclNlYXJjaCl9XG5cbiAgUXVlc3Rpb246IFwiXCJcIlxuICAke2N1cnJlbnRNZXNzYWdlQ29udGVudH1cbiAgXCJcIlwiXG4gIGA7XG5cbiAgbWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0xXS5jb250ZW50ID0gVEVNUExBVEU7XG5cbiAgY29uc3QgeyBzdHJlYW0sIGhhbmRsZXJzIH0gPSBMYW5nQ2hhaW5TdHJlYW0oKTtcblxuICBjb25zdCBsbG0gPSBuZXcgQ2hhdE9wZW5BSSh7XG4gICAgbW9kZWxOYW1lOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICBzdHJlYW1pbmc6IHRydWUsXG4gIH0pO1xuXG4gIGxsbVxuICAgIC5jYWxsKFxuICAgICAgKG1lc3NhZ2VzIGFzIE1lc3NhZ2VbXSkubWFwKG0gPT5cbiAgICAgICAgbS5yb2xlID09ICd1c2VyJ1xuICAgICAgICAgID8gbmV3IEh1bWFuTWVzc2FnZShtLmNvbnRlbnQpXG4gICAgICAgICAgOiBuZXcgQUlNZXNzYWdlKG0uY29udGVudCksXG4gICAgICApLFxuICAgICAge30sXG4gICAgICBbaGFuZGxlcnNdLFxuICAgIClcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgcmV0dXJuIG5ldyBTdHJlYW1pbmdUZXh0UmVzcG9uc2Uoc3RyZWFtKTtcbn1cbiJdLCJuYW1lcyI6WyJTdHJlYW1pbmdUZXh0UmVzcG9uc2UiLCJMYW5nQ2hhaW5TdHJlYW0iLCJDaGF0T3BlbkFJIiwiQUlNZXNzYWdlIiwiSHVtYW5NZXNzYWdlIiwicnVudGltZSIsIlBPU1QiLCJyZXEiLCJtZXNzYWdlcyIsImpzb24iLCJjdXJyZW50TWVzc2FnZUNvbnRlbnQiLCJsZW5ndGgiLCJjb250ZW50IiwidmVjdG9yU2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInRoZW4iLCJyZXMiLCJURU1QTEFURSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHJlYW0iLCJoYW5kbGVycyIsImxsbSIsIm1vZGVsTmFtZSIsInN0cmVhbWluZyIsImNhbGwiLCJtYXAiLCJtIiwicm9sZSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ })

});