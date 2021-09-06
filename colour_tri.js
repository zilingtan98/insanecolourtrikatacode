/**
 * @author Tan Zi Ling
 */


/**
 * triangle() takes in a combination of string made up of 3 possible letters 'R','G', and 'B'
 * which indicates the row of colour, with each successive rows will be one less colour, 
 * since two colours will be combined and form a new colour.
 * Example: RR -> R, BG -> R, RG -> B, BR -> G
 * Visual:
R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
 * 
 * @param row: a string input
 * @returns the final row with a single colour
 */
function triangle(row){
    // base case, 1 colour left
    if (row.length == 1){
        return row
    }
    else{
        newColour = ""
        // looping through all the colours 
        // create a substring with only 2 colours
        // for each substring check for the cases of which the result of combine colour and added them to newColour
        // if colour given is not R,G or B throw error
        for (let i = 0; i < row.length - 1 ; i++){
            substr = row.substring(i, i+2)
            switch (substr){
                case 'RR':
                    newColour += 'R'
                    break
                case 'BB':
                    newColour += 'B'
                    break
                case 'GG':
                    newColour += 'G'
                    break
                case 'RB':
                    newColour += 'G'
                    break
                case 'BR':
                    newColour += 'G'
                    break
                case 'BG':
                    newColour += 'R'
                    break
                case 'GB':
                    newColour += 'R'
                    break
                case 'RG':
                    newColour += 'B'
                    break
                case 'GR':
                    newColour += 'B'
                    break
                default:
                    throw "contain unknown colour"
            }
        }
    }
    return triangle(newColour)
}

