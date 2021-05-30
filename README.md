## Front-end Capstone

### Project Name
"Sound Selection"
### Overview
This app will not only give you the ability to seee your entire music collection in one place, but to see the exact version you have. This app will have the ability to read, add, edit, and delete items in your collection. A stretch goal will be to tie in the marketplace information to see what each individual record is worth. It will also be able to search by specific barcode of the vinyl record you have, allowing for version accuracy when adding to your collection.
### Personal Motivation
For me, this project is personal. My dad passed away in 2014. I grew up with him playing music in the house on his old vinyl records. Everything from the Beatles to Madonna to Michael Jackson. He liked all music, as long as it was played loud and especially on his old record player. He would spend hours figuring out if his version of the White Album by the Beatles was the version that was worth thousands of dollars. (Spoiler: It wasn't). Now instead of googling every single record, searching through sites to find the correct barcode and label, I want to use an API to find your specific record and create your own collection. This way, you can keep your music in one digital place for the physical records of your life. 
### ERD
https://dbdiagram.io/d/60b25eaab29a09603d1719ce
### Wireframe

### Screenshots
### Loom Video Walk-through

### Sample Postman Data

GET https://api.discogs.com/database/search?q=The_Beatles&format=vinyl&type=release&token={key}
```{
  "pagination": {
    "page": 1,
    "pages": 200,
    "per_page": 50,
    "items": 19863,
    "urls": {
      "last": "https://api.discogs.com/database/search?q=The_Beatles&format=vinyl&type=release&token={key}&page=200&per_page=50",
      "next": "https://api.discogs.com/database/search?q=The_Beatles&format=vinyl&type=release&token={key}"
    }
  },
  "results": [
    {
      "country": "US",
      "year": "1968",
      "format": [
        "Vinyl",
        "LP",
        "Album",
        "Numbered",
        "Repress",
        "Stereo"
      ],
      "label": [
        "Apple Records",
        "Apple Records",
        "Capitol Records, Inc.",
        "Capitol Industries, Inc.",
        "Northern Songs Ltd.",
        "Apple Records",
        "EMI Records",
        "The Gramophone Co. Ltd.",
        "Capitol Records Pressing Plant, Jacksonville"
      ],
      "type": "release",
      "genre": [
        "Rock",
        "Pop"
      ],
      "style": [
        "Psychedelic Rock",
        "Pop Rock"
      ],
      "id": 1436445,
      "barcode": [
        "BMI",
        "ASCAP",
        "SWBO1-101",
        "SWBO2-101",
        "SWBO3-101",
        "SWBO4-101",
        "SWBO1-101-J58",
        "SWBO2-101-J46",
        "SWBO3-101-J47",
        "SWBO4-101-J44",
        "SWBO-X1-101-J45 #2 O",
        "SWBO-X2-101-J43 #2 O",
        "SWBO-X3-101-J52 #2 O",
        "SWBO-X4-101-J48 #2 O",
        "SWBO-1-101-J59 #1 O",
        "SWBO-X2-101-J44 #2 O",
        "SWBO-X3-101-J58 #2 O",
        "SWBO-X4-101- J43 #1 O",
        "SWBO-X1-101 J55 #2 O",
        "SWBO-X2-101-J43 #2 O",
        "SWBO-X3-101-J52 #1 2 O",
        "SWBO-X4-101-J49 #2 O",
        "SWBO-X1-101 J54 #2 O",
        "SWBO-X2-101-J43 #3 O",
        "SWBO-X3-101-J52 #2 2 O",
        "SWBO-X4-101-J48 #2 O",
        "SWBO-X2-101-J455 #3 2 O",
        "SWBO-X2-101-J43  2 #3 O",
        "SWBO-X3-101-J45 #1",
        "SWBO-X3-101-J44 #1",
        "SWBO-X3-101-J52 #1",
        "SWBO-X3-101-J43 #1",
        "SWBO-X1-101J44#1 O",
        "SWBO-X2-101-J43#2 O",
        "SWBO-3-101-B35: 2",
        "SWBO-X4-101 J42#1 O"
      ],
      "user_data": {
        "in_wantlist": false,
        "in_collection": false
      },
      "master_id": 46402,
      "master_url": "https://api.discogs.com/masters/46402",
      "uri": "/The-Beatles-The-Beatles/release/1436445",
      "catno": "SWBO 101",
      "title": "The Beatles - The Beatles",
      "thumb": "https://img.discogs.com/sE5TsYRssWmZcQx-DFEnGq7OOL0=/fit-in/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1436445-1233697817.jpeg.jpg",
      "cover_image": "https://img.discogs.com/1FJJNUI5oLEIZxHfxi0ZAwwfFDU=/fit-in/465x464/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1436445-1233697817.jpeg.jpg",
      "resource_url": "https://api.discogs.com/releases/1436445",
      "community": {
        "want": 2109,
        "have": 12464
      },
      "format_quantity": 2,
      "formats": [
        {
          "name": "Vinyl",
          "qty": "2",
          "text": "Jacksonville Pressing, Capitol text",
          "descriptions": [
            "LP",
            "Album",
            "Numbered",
            "Repress",
            "Stereo"
          ]
        }
      ]
    },

```
GET https://api.discogs.com/releases/1436445
```
{ ...
  "format_quantity": 2,
  "date_added": "2008-08-24T08:01:50-07:00",
  "date_changed": "2020-03-25T14:38:03-07:00",
  "num_for_sale": 42,
  "lowest_price": 7.95,
  "master_id": 46402,
  "master_url": "https://api.discogs.com/masters/46402",
  "title": "The Beatles",
  "country": "US",
  "released": "1968",
  ...
}
