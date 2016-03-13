# API end points

For authenticated user

## user
Create   
public
```
put /user
```
Read   
authenticated
```
get /user
```

Update  
authenticated
```
put /user
```

Delete   
authenticated
```
delete /user
```
Associate to Project

remove from project




## Project

### Create
authenticated
```json
/user/:userId/project
```
TODO: Many to many projects and user
TODO: this Route (?)

### Read
Project index   
authenticated
```json
/user/:userId/project
```

Project show
authenticated
```json
/user/:userId/project/:projectId
```

### Update
authenticated
```json
/user/:userId/project/:projectId
```

### Delete
authenticated
```json
/user/:userId/project/:projectId
```

---

## Media
### Create
media without project
```json
/user/:userId/media
```
media as part of project
```json
/user/:userId/project/:projectId/media
```

### Read

Project's Medias index
view media through prioject
```json
/user/:userId/project/:projectId/media
```

Project's Media show
view media through prioject
```json
/user/:userId/project/:projectId/media/:mediaId
```
view media standalone
index
```json
/user/:userId/media
```
show
```json
/user/:userId/media/:mediaId
```


### Update

Associate media to project or update media
```json
/user/:userId/project/:projectId/media/:mediaId
```

### Delete
```json
/user/:userId/media/:mediaId
```

```json
/user/:userId/project/:projectId/media/:mediaId
```
---
## Transcript

### Create
Project's transcript show

```json
/user/:userId/media/:mediaId/transcript/
```

### Read

Project's transcript show
```json
/user/:userId/media/:mediaId/transcript/:transcriptId
```

### Update


### Delete


TODO: add CRUD

Project's transcript annotations  index
```json
/project/:projectId/medias/:mediaId/transcripts/:transcriptID/annotations
```

Project's transcript annotations  show
```json
/project/:projectId/medias/:mediaId/transcripts/:transcriptID/annotations/:annoationId
```

Project's speakers index
```json
/project/:projectId/speakers
```

Project's speakers show
```json
/project/:projectId/speakers/:speakerId
```

Project's transcript's speakers index
```json
/project/:projectId/medias/:mediaId/transcripts/:transcriptID/speakers
```

Project's transcript's speakers show
```json
/project/:projectId/medias/:mediaId/transcripts/:transcriptID/speakers/:speakerId
```

project's paperedit index
```json
/project/:projectId/paperedit
```

project's paperedit show
```json
/project/:projectId/paperedit/:papereditId
```

Project's paperedit's papercuts index
```json
/project/:projectId/paperedit/:papereditId/papercuts
```

Project's paperedit's papercuts show
```json
/project/:projectId/paperedit/:papereditId/papercuts/:papercuts
```
<!--
TODO IDEA: merging media and transcript into one? -->
