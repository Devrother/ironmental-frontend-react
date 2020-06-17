# Aticle Page

## 필요 API 데이터

**GET** `/v2/article/:id`

- Aritcles: [Article]
- Article

  ```javascript
  {
    id: '5cf142b857cd51f683cd928e',
    tags:['gres','gewag'],
    title:'CORS 란',
    text:'CORS text or none',
    articleLink:"https://google.com",
    selfLink: '/articles/5cf142b857cd51f683cd928e',
    commentCount:23,
    likesCount:42,
    comments:['5cf1423357cd510271cd9289','5cf1423357cd510271cd9289','5cf1423357cd510271cd9289','5cf1423357cd510271cd9289','5cf1423357cd510271cd9289','5cf1423357cd510271cd9289','5cf1423357cd510271cd9289',]
  }
  ```

---

**GET** `/v2/comments`

- Comments:[Comment]
- Comment

  ```javascript
  {
    id:"5cf1423357cd510271cd9289",
    author: "5cf1423357cd510271cd9289", // user id가 맞겠지?
    text:"article text or none",
    created:"2019-05-31T15:03:15.726Z",
    updated:"2019-05-31T15:03:15.727Z",
    likesCount:43,
    threadCount:10,
    threads:["5cf1423357cd510271cd9289","5cf1423357cd510271cd9289","5cf1423357cd510271cd9289","5cf1423357cd510271cd9289","5cf1423357cd510271cd9289",]
  }
  ```

---

**GET** `/v2/threads`

- Threads: [Threads]
- Thread

  ```javascript
  {
      id:"5cf1423357cd510271cd9289",
      author: "5cf1423357cd510271cd9289", // user id가 맞겠지?
      text:"article text or none",
      created:"2019-05-31T15:03:15.726Z",
      updated:"2019-05-31T15:03:15.727Z",
      likesCount:43,
    }
  ```
