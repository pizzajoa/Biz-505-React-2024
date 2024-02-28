# React, NextJS 프로젝트

- 프로젝트 개발환경 시작: `npm run dev`

## NextJS 를 이용한 페이지 Routing

- `React`는 화면전체 페이지 중에서 state가 적용되거나, 필요한 부분만 rendering 되는 구조
- 페이지 전체 새로고침 되지 않고, 필요한 부분만 rendering이 되기 때문에 화면에 보이는 부분이 빠르게 변화를 줄 수 있다
- React 에서 이러한 것을 구현하기 위하여 가상DOM 이라는 이중 구조의 DOM을 사용한다
  React는 어떤 요청 (Request, Routing )이 발생하면, 서버에 요청을 하고, 응답을 받은 후에 화면을 갱신한 표준 HTML과는 다르다
  현재 보고있는 화면을 최대한 유지하면서 변화되는 부분만 갱신하는 구조의 화면구현이다
  React 에서 사용하는 이러한 구조를 Client Side Rendering 이라고 한다
- NextJS는 React의 부분랜더링을 지원하고, 여기에 Server Side Rendering을 동시에 지원하는 FrameWork이다 기본적인 부분은 React의 철학을 따르면서 좀 색다른 방법으로 서버와 연동되는 화면을 구현한다

## NextJS를 서버처럼 구동하기, DB와 연동하기

- 순수 React 프로젝트에서는 서버, DB, 다른서버와 연동하기 위해서는 별도의 서버가 필요하다
- 보통은 React front-end와 NodeJS back-end를 연동하여 full stact project를 구현한다
- NextJS를 사용하면 Back-end 서버가 없어도 React 프로젝트에 서버를 연동하여 구현 할 수 있다
- NextJS 프로젝트를 DB(MySQL)와 연동하기 위하여 Prisma 라는 도구를 사용한다

## 프로젝트에 Prisma 와 MySQL 연동하기

```bash
npm install prisma --save-dev
npm install @prisma/client

npm install @prisma/client prisma --save-dev
```

## MySQL에 연동하기

- 프로젝트에 prisma 환경 설정하기

```bash
npx prisma init --datasource-provider mysql
```

- MySQL 연결 URL 설정하기
- 프로젝트 폴더에 `.env`파일을 만들거나 이미 있으면 다음 내용을 추가하기
- `DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"` (.env)폴더
  그 후 schema에서 테이블 설정하기
- DB 연결 초기화 하기:

```bash
npx prisma generate
```

- Table 생성하기 :

```bash
npx prisma migrate dev --name init
```
