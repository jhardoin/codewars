const wordsToMarks = s => s.split('').map(e => e.charCodeAt(0) - 96).reduce((a,b) => a + b)