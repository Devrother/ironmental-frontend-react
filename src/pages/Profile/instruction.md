# Profile Page

## 필요 API 데이터

**GET** `/v2/users/@:userId`

- user

  ```javascript
  {
    userId: '5cf142b857cd51f683cd928e',
    username:'CORS 란',
    email:'nana@gmail.com',
    commentCount:23,
    likesCount:42,
    likes:['5cf142b857cd51f683cd928e','5cf142b857cd51f683cd928e'...], // (Article | Comment)[]
    comment:['5cf142b857cd51f683cd928e','5cf142b857cd51f683cd928e'...], // Comment[]
    favoriteTags: [],
  }
  ```
