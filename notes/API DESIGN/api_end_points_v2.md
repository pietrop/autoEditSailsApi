<!-- api_end_points_v2.md -->
# API end points v2
Organised by front end views

## Sing up

```
post /signup
```
(?)

## Sing in
Create
```
post /signin
```

## Delete

## Update

----
All of the following are Authenticated requests

## User account
Read
```
get /user/:userId
```
Updated
```
put /user/:userId
```
Delete
```
delete /user/:userId
```

## Project List
Read index
```
get /user/:userId/project
```
Read Show
```
get /user/:userId/project/:projectId
```
Update
```
put /user/:userId/project/:projectId
```
Delete
```
delete /user/:userId/project/:projectId
```

<!-- add other users to a project
```
put api/v1/user/:userId/project/:projectId
```
privilidges?
-->

## Create new Project
Create
```
post /user/:userId/project
```

## Project Panel
Transcript - list
```
get /user/:userId/project/:projectId/transcript/
```
Transcript - CRUD - Show
```
get /user/:userId/project/:projectId/transcript/:transcriptId
```
Transcript - CRUD - update
```
put /user/:userId/project/:projectId/transcript/:transcriptId
```
Transcript - CRUD - delete
```
delete /user/:userId/project/:projectId/transcript/:transcriptId
```

Paperedit - list
```
get /user/:userId/project/:projectId/paperedit/
```

Paperedit - CRUD - show
```
get /user/:userId/project/:projectId/paperedit/:papereditId
```
Paperedit - CRUD - update
```
put /user/:userId/project/:projectId/paperedit/:papereditId
```
Paperedit - CRUD - delete
```
delete /user/:userId/project/:projectId/paperedit/:papereditId
```

## Create New Media (upload media )
Media create
NB: multipart form request with SRT file (optional)
even if srt is provided, media needs to be processed for speaker diarization
```
post /user/:userId/project/:projectId/media
```

TODO: NEW media delete method
```
dalete /user/:userId/project/:projectId/media/:mediaId
```

TODO: NEW media update method
to update media details, ie metadata fields, name, etc..
```
put /user/:userId/project/:projectId/media/:mediaId
```



## Read transcript (Hypertranscript)
Transcript Read
NOTE: this call also return media object associated with transcript
`getLinkedMedia(transcriptId)` or one on ORM revers look up (?)
```
get /user/:userId/project/:projectId/transcript/:transcriptId
```
Project's annotation read index,
To view tags/annotation used in other transcripts of same project
```
get /user/:userId/project/:projectId/annotation
```
Annotation read index
View list of annotations used in this transcripts
```
get /user/:userId/project/:projectId/transcript/:transcriptId/annotation
```
Annotation - create
```
post /user/:userId/project/:projectId/transcript/:transcriptId/annotation
```
Annotation - update
```
put /user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annotationId
```
Annotation - delete
```
delete /user/:userId/project/:projectId/transcript/:transcriptId/annotation/:annotationId
```

## Create New Paperedit
Paperedit Create
```
post /user/:userId/project/:projectId/paperedit
```

## Paperedit Panel
Project's transcripts   
NB: each transcript needs to contain the media  
`get /user/:userId/project/:projectId/transcript` - *Existing*


Paperedit Show      
NB: with associated papercuts (through attribute section array)
```
get /user/:userId/project/:projectId/paperedit/:papereditId
```

Paperedit update   
also to update papercuts
 <!--TODO: delete papercut as separate model, and add regex to validate papercut as "virtual model" inside paperedit   -->
```
put /user/:userId/project/:projectId/paperedit/:papereditId
```

Problem: time consuming to save/send whole paperedit at every change (ie new papercut)
<!-- ```
put /user/:userId/project/:projectId/paperedit/:papereditId/section/:id
``` -->



# Up Next(to find out)
-[ ] Modify blueprint (to what extent is possibly)
-[ ] policy Authentication
