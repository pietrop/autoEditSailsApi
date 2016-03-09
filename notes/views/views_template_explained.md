#EJS Views Notes

some notes on the structure of the views in the ejsviews branch.

## `Homepage.ejs`
contains a jumbotron for landing page, and a link to sign up.
(link to active)

## layout.ejs
it’s a template for rest of pages, initialises boostrap , and client side javascript.

##`partials` folder
contains most of the partials requried by the `layout.ejs` view

## user
pages for user, sign in, sign up, and profile
(not implemented)

## project
###`Index.ejs`
 is for a list of projects.
(needs to add a for loop in ejs to render list of projects, see note on ejs for loop)

###`show.ejs`
shows project’s details as well as transcripts and paperedit belonging to a single project.
uses bootstrap to put two column side by side.
and uses partials to require list of transcripts( from `transcript/_index.ejs`)
for paperedit (`paperedit/_index.ejs`)

These are required from respective folders, and named with `_` to mark them as partials.
However this allows for flexibility to do a standalone page listing all transcripts or same for paperedit. Which are not a requirement now, but might be in the future..

## transcript
###`_index.ejs`
 as seen above. loops through transcripts and shows details.

###`show.ejs`
is the view of one hypertranscript

to render the hypertranscript part of the text it requires the `_hypertranscript.ejs` partial from the same folder.

###`_hypertranscript.ejs`
requires the `_search.ejs`input bar, to search the specific transcript.


## media

Creating a new transcript is done from adding a new media(audio or video).
`new.ejs` is a html form to upload a new video.

## paperedit
###`_index.ejs`
as seen above in show project page.

###`show.ejs`
conceptually divided into two main columns

requires `_hypertranscripts.ejs` and `_paperedit.ejs` partial to keep the page lighter.

### `_hypertranscripts.jes`
shows all transcripts associated with a project, and
renders an hypertranscript for the selected one.
Ideally done by requiring `_hypertranscript.ejs` from transcript folder(but not working at the moment)

###`_paperedit.ejs`
contains the paperedit pad, HTML buttons for exporting the paperedit.

###`edl.ejs`
it’s the eld template for exporting edl file, in it’s plain text format.
it’s in the erb syntax from the previous autoEdit rails project.
so will need some refactoring.
might be something that is moved into a server side npm module thou.


# Controllers and routes to try them out
in this same folder, udner notes markdown, there's a routes.md and a projectcontroller.md
if you their content in their corresponding sails files, you'd be able to "test"/try the views.
