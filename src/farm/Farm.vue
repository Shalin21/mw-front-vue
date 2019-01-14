<template>
  <body v-bind:class="[isDarkTheme ? 'skin-default-dark fixed-layout' : 'skin-default fixed-layout']">
    <div id="main-wrapper">
    <myHeader></myHeader>
    <sideMenu></sideMenu>
    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">

          <div class="row page-titles">
              <div class="col-md-5 align-self-center">
                  <h4 class="text-themecolor">{{selectedFarm.name}}</h4>
              </div>
              <div class="col-md-7 align-self-center text-right">
                  <div class="d-flex justify-content-end align-items-center">
                      <ol class="breadcrumb">
                          <li class="breadcrumb-item"><router-link to="/Dashboard"> Dashboard</router-link></li>
                          <li class="breadcrumb-item"><router-link to="/Farms"> Farms</router-link></li>
                          <li class="breadcrumb-item active">{{selectedFarm.name}}</li>
                      </ol>
                      <!--<button type="button" class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New</button>-->
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-9">
                  <div class="card ">
                      <div class="card-body">
                          <h4 class="card-title" style="color: #03a9f3;">Mining</h4>

                          <!-- <div class="d-flex p-2"  v-for="(card, index) in cards">
                                  <div class="card bg-info">
                                      <span class="closeSpan align-self-end" v-on:click="removeCoin(index)">&times;</span>
                                      <div class="card-body">
                                          <div class="d-flex p-4">
                                              <div>
                                                  <h4 class="card-title text-white">{{card.coin}}</h4>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div> -->
                                <div class="coin-cards-desk">
                                  <div class="coin-card " v-for="(card, index) in cards">
                                      <div class="coin-card-body">
                                          <div class="card-info">
                                            <span class="info-top">Coin One</span>
                                            <br>
                                            <span class="info-bot">{{card.coin}}</span>
                                          </div>
                                          <div class="card-info">
                                            <span class="info-top">Pool One</span>
                                            <br>
                                            <span class="info-bot">Zec</span>
                                          </div>
                                          <hr class="coin-card-separator">
                                          <div class="coin-card-footer">
                                            <div class="coin-card-footer-buttons">
                                              <div  v-on:click=""><span>EDIT</span></div>
                                              <div  v-on:click="removeCoin(index)"><span>REMOVE</span></div>
                                            </div>
                                            <div class="item-flex-end">
                                              <toggle-button :value="false" />
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                                </div>


                      </div>
                      <div id="errorModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h4 class="modal-title" id="myModalLabel">I think we have a problem here</h4>
                                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                  </div>
                                  <div class="modal-body">
                                      <h4>{{errorsOnPage}}</h4>
                                      <!-- <p>{{errorsOnPage}}</p> -->

                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-info waves-effect" data-dismiss="modal">Close</button>
                                  </div>
                              </div>
                              <!-- /.modal-content -->
                          </div>
                          <!-- /.modal-dialog -->
                      </div>
                      <div class="align-self-end myAddBtn" data-toggle="modal" data-target="#exampleModal" data-whatever=""><button type="button" class="btn btn-info btn-circle"><i class="fa fa-plus"></i> </button></div>
                      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                          <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h4 class="modal-title" id="exampleModalLabel1">New coin card</h4>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                  </div>
                                  <div class="modal-body">
                                      <form>
                                          <div class="form-group">
                                              <label for="recipient-name" class="control-label">Coin:</label>
                                              <select id="coin-select" class="form-control form-control-line ">
                                                  <option>ETH</option>
                                                  <option>BTC</option>
                                                  <option>ZEc</option>
                                                  <option>BTCgold</option>
                                              </select>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                      <button type="button" class="btn btn-info" data-dismiss="modal" v-on:click="addCoin()">Add</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- /.modal -->


                  </div>
              </div>
              <div class="col-lg-9">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title" style="color: #03a9f3;"><i class="fa fa-sliders" style="font-size:24px; color:#03a9f3;"></i> Overclocking</h4>
                          <div class="row">
                          <div class="col-md-6 btn-block">
                              <div class="btn-group-vertical btn-flex" style="width: 60%; ">
                              <button v-for="(g_card, index) in graphcards"type="button" class="btn waves-effect waves-light btn-success" v-on:click="changeCard(index)">{{g_card.name}}</button>
                              <!-- <button type="button" class="btn waves-effect waves-light btn-warning">GPU 2</button>
                              <button type="button" class="btn waves-effect waves-light btn-danger">GPU 3</button> -->
                              <button type="button" class="btn waves-effect waves-light btn-info" v-on:click="sync()">Sync</button>
                              </div>
                          </div>
                          <div class="col-md-6" >
                                  <div class="small-2 columns">
                                      <div class="col-md-12 slider-col">
                                        <h4 class="card-title">Core Clock</h4>
                                        <div id="range_02"></div>
                                        <div id="slider1"></div>
                                        <br/>
                                        <span class="example-val" id="slider1-span"></span>
                                      </div>

                                      <div class="col-md-12 slider-col">
                                        <h4 class="card-title">Memory Clock</h4>
                                        <div id="range_02mem"></div>
                                        <div id="slider2"></div>
                                        <br/>
                                        <span class="example-val" id="slider2-span"></span>
                                      </div>


                                      <div class="col-md-12 slider-col">
                                        <h4 class="card-title">Fan</h4>
                                        <div id="range_02fan"></div>
                                        <div id="slider3"></div>
                                        <br/>
                                        <span class="example-val" id="slider3-span"></span>
                                      </div>

                                      <div class="col-md-12 slider-col">
                                        <h4 class="card-title">Power</h4>
                                        <div id="range_02power"></div>
                                        <div id="slider4"></div>
                                        <br/>
                                        <span class="example-val" id="slider4-span"></span>
                                      </div>
                                      <!-- <input type="text" class="power" value="" /> -->


                                  </div>
                              </div>

                          </div>
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="overclocking-buttons text-center">
                                          <div class="button-group">
                                              <button type="button" class="btn btn-lg waves-effect waves-light btn-success" v-on:click="toggle()">Apply</button>
                                              <button type="button" class="btn btn-lg waves-effect waves-light btn-danger" v-on:click="printSliders()">Reset</button>
                                          </div>

                                  </div>

                              </div>
                          </div>


                          </div>

                      </div>
                  </div>
              <div class="col-lg-9">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title" style="color: #03a9f3;"><i  class="fa fa-area-chart" style="font-size:24px; color:#03a9f3;"></i> Monitoring </h4>
                          <div class="card">
                              <div class="card-body">
                                  <h4 class="card-title" style="color: #03a9f3;">Real Chart</h4>
                                  <!-- <div class="demo-container" style="height:400px;"> -->
                                    <div class="demo-container">
                                      <!-- <div id="placeholder" class="flot-chart-content"></div> -->
                                        <canvas id="myChart" ref="canvas"></canvas>
                                  </div>
                              </div>
                          </div>
                          <div class="card">
                              <div class="card-body">
                                  <h4 class="card-title" style="color: #03a9f3;">Real Chart</h4>
                                  <div class="demo-container" style="height:400px;">
                                      <canvas id="myChart" ref="canvas1"></canvas>
                                      <!-- <div id="placeholder1" class="flot-chart-content"></div> -->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Page wrapper  -->
    <!-- ============================================================== -->
  </div>
  </body>
