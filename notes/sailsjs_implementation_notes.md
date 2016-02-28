
# Creating autoEdit with sailsjs

## 1.Domain modeling


```
Project
├── User    
├── Media
│     └── Transcript
│		└──Annotation
├── Speaker
└── Paperedit
	 └── Papercut
```
The project model groups all the other models.
This should make it easier, should a need for it arise, to add or remove users to a project for collaboration, and set different levels of permission.

### `Project`
Has many users    
Has many Medias    
Has many Transcripts through Medias    
Has many Annotations through Transcripts    
Has many Speakers    
Has many Paperedit Annotation    


### `User`

### `Media`
Has One Transcript

### `Transcript`
Has many Annotations    
Has and belong to many speakers    

### `Annotation`
Belongs to Transcript


### `Speaker`
Has and belong to many transcripts    

### `Paperedit`
Belongs to project
Has many papercuts


### `Papercut`
Belongs to Paperedit

---

## 2.Creating a new sailsjs app

Create new app

```bash
sails new autoEditSails
```

### Creating model

You can use sails generator to make a model with attributes.

#### User
```bash
sails generate model user name:string lastname:string  email:string password:string
```

However [attributes][sailsjs_attributes] are a set list of values, and the generator is not checking validating the attribute’s value, so make sure you write it correctly.
These are the allowed once.

- string
- text
- integer
- float
- date
- datetime
- boolean
- binary
- array
- json

however if you put `name:banana` the generator would not flintch and put in the model’s attribute `name : { type: 'banana' }` .


#### Project
```bash
sails generate model project name:string description:string  date:date
```

##### Associations
Has many users    
Has many Medias    
Has many Transcripts through Medias    
Has many Annotations through Transcripts    
Has many Speakers    
Has many Paperedit Annotation

###### One to many
[oneToMany sailsj docs][sailsjsOneToMany]     
[oneToMany waterline docs][waterlineOneToMany]

###### sails console
Once you set these association up, you ca try them out using the [sails console][sailsConsole].

[sails `populate()` method][sailsPopulate]

#### Media
```bash
sails generate model media filePath:string fileName:string mediaType:string cameraTimecode:string creationTime:datetime tapeReelName:string duration:float codecTimeBaseFps:integer  converted:array
```

```javascript
converted: [{
            id: Schema.ObjectId,
            name: String,
            mimeType: String,
            path: String
          }],
```


`mediaType` attribute could be enum. [link]
`converted` could be it’s own model, or not, but if it’s json attribute, there need to be some kind of validation.

##### Associations
Has One Transcript

#### Transcript

```bash
sails generate model transcript name:string description:string paragraph:array
```

same issue, media converted attribute(?), for paragraph

```javascript
 paragraph: [{
    id: Schema.ObjectId,
    words: [{
      id: Schema.ObjectId,
      start: Number,
      end: Number,
      text: String
    }],
    speakers: [{ type : Schema.ObjectId, ref: 'speakers' }]
  }]
```

##### Associations
Has many Annotations    
Has and belong to many speakers  


#### Annotation
```bash
sails generate model annotation comment:string tags:array wordsSelectionIds:array
```

```javascript
tags: [{
    id: Schema.ObjectId,
    name: String,
    description: String
  }],
```

wordsSelectionIds: [Number]

##### Associations
Belongs to Transcript


#### Speaker
```bash
sails generate model speaker name:string description:string
```

##### Associations
Has and belong to many transcripts   

#### Paperedit
```bash
sails generate model paperedit name:string description:string sections:array
```

```javascript
sections: [{
    id: Schema.ObjectId,
    title: String,
    description: String,
    duration: Number,
    order: Number,
    papercuts: [{ type : Schema.ObjectId, ref: 'papercuts' }]
  }]
```
##### Associations
Belongs to project
Has many papercuts

#### Papercut
```bash
sails generate model papercut label:string order:integer wordsSelectionIds:array
```

`wordsSelectionIds: [Number],`

##### Associations
Belongs to Paperedit

---

### Creating controllers




<!-- Liks -->

[sailsjs_attributes]: http://sailsjs.org/documentation/concepts/models-and-orm/attributes

[sailsjsOneToMany]: http://sailsjs.org/documentation/concepts/models-and-orm/associations/one-to-many

[waterlineOneToMany]: https://github.com/balderdashy/waterline-docs/blob/master/models/associations/one-to-many.md

[SailsJsnestedArraysInModel]: https://stackoverflow.com/questions/29286364/how-do-i-store-nested-object-array-in-sails-js-model

[sailsConsole]: http://sailsjs.org/documentation/reference/command-line-interface/sails-console

[sailsPopulate]: http://sailsjs.org/documentation/reference/waterline-orm/queries/populate
