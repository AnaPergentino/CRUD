var inicio = new Vue({
	el:"#inicio",
    data: {
        listaProdutos: [],
        listaProdutosHeader: [
			{sortable: false, key: "nome", label:"Nome"},
			{sortable: false, key: "fabricante.nome", label:"Fabricante"},
			{sortable: false, key: "volume", label:"Volume"},
			{sortable: false, key: "unidade", label:"Unidade"},
			{sortable: false, key: "estoque", label:"Estoque"}
		]
    },
    created: function(){
        let vm =  this;
        vm.buscaProdutos();
    },
    methods:{
        buscaProdutos: function(){
			const vm = this;
			axios.get("/mercado/rs/produtos")
			.then(response => {
				vm.listaProdutos = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
		criarProduto: function(){
			"/mercado/criar-produto.html" 
		}
    }
});
var criarProduto = Vue.extend({
    data: {

        Produto: [
			{sortable: false, key: "nome", label:"Nome"},
			{sortable: false, key: "fabricante.nome", label:"Fabricante"},
			{sortable: false, key: "volume", label:"Volume"},
			{sortable: false, key: "unidade", label:"Unidade"},
			{sortable: false, key: "estoque", label:"Estoque"}
		]
    },
    created: function(){
        let vm =  this;
        vm.buscaProdutos();
    },
    methods:{
        criaProduto: function(produto){
			const vm = this;
			axios.post("/mercado/rs/produto/" + produto)
			.then(response => {
				vm.listaProdutos = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listada natureza de serviços");
			}).finally(function() {
			});
		},
    },
	template: '<h1>Criação de produto</h1> <form> <div class="row"><div class="col-6"><input type="text" class="form-control" placeholder="Produto" aria-label="Produto" aria-describedby="basic-addon1"></div><div class="col-6"></div></div></form>',
});