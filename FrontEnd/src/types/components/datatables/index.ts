
type Datatables = {
    dieta: string;
    nombre: string;
    instructor: string;
    status: string;
};

type SelectedRowDatatable = {
    name: string;
    post: string;
    project: string;
    status: string;
    budget: string;
    selectable:boolean
};

type filtrable = {
    name: string;
    image: string,
    price: number,
    rating: number,
    stock: boolean,
};


export type { Datatables, SelectedRowDatatable, filtrable };