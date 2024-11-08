type Circ =  {
    shape : 'circle';
    raradius:number
}

type Rect = {
    shape : 'rectangle';
    height: number;
    width: number;
}

type Shp = Circ | Rect

function calculateShapeArea (shape:Shp):number {

        if(shape.shape==="circle"){
            return Math.PI * shape.raradius ** 2;

        }
        if(shape.shape==='rectangle'){
           const res = shape.width * shape.height;
           return res
        }
        throw new Error("maybe something wrong");

        
}







