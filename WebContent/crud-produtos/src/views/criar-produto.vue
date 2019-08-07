<template>
  <div class="container" id="criarProduto">
    <div class="row">
      <div class="col-12">
      <h1 style="padding-bottom:40px;"> Criação de produto </h1>
        <form>
          <div class="row" style="padding:20px;">
            <div class="col-6">
              <input
                type="text"
                class="form-control"
                placeholder="Produto"
                aria-label="Produto"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="col-6">
              <div class="input-group">
                <select class="custom-select" id="inputGroupSelect04" aria-label="Fabricante">
                  <option selected>Escolha o fabricante.</option>
                  <option value="1">Fabricante 1</option>
                  <option value="2">Fabricante 2</option>
                  <option value="3">Fabricante 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row" style="padding:20px;">
            <div class="col-6">
              <input
                placeholder="Volume"
                type="text"
                class="form-control"
                aria-label="Volume"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="col-6">
              <input
                placeholder="Unidade"
                type="text"
                class="form-control"
                aria-label="Unidade"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="row" style="padding:20px;">
            <div class="col-6">
              <input placeholder="Estoque"
                type="text"
                class="form-control"
                aria-label="Estoque"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="row" style="padding:20px;">
            <div class="input-group-append col-3 col-offset-md-9">
              <button class="btn btn-outline-secondary" type="button">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import App from "./app.vue";
import Vue from "vue";

@Component
export default class CriarProduto extends Vue {
produto: Produto = [];
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
