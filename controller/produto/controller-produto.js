module.exports = () => {
    const controller = {};
    const produtos = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(produtos);
    };

    controller.buscarPorId = (req, res) => { 
        console.log('Buscar por id');
        console.log(req.param("id"));    
        res.status(200).json(produtos.filter(produto => produto.id == req.param("id"))[0]);
    };

    controller.salvar = (req, res) => {    
        const produto = req.body;
        
        produtos.push(produto);

        const maxId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0;
        produto.id = maxId + 1;
        res.status(201).json(produto);
    };

    controller.excluir = (req, res) => { 
        const index = produtos.findIndex(produto => produto.id == req.param("id"));
        produtos.splice(index, 1);     
        res.status(200).json(produtos);            
    };
    
    return controller;
}
