# API end points

for authenticated user

## Project
### Create

### Read
Project index
```json
/project
```

Project show
```json
/project/:projectId
```

### Update


### Delete


---

## Media
### Create

### Read

Project's Medias index
```json
/project/:projectId/medias
```

Project's Media show
```json
/project/:projectId/medias/:mediaId
```
### Update


### Delete

---
## Transcript

### Create

### Read

Project's transcript show
```json
/project/:projectId/medias/:mediaId/transcripts/:transcriptID
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
