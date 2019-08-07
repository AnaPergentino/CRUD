<template>
<div class="container">
<button @click="mock()">Povoa lista</button>
  <div class="home">
  <h2 style="padding:20px;">Lista de Produtos</h2>
  <table class="table">
    <tr>
    <th>Nome</th>
    <th>Fabricante</th>
    <th>Volume</th>
    <th>Unidade</th>
    <th>Estoque</th>
    <th></th>
    <th></th>
    </tr>
    <tbody id="event-table" >
    <tr v-for="produto in produtos">
      <td>{{ produto.nome }}</td>
      <td>{{ produto.fabricante.nome }}</td>
      <td>{{ produto.volume }}</td>
      <td>{{ produto.unidade }}</td>
      <td>{{ produto.estoque }}</td>
      <td><span @click="">&#9998;</span>
      <span  @click="">&#10006;</span>
      </td>
    </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  produtos: Produto[] = [];
  fabricantes: Fabricante[]= [{id: 1, nome: "Fabricante 1"},{id: 2, nome: "Fabricante 2"},{id: 3, nome: "Fabricante 4"}]
  mock(){
    this.produtos = [{
      id:1,
      nome: "Produto1",
      fabricante: this.fabricantes[0],
      volume: 1,
      unidade: "cinco",
      estoque: 2,
    },
    {
      id:2,
      nome: "Produto2",
      fabricante: this.fabricantes[1],
      volume: 1,
      unidade: "nove",
      estoque: 2,
    },
    {
      id:3,
      nome: "Produto3",
      fabricante: this.fabricantes[2],
      volume: 1,
      unidade: "unidade",
      estoque: 2,
    }]
  }
}
export interface Produto{
  id: Number;
  nome: String;
  fabricante: Fabricante;
  volume: Number;
  unidade: String;
  estoque: Number;
}
export interface Fabricante{
  id: Number;
  nome: String;
}
</script>
