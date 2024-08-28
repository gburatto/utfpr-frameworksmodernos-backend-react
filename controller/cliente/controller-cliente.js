module.exports = () => {
    const controller = {};
    const clientes = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(clientes);
    };

    controller.buscarPorId = (req, res) => { 
        console.log('Buscar por id');
        console.log(req.param("id"));    
        res.status(200).json(clientes.filter(cliente => cliente.id == req.param("id"))[0]);
    };

    controller.salvar = (req, res) => {    
        const cliente = req.body;
        
        clientes.push(cliente);

        const maxId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) : 0;
        cliente.id = maxId + 1;
        res.status(201).json(cliente);
    };

    controller.excluir = (req, res) => { 
        const index = clientes.findIndex(cliente => cliente.id == req.param("id"));
        clientes.splice(index, 1);     
        res.status(200).json(clientes);            
    };
    
    return controller;
}
