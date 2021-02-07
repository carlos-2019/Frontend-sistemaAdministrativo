export class Producto {
    constructor(
        public id:number,
        public id_categ : number,
        public id_stand : number,
        public nomb_prod: string,
        public desc_prod: string,
        public stock_prod: number,
        public puni_prod: number,
        public color: string,
        public talla: string,
        public material: string,
        public descu_prod: number,
    ) { }
}