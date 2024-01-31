const testPantone =  () => {

  // the reference color scheme 
  const schemeFiddler = Exports.newPreFiddler({
    sheetName: "Reference Pantone",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the colors to be matched
  const matchFiddler = Exports.newPreFiddler({
    sheetName: "Match",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the analysis to produce
  const analysisFiddler = Exports.newPreFiddler({
    sheetName: "Match to Pantone",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g',
    createIfMissing: true
  })

  // analyze and populate the fiddler and write to sheet
  const result = Exports.Schemer
    .populate ({
      scheme: {
        fiddler: schemeFiddler, 
        name: 'color name',
        code: 'hex'
      },
      match: {
        fiddler: matchFiddler,
        code: 'match',
      },
      analysis:{
        fiddler: analysisFiddler
      }
    })

    // dump the results
    // setTidyformat clears any formats with no data in them.
    result.analysis.fiddler.setTidyFormats(true).dumpValues()

    // colorize the analysis cells
    result.colorizeAnalysis()
    
    // we can also colorize the inputs if you want
    result.scheme.fiddler.setTidyFormats(true).dumpFormats()
    result.match.fiddler.setTidyFormats(true).dumpFormats()

    result.colorizeScheme()
    result.colorizeMatch()
}

const testSherwinWilliams =  () => {
  
  // the reference color scheme 
  const schemeFiddler = Exports.newPreFiddler({
    sheetName: "Reference Sherwin Williams",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the colors to be matched
  const matchFiddler = Exports.newPreFiddler({
    sheetName: "Match",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the analysis to produce
  const analysisFiddler = Exports.newPreFiddler({
    sheetName: "Match to Sherwin Williams",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g',
    createIfMissing: true
  })

  // analyze and populate the fiddler and write to sheet
  const result = Exports.Schemer
    .populate ({
      scheme: {
        fiddler: schemeFiddler, 
        name: 'color name',
        code: 'hex'
      },
      match: {
        fiddler: matchFiddler,
        code: 'match',
      },
      analysis:{
        fiddler: analysisFiddler
      }
    })

    // dump the results
    // setTidyformat clears any formats with no data in them.
    result.analysis.fiddler.setTidyFormats(true).dumpValues()

    // colorize the analysis cells
    result.colorizeAnalysis()
    
    // we can also colorize the inputs if you want
    result.scheme.fiddler.setTidyFormats(true).dumpFormats()
    result.match.fiddler.setTidyFormats(true).dumpFormats()

    result.colorizeScheme()
    result.colorizeMatch()
}

const testSherwinWilliamsToPantone =  () => {
  
  // the reference color scheme 
  const schemeFiddler = Exports.newPreFiddler({
    sheetName: "Reference Pantone",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the colors to be matched
  const matchFiddler = Exports.newPreFiddler({
    sheetName: "Reference Sherwin Williams",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the analysis to produce
  const analysisFiddler = Exports.newPreFiddler({
    sheetName: "Match Sherwin Williams to Pantone",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g',
    createIfMissing: true
  })

  // analyze and populate the fiddler and write to sheet
  const result = Exports.Schemer
    .populate ({
      scheme: {
        fiddler: schemeFiddler, 
        name: 'color name',
        code: 'hex'
      },
      match: {
        fiddler: matchFiddler,
        code: 'hex',
      },
      analysis:{
        fiddler: analysisFiddler
      }
    })

    // dump the results
    // setTidyformat clears any formats with no data in them.
    result.analysis.fiddler.setTidyFormats(true).dumpValues()

    // colorize the analysis cells
    result.colorizeAnalysis()
    
    // we can also colorize the inputs if you want
    result.scheme.fiddler.setTidyFormats(true).dumpFormats()
    result.match.fiddler.setTidyFormats(true).dumpFormats()

    result.colorizeScheme()
    result.colorizeMatch()
}

const createMc =  () => {

  // the reference color scheme 
  const schemeFiddler = Exports.newPreFiddler({
    sheetName: "Reference mc",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g',
    createIfMissing: true
  })

  const bmChroma = Exports.bmChroma
  const bs = bmChroma.Exports.Schemes
  schemeFiddler.setData(bs.mc.scheme).dumpValues()

}

const testMc =  () => {

  // the reference color scheme 
  const schemeFiddler = Exports.newPreFiddler({
    sheetName: "Reference Mc",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the colors to be matched
  const matchFiddler = Exports.newPreFiddler({
    sheetName: "Match",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g'
  })

  // the analysis to produce
  const analysisFiddler = Exports.newPreFiddler({
    sheetName: "Match to mc",
    id: '12rYlZCdQDypmGgX1t31-71IwzK5nJSfhfrctlDewU3g',
    createIfMissing: true
  })

  // analyze and populate the fiddler and write to sheet
  const result = Exports.Schemer
    .populate ({
      scheme: {
        fiddler: schemeFiddler, 
        name: 'color name',
        code: 'hex'
      },
      match: {
        fiddler: matchFiddler,
        code: 'match',
      },
      analysis:{
        fiddler: analysisFiddler
      }
    })

    // dump the results
    // setTidyformat clears any formats with no data in them.
    result.analysis.fiddler.setTidyFormats(true).dumpValues()

    // colorize the analysis cells
    result.colorizeAnalysis()
    
    // we can also colorize the inputs if you want
    result.scheme.fiddler.setTidyFormats(true).dumpFormats()
    result.match.fiddler.setTidyFormats(true).dumpFormats()

    result.colorizeScheme()
    result.colorizeMatch()
}

