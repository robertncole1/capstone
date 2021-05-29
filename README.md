## Front-end Capstone

### Project Name
"Sound Selection"
### Overview
This project is the culmination of the front-end semester at Nashville Software School. It demonstrates timely command of React.js + CRUD functionality.

This app will not only give you the ability to seee your entire music collection in one place, but to see the exact version you have. This app will have the ability to read, add, edit, and delete items in your collection. A stretch goal will be to tie in the marketplace information to see what each individual record is worth. It will also be able to search by specific barcode of the vinyl record you have, allowing for version accuracy when adding to your collection.
### Personal Motivation
For me, this project is personal. My dad passed away in 2014. I grew up with him playing music in the house on his old vinyl records. Everything from the Beatles to Madonna to Michael Jackson. He liked all music, as long as it was played loud and especially on his old record player. He would spend hours figuring out if his version of the White Album by the Beatles was the version that was worth thousands of dollars. (Spoiler: It wasn't). Now instead of googling every single record, searching through sites to find the correct barcode and label, I want to use an API to find your specific record and create your own collection. This way, you can keep your music in one digital place for the physical records of your life. 
### ERD
https://dbdiagram.io/d/60b25eaab29a09603d1719ce
### Wireframe

### Screenshots
### Loom Video Walk-through

### Sample Postman Data

GET https://api.discogs.com/database/search?q=The_Beatles&format=vinyl&token={key}
```{
  "pagination": {
    "page": 1,
    "pages": 200,
    "per_page": 50,
    "items": 21114,
    "urls": {
      "last": "https://api.discogs.com/database/search?q=The_Beatles&format=vinyl&token={key}&page=200&per_page=50",
      "next": "https://api.discogs.com/database/search?q=The_Beatles&format=vinyl&token={key}&page=2&per_page=50"
    }
  },
  "results": [
    {
      "country": "UK",
      "year": "1968",
      "format": [
        "Vinyl",
        "LP",
        "Album",
        "Misprint",
        "Numbered",
        "Mono"
      ],
      "label": [
        "Apple Records",
        "Garrod & Lofthouse International Ltd.",
        "The Gramophone Co. Ltd.",
        "EMI Records",
        "Northern Songs Ltd.",
        "Apple Records"
      ],
      "type": "master",
      "genre": [
        "Rock"
      ],
      "style": [
        "Pop Rock",
        "Experimental"
      ],
      "id": 46402,
      "barcode": [
        "XEX 709-1",
        "XEX 710-1",
        "XEX 711-1",
        "XEX 712-1",
        "XEX 709-1",
        "XEX 710-2",
        "XEX 711-1",
        "XEX 712-1",
        "XEX 709-1",
        "XEX 710-1",
        "XEX 711-1",
        "XEX 712-2"
      ],
      "user_data": {
        "in_wantlist": false,
        "in_collection": false
      },
      "master_id": 46402,
      "master_url": "https://api.discogs.com/masters/46402",
      "uri": "/The-Beatles-The-Beatles/master/46402",
      "catno": "PMC 7067/8",
      "title": "The Beatles - The Beatles",
      "thumb": "https://img.discogs.com/imSLZLPxL--Jt6wO8oR5BwFQmgw=/fit-in/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-456663-1361306314-9486.jpeg.jpg",
      "cover_image": "https://img.discogs.com/buemDQeLTIhhS_2YWo5jHOItUtg=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-456663-1361306314-9486.jpeg.jpg",
      "resource_url": "https://api.discogs.com/masters/46402",
      "community": {
        "want": 255440,
        "have": 191025
      }
    },
}

```
GET https://api.discogs.com/releases/46402
```
{ ...
  "format_quantity": 2,
  "date_added": "2002-08-25T22:40:45-07:00",
  "date_changed": "2018-07-28T12:59:40-07:00",
  "num_for_sale": 11,
  "lowest_price": 12.18,
  "title": "Raver's Night '96",
  "country": "Netherlands",
  "released": "1996",
  ...
}
