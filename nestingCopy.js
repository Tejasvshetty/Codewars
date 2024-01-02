array1 = [[[],[]]]
array2 = [[[],[]]]
// [[[],[]]] same as [[[],[]]]: expected false to be true

function toCheck(array1, array2){
    // console.log(array1)
    // console.log(array1.length)
    // console.log(array2)
    // console.log(array2.length)
        if (array1.length != array2.length && array1.length != 0 && array2.length != 0){
            console.log("False1")
            return check = false
        }
        if (array1.length == 0 && array2.length == 0){
            return true
        }
        if (array1.length == 0){
            if(Array.isArray(array1) && Array.isArray(array2) && !Array.isArray(array2[0])){
                return true
            }
            else{
                console.log("False2")
                return check = false
            }
        }
        if (array2.length == 0){
            if(Array.isArray(array2) && Array.isArray(array1) && !Array.isArray(array1[0])){
                return true
            }
            else{
                console.log("False3")
                return check = false
            }
        }
        else{
            for (i=0;  i<array1.length; i++){
                if (Array.isArray(array1[i]) && Array.isArray(array2[i])){
                    
                    // console.log(i)
                    // console.log(array1)
                    // console.log(array2[i])
                    if (toCheck(array1[i], array2[i])){
                        // console.log("we are here")
                        continue
                    }
                }
                if (!(Array.isArray(array1[i]) == Array.isArray(array2[i]))){
                    console.log("false4")
                    return check = false
                }
            }
            try{
                console.log(check)
                if (check == false){
                    return check
                }
            }
            catch(err){
                return true
            }
        }
    }

Array.prototype.sameStructureAs = function (other) {
    return (toCheck(this,other))
}
    
console.log(([[[],[]]]).sameStructureAs([[[],[]]]))
console.log(([ 1, [ 1, 1 ] ]).sameStructureAs([ [ 2, 2 ], 2 ]))


