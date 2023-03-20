const { writeFileSync } = require("fs");
const { faker } = require("@faker-js/faker");

const RANDOMUSERS = [];

function createRandomUser() {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  RANDOMUSERS.push(createRandomUser());
});

console.log(RANDOMUSERS);

const POSTS = [];

function createRandomPost() {
  return {
    post_title: faker.lorem.words(Math.ceil(Math.random() * 5)),
    post_description: faker.lorem.paragraphs(Math.ceil(Math.random() * 4)),
    date_created: faker.date.between(
      "2020-01-01T00:00:00.000Z",
      "2023-01-01T00:00:00.000Z"
    ),
    user_id: Math.ceil(Math.random() * RANDOMUSERS.length),
  };
}

Array.from({ length: 15 }).forEach(() => {
  POSTS.push(createRandomPost());
});

console.log(POSTS);

const COMMENTS = [];

function createRandomComment() {
  return {
    comment_body: faker.lorem.paragraphs(1),
    date_created: faker.date.between(
      "2020-01-01T00:00:00.000Z",
      "2023-01-01T00:00:00.000Z"
    ),
    user_id: Math.ceil(Math.random() * RANDOMUSERS.length),
    post_id: Math.ceil(Math.random() * POSTS.length),
  };
}

Array.from({ length: 25 }).forEach(() => {
  COMMENTS.push(createRandomComment());
});

console.log(COMMENTS);

writeFileSync(
  path.join(process.cwd(), "seeds", "post_data.json"),
  JSON.stringify(POSTS, null, 2)
);
writeFileSync(
  path.join(process.cwd(), "seeds", "user_data.json"),
  JSON.stringify(RANDOMUSERS, null, 2)
);
writeFileSync(
  path.join(process.cwd(), "seeds", "comment_data.json"),
  JSON.stringify(COMMENTS, null, 2)
);
