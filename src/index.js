
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix === undefined || matrix.length === 0) return []
return matrix.map((it, index) => {
if (index % 2 === 0) return it
return it.reverse()
}).reduce((acc, rec) =>{
   return  acc.concat(rec)
}, [])
}
