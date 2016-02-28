# Querying db examples


```javascript
Project.find(4)
        .populate('medias',{id:18})
        .populate('users')
        .exec(function(err, ps){
          console.log(ps[0])
        });
```

[populate()][populate] function explained in the docs,
And [how queries work][queries].



```javascript
sails> Project.find(5).populate('media',{id:23}).populate('user',{id:1}).exec(function(err, ps){ console.log(pj) })

sails> [ { user:
     [ { name: 'P',
         createdAt: '2016-02-28T14:58:08.040Z',
         updatedAt: '2016-02-28T14:58:08.056Z',
         id: 1,
         account: 5 } ],
    media:
     [ { fileName: 'file Name 3',
         filePath: 'file Path 3',
         createdAt: '2016-02-28T14:40:09.135Z',
         updatedAt: '2016-02-28T14:40:09.148Z',
         id: 23,
         clip: 5 } ],
    name: 'test 2',
    description: 'test3',
    createdAt: '2016-02-28T14:16:53.822Z',
    updatedAt: '2016-02-28T14:58:08.050Z',
    id: 5 } ]
```



```javascript
Project.findOne(5).populate('media',{id:23}).populate('user',{id:1}).populate('transcript').exec(function(err, ps){ console.log(ps.media[0].clip) })
```

```javascript
Media.find(5).populate('transcript').exec(function(err, media){console.log(media)})
```


```javascript
Project.findOne(5).populate('media').exec(function(err, ps){


  console.log(ps.media[0])


});
```

.find().populate('transcript').exec(function(er, c){console.log(c)})

<!-- Links  -->

[populate]: http://sailsjs.org/documentation/reference/waterline-orm/queries/populate

[queries]: http://sailsjs.org/documentation/reference/waterline-orm/queries
