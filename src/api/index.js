export function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.response.items);
    }, 100);
  })
}

const data = {
  "response": {
    "count": 3039812,
    "items": [{
      "first_name": "Igor",
      "id": 331639485,
      "last_name": "Fedorov",
      "can_access_closed": true,
      "is_closed": false,
      "screen_name": "xyz",
      "photo": "https://sun9-11.u...5,824,824&ava=1",
      "track_code": "9eeeb0d8WKVIW6QTi9jMf-2wW6bUbgDR8PiqR8zLYJsreNlID_g_zAlb_iyB28t53kexPj9saN_2-6pHwq0"
    }, {
      "first_name": "Игорь",
      "id": 104246,
      "last_name": "Балагуров",
      "can_access_closed": true,
      "is_closed": false,
      "screen_name": "nan",
      "photo": "https://sun9-38.u...4,948,948&ava=1",
      "track_code": "9d0bfc001XXrXeS_pBxlZy5XSkXJLqQhDSSBY6B5EfZhNHRuH-uyHKkIuI7xHjJkG6-SiHZYyisLTOQ"
    }, {
      "first_name": "Игорь",
      "id": 19568187,
      "last_name": "Foxik",
      "can_access_closed": true,
      "is_closed": false,
      "screen_name": "fx",
      "photo": "https://sun9-34.u...0,553,553&ava=1",
      "track_code": "f3e33454hu1ZDFdf-wGgLnkL8okiWUMka_Te9RVDUsHXWdKMKfnhhBwOXTT_CKF8Q_QUHvowJzl0-cmHGw"
    }, {
      "first_name": "Игорь",
      "id": 185223778,
      "last_name": "Кислюк",
      "can_access_closed": true,
      "is_closed": false,
      "screen_name": "iks",
      "photo": "https://sun9-88.u...1481,1481&ava=1",
      "track_code": "b53569d4xsEioTkGtMs9Qp2dUNpMS4Q5XKTrDEcb01OGYLfBj56hqGjyYGmyl25DrGC5TapJ7Ddap-sMSX0"
    }, {
      "first_name": "Игорь",
      "id": 222586879,
      "last_name": "Каменев",
      "can_access_closed": true,
      "is_closed": false,
      "screen_name": "igor.priymachuk",
      "photo": "https://sun9-79.u...0,340,340&ava=1",
      "track_code": "ea9d794d44DUZQN6L1Qk-4bO6Xc70s_HXn2DUlNPhYPqSZ7btbyE6cIxX0p5BXL_ujYP4NzQp8lYfoNSXSk"
    }]
  }
}