</template>





<script>
import myHeader from '../Components/header.vue';
import sideMenu from '../Components/menu.vue';
import "ion-rangeslider"
import axios from 'axios';
import noUiSlider from 'nouislider';
import FarmsService from '../common/farms.service'
import {initGraphs, doSync} from './graphs.init'
import JwtService from '../common/jwt.service'
import ThemeService from '../common/theme.service'

var globalCard = null;
var data = []
    , totalPoints = 300;
export default {

  name: 'farms',
    components: { myHeader, sideMenu },
  data () {
    return {
      boolean:false,
      errorsOnPage:'',
      user:{
        name: "Habib Nurzaliev",
        email: "habib@nur.cz"
      },
      farms:FarmsService.getFarms(),
      cards:[
        {
          "coin": 'ETH'
        },
        {
          "coin": 'ZEc'
        }
      ],
      graphcards: '',
    }
  },
  computed :{
    isDarkTheme(){
      if(ThemeService.getTheme() == 'true'){
        return true
      }
      else{return false}
    },
    selectedFarm: {
      get: function () {
        var selectFm = '';
        var id = this.$route.params.id;
        this.farms.forEach(function (value, key) {
          if(value.farmCode == id){
          selectFm = value
        }
        });

      this.graphcards = selectFm.cards;
      // console.log(this.graphcards[0]);
      this.$nextTick(function () {
         this.changeCard(0);
      });
      return selectFm;
      },
    },
},
  mounted: function (){
      globalCard = this.selectedFarm.cards[0];
    var slider1 = document.getElementById("slider1");
    var slider2 = document.getElementById("slider2");
    var slider3 = document.getElementById("slider3");
    var slider4 = document.getElementById("slider4");
    var slider1Value = document.getElementById('slider1-span');
    var slider2Value = document.getElementById('slider2-span');
    var slider3Value = document.getElementById('slider3-span');
    var slider4Value = document.getElementById('slider4-span');
    //-------Slider #1---------//
    noUiSlider.create(slider1, {
        start: globalCard.params.core.cur,
        animate: true,
        range: {
            min: globalCard.params.core.min,
            max: globalCard.params.core.max
           }
    });
    slider1.noUiSlider.on('update', function( values, handle ){
       slider1Value.innerHTML = values[handle];
       globalCard.params.core.cur = values[handle];

       // console.log(this.$route.params.path);
     });
     //----------------------//

     //-------Slider #2---------//
     noUiSlider.create(slider2, {
        start: globalCard.params.memory.cur,
        animate: true,
        range: {
            min: globalCard.params.memory.min,
            max: globalCard.params.memory.max,
           }
     });
     slider2.noUiSlider.on('update', function( values, handle ){
       slider2Value.innerHTML = values[handle];
       globalCard.params.memory.cur = values[handle];
      });
      //----------------------//

      //-------Slider #3---------//
      noUiSlider.create(slider3, {
          start: globalCard.params.fan.cur,
          animate: true,
          range: {
              min: globalCard.params.fan.min,
              max: globalCard.params.fan.max,
             }
      });
      slider3.noUiSlider.on('update', function( values, handle ){
         slider3Value.innerHTML = values[handle];
         globalCard.params.fan.cur = values[handle];
       });
       //----------------------//

       //-------Slider #4---------//
       noUiSlider.create(slider4, {
          start: globalCard.params.power.cur,
          animate: true,
          range: {
              min: globalCard.params.power.min,
              max: globalCard.params.power.max,
             }
       });
       slider4.noUiSlider.on('update', function( values, handle ){
         slider4Value.innerHTML = values[handle];
         globalCard.params.power.cur = values[handle];
        });
        //----------------------//
        this.createGraphs();
  },
  methods:{
    toggle() {

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JwtService.getToken(),
        }
      }

      axios.post(`http://localhost:8082/toggle`, this.graphcards, config)
      .then(response => console.log("Data was send"))
      .catch(error => this.errorsOnPage = error.message, $('#errorModal').modal('show'))

    },
    printSliders(){
      var slider1 = document.getElementById("slider1");
      var slider2 = document.getElementById("slider2");
      var slider3 = document.getElementById("slider3");
      var slider4 = document.getElementById("slider4");

      //console.log(slider1.noUiSlider.get());
      console.log(this.$route.params.id);
    },
    removeCoin(coin_index){
    this.$swal({
      title: 'Are you sure?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#228B22',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      this.$swal(
        'Deleted!',
        'Your card has been deleted.',
        'success'
      )
      this.cards.splice(coin_index, 1);
    }
  })



},
    addCoin(){
      var e = document.getElementById("coin-select");
      var coinSelect = e.options[e.selectedIndex].text;
      this.cards.push({coin: coinSelect});
    },
    changeCard(index){
      // console.log(this.graphcards[index].params.core);
      console.log(this.graphcards[index]);
      // globalCard = this.graphcards[index];
      globalCard = this.selectedFarm.cards[index];

      var slider1 = document.getElementById("slider1");
      var slider2 = document.getElementById("slider2");
      var slider3 = document.getElementById("slider3");
      var slider4 = document.getElementById("slider4");
      slider1.noUiSlider.updateOptions({
        start: globalCard.params.core.cur,
        animate: true,
        range: {
          'min': globalCard.params.core.min,
          'max': globalCard.params.core.max
        }
      });
      slider2.noUiSlider.updateOptions({
        start: globalCard.params.memory.cur,
        animate: true,
        range: {
          'min': globalCard.params.memory.min,
          'max': globalCard.params.memory.max
        }
      });
      slider3.noUiSlider.updateOptions({
        start: globalCard.params.fan.cur,
        animate: true,
        range: {
          'min': globalCard.params.fan.min,
          'max': globalCard.params.fan.max
        }
      });
      slider4.noUiSlider.updateOptions({
        start: globalCard.params.power.cur,
        animate: true,
        range: {
          'min': globalCard.params.power.min,
          'max': globalCard.params.power.max
        }
      });
      this.visible = true;
    },
    sync(){
      doSync(this.graphcards)
      this.changeCard(0);
    },
    createGraphs(){
      initGraphs(this.$refs["canvas"])
    },
  }
}

