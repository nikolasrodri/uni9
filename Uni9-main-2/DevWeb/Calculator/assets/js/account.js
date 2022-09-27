function MakeAccount (x1, x2, y1, y2) {
    function calculateX (x1, x2) {
        let result = Math.pow(x2, 2) - Math.pow(x1, 2);
        return result;
    }
    
    
    function calculateY (y1, y2) {
        let result = Math.pow(y2, 2) - Math.pow(y1, 2);
        return result;
    }
    
    let x = calculateX(x1, x2)
    let y = calculateY(y1, y2)
    if ((x+y)<0) return false;

    let res = Math.sqrt((x + y));
    return res.toFixed(4);
    
}