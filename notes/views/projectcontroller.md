showDemo: function(req, res) {
  if (!req.param('id')) {
    res.status(200);
    res.view('project/show', {
      project:{
        name: 'a test project name',
        date:"Today",
        description:"Some test description",
        papredits:[
          {
            name: "Test Paperedit",
            description: "Test Paperedit description",
            sections:[]
          },
          {
            name: "Test Paperedit2",
            description: "Test Paperedit2 description",
            sections:[]
          }
        ],
        transcripts:[
          {
            name: "Test Transcript",
            description: "Test Transcript description",
            paragraph:[
              {
                id: 1,
                words:[
                  {
                    id: 1,
                    start: 0,
                    end: 10,
                    text: "Hellow"
                  },
                  {
                    id: 2,
                    start: 10,
                    end: 20,
                    text: "World"
                  }//end one word
                ]//end words
              },//end one paragraph
              {
                id:2,
                words:[
                  {
                    id: 3,
                    start: 20,
                    end: 30,
                    text: "Yo"
                  },
                  {
                    id: 4,
                    start: 30,
                    end: 40,
                    text: "Peeps"
                  }
                ]
              }
            ]//end paragraphs
          },//end of one transcript
          {
            name: "Test Transcript",
            description: "Test Transcript description",
            paragraph:[]
          }//end of one transcript
        ]//transcripts end
      }//project end
    });
    // res.json({name: 'a project name'});
  }
}