</script>




<style lang="css">
@import '../dist/css/style.css';
@import '../dist/css/pages/footable-page.css';
@import '../dist/noUiSlider/nouislider.min.css';

.coin-card{
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 150px;
}
.coin-cards-desk{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
span.info-top{
  /* color: lightgray; */
  margin: 0px;
  padding: 0px;
  /* font-weight: 400; */
}
span.info-bot{
  /* color:grey; */
  margin: 0px;
  padding: 0px;
  font-weight: 600;
}
.card-info{
  padding-top: 10px;
  padding-left: 20px;
}
.coin-card-body{
  box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.15);
  background-color: white;
  border-radius:5px;
  border-top-color: red;
  border-top-width: 5px;
  border-top-style: solid;
  /* border: 4px solid #0fdc22; */
}
.coin-card-footer-buttons > div{
  outline:none;
  cursor: default;

  /* color: lightgray; */
  /* font-weight: 400; */
  /* font-size: large; */
}
.coin-card-footer-buttons > div :hover{
  cursor: pointer;
}
.coin-card-separator{
  padding: 0px;
  margin: 5px 0px;
}
.coin-card-footer{
  justify-content: flex-end;
  /* margin-right: 20px; */
  width:100%;
  display: flex;
  flex-direction: row;
}
.coin-card-footer > div{
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  text-align:center;
}
.coin-card-footer > div > div{
  /* flex: 1 1 auto; */
  padding-left: 10px;
  text-align:center;
    margin:5px;
}

.item-flex-end{
  /* margin-left: auto; */
  align-self: flex-end;
  justify-content: flex-end;
  padding-right: 5px;
}
.range-slider {
    position: relative;
    height: 80px;
}
.btn-block{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:space-around;
}

.slider-col{
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-top: 15px;
}
.example-val{
  font: 100 13px Arial;
}
.example-val:before {
    content: "Value: ";
    font: 700 12px Arial;
}

</style>
