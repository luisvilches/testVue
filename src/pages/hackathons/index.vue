<template>
  <div class="wrapper">
    <section v-show="step.number !== 4" id="bg-portada">
         <div class="container-lg">
            <div class="row justify-content-center">
                <div class="col-sm-12 text-center">
                    <h1>Let's organize a hackathon!</h1>
                    <h3>Go live, spread the world, and stay organized</h3>
                </div>
            </div>
        </div> 
    </section>
    <section id="container-medio">
        <div class="container-lg avenir">
            <div class="row">
              <form @submit.prevent="createNewHackathon" @keydown="form.onKeydown($event)">
               <!-- Step 1 -->
                <div v-show="step.number === 1" class="col-sm-12 info-medio-a jumbotron">
                    <h4 class="avenir">Step 1 of 3</h4>
                    <br>
                    <h2 class="avenir">Where will this hackathon take place?</h2>
                    <br>
                    <form class="form-inline">
                       <input class="form-control mr-sm-2" v-model="form.place" type="search" aria-label="Search">
                     </form>
                   <div class="col-sm-12 next-button avenir">
                      <button @click.prevent="next" class="btn btn-2040 btn-blue">Next</button>
                   </div>
                </div>
                 <div v-show="step.number === 2 || step.number === 3" class="col-sm-12 info-medio-a">
                     <h4 class="avenir">Step 1 of 3</h4>
                     <br>
                     <h2 class="avenir">Where will this hackathon take place?</h2>
                     <br>
                     <h3 class="avenir">{{form.place}} <strong style="color: #5094E6;">(change location)</strong></h3>
                </div>
               <!-- Step 2 -->
                  <div v-show="step.number === 2 || step.number === 3" class="col-sm-12 info-medio-b">
                      <h4 class="avenir">Step 2 of 3</h4>
                      <br>
                      <h2 class="avenir">What type of Hackathon?</h2>
                      <br>
                      <form class="form-inline ">
                         <input class="form-control mr-sm-2 avenir wd100" type="search" placeholder="Search for a theme" aria-label="Search">
                       </form>
                       <div>
                           <div class="row cajita-botones wd50">
                               <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="check label">
                                            <input class="check__input" type="checkbox" v-model="form.type" value="virtual" id="virtual">
                                            <div class="check__text">Virtual</div>
                                        </label>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="check label">
                                            <input class="check__input" type="checkbox" v-model="form.type" value="blockchain" id="blockchain">
                                            <div class="check__text">Blockchain</div>
                                        </label>
                                    </div>
                                    <div class="col-md-4">
                                        <!--label for="university" class="btn btn-line">University <input type="checkbox" v-model="form.hackathon_type" value="university" id="university" class="badgebox"><span class="badge">&check;</span></label-->
                                        <label class="check label">
                                            <input class="check__input" type="checkbox" v-model="form.type" value="university" id="university">
                                            <div class="check__text">University</div>
                                        </label>
                                    </div>
                                </div>
                                   <div class="col-sm-12 offset-6 more">
                                       <h5><img src="img/reload.png" alt=""> More...</h5>
                                   </div>
                                   <div v-show="step.number === 2" class="col-sm-12 next-button">
                                       <button @click.prevent="next" class="btn btn-next">Next</button>
                                   </div>
                               </div>
                               <div class="col-md-4"></div>

                           </div>
                       </div>            
                 </div> <!-- End step 2 -->

                 <!-- Step 3 -->
                  <div v-show="step.number === 3" class="col-sm-12 info-medio-c">
                      <h4>Step 3 of 3</h4>
                      <br>
                      <h2>Who should we invite?</h2>
                      <br>
                      <form class="form-inline">
                         <input class="form-control mr-sm-2" type="search" placeholder="Search for skillsets" aria-label="Search">
                       </form>
                       <div>
                           <div class="row cajita-botones wd50">
                               <div class="col-md-8">
                                   <div class="row">
                                       <div class="col-md-4">
                                           <!--label for="html" class="btn btn-primary">HTML <input type="checkbox" value="virtual" v-model="form.who_invite" id="html" class="badgebox"><span class="badge">&check;</span></label-->
                                           <label class="check label">
                                                <input class="check__input" type="checkbox" v-model="form.invite" value="html" id="html">
                                                <div class="check__text">HTML</div>
                                            </label>
                                       </div>
                                       <div class="col-md-4">
                                           <!--label for="javascript" class="btn btn-primary">JavaScript <input type="checkbox" v-model="form.who_invite" value="javascript" id="javascript" class="badgebox"><span class="badge">&check;</span></label-->
                                           <label class="check label">
                                                <input class="check__input" type="checkbox" v-model="form.invite" value="javascript" id="javascript">
                                                <div class="check__text">JavaScript</div>
                                            </label>
                                       </div>
                                       <div class="col-md-4">
                                           <!--label for="css" class="btn btn-primary">CSS <input type="checkbox" v-model="form.who_invite" value="css" id="css" class="badgebox"><span class="badge">&check;</span></label-->
                                           <label class="check label">
                                                <input class="check__input" type="checkbox" v-model="form.invite" value="css" id="css">
                                                <div class="check__text">CSS</div>
                                            </label>
                                       </div>
                                   </div>
                                   <div class="col-sm-12 offset-6 more">
                                       <h5><img src="img/reload.png" alt=""> More...</h5>
                                   </div>
                                   <div v-show="step.number === 3" class="col-sm-12 next-button">
                                       <button @click.prevent="next" class="btn btn-next">Next</button>
                                   </div>
                               </div>
                               <div class="col-md-4"></div>

                           </div>
                       </div>            
              </div> <!-- End step 3 -->
              <!-- Step 4 -->
                <div v-show="step.number === 4" class="col-sm-12 col-md-12 offset-md-5">
                    <h4>Step 4 of 4</h4>
                    <br>
                    <h1>Tell us about your hackathon</h1>
                    <b></b>
                </div>
               <div v-show="step.number === 4" class="col-sm-12 col-md-12 offset-md-5">
                        <div class="form-group">
                            <label for="title">What is the title of your hackathon?</label>
                            <input type="title" v-model="form.title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="address">Venue Address</label>
                            <input type="address" v-model="form.address" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="date-time">Date and time</label>
                            <input type="date-time" v-model="form.date" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="reserve">Link to reserve seats?</label>
                            <input type="reserve" v-model="form.linkreserv" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="overvies">Overvies</label>
                            <textarea v-model="form.overvies" class="form-control" rows="7"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="Schedule">Schedule</label>
                            <textarea v-model="form.schedule" class="form-control" rows="7"></textarea>
                        </div>
                        <v-button :loading="form.busy" type="primary">{{ $t('continue') }}</v-button>
                </div><!-- End Step 4 -->
              </form>
            </div>
          </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import swal from 'sweetalert2'
import Form from 'vform'
import i18n from '@/plugins/i18n'

export default {
  middleware: 'auth',
    data: () => ({
      step: {
        number: 1,
        complete: true,
      },
      form: new Form({
        place: '',
        type: [],
        invite: [],
        title: '',
        address: '',
        date: '',
        linkreserv: '',
        overvies: '',
        schedule: '',
      }),
    }),
  methods:{
    next() {
      if (this.form.hackathon_place === ''){
        swal({
          type: 'error',
          title: i18n.t('hackathon_place_empty'),
        })
      }
      else {this.step.number++}
      
    },
    async createNewHackathon () {

        var f = new FormData();
        f.append('place',this.form.place);
        f.append('type',this.form.type);
        f.append('invite',this.form.invite);
        f.append('title',this.form.title);
        f.append('address',this.form.address);
        f.append('linkreserv',this.form.linkreserv);
        f.append('overvies',this.form.overvies);
        f.append('shedule',this.form.schedule);
        f.append('date',this.form.date);

    //await this.form.post('http://localhost:5000/hackathon')
      await fetch('http://hackathon.luisvilches.cl/hackathon',{
          method:"post",
          body: f
      }).then(res => res.json()).then(response => {
           this.$router.push({name: 'home' , params: { id: response.data.titleLink }}) 
      })
     this.form.reset();
     swal({
       type: 'success',
       title: i18n.t('hackathon_success'),
     })
    },

    addDataHackathon(){
        this.$store.dispatch('CREATEHACKATHONADD',{name:"luis"})
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>


<style scoped>

h1,h2,h3,h4,h5,h6,p,.avenir{
    font-family: "Avenir Next" !important;
}
#bg-portada h1{
  color: white;
    font-weight: bold;
    font-size: 60px;
}

#bg-portada h3{
  color: white;
    font-size: 35px;
}
#bg-portada{
  background-image: url('http://via.placeholder.com/1440x300');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #e9ecef;
  height: 550px;
  padding-top: 15rem;
}

#bg-portada .container{

  padding-left: 3rem;
}


.wd100{
    width: 100%;
}

/*-- Container medio --*/
.info-medio-a h2,
.info-medio-b h2{
  font-weight: 600;
}

.info-medio-a{
  margin-bottom: 4rem;
  border-bottom: 1px solid #DEDEDE;
}

.info-medio-b{
  margin-bottom: 4rem;
  border-bottom: 1px solid #DEDEDE;
}

.info-medio-a h3{
  margin-bottom: 6rem;
}

.info-medio-a input{
  width: 35rem;
}

.info-medio-b button{
  width: 100%;
    background-color: white;
    color: black;
    border: 1px solid;
    margin-bottom: 0.6rem;
    box-shadow: 0px 1px 8px 1px #7d7a7a61;
} 



#custom-search-input {
    padding: 3px;
    border: solid 1px #797979e0;
    border-radius: 2px; 
    background-color: #fff;
    width: 95%;
    box-shadow: 0px 1px 8px 1px #7d7a7a;
}

#custom-search-input input{
    border: 0;
    box-shadow: none;
}

#custom-search-input button{
    margin: 2px 0 0 0;
    background: none;
    box-shadow: none;
    border: 0;
    color: #666666;
    padding: 0 8px 0 10px;
    border-left: solid 1px #ccc;
}

#custom-search-input button:hover{
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
}

#custom-search-input .glyphicon-search{
    font-size: 23px;
}

.next-button{
  margin-top: 1.5rem;

}

.more{
  margin-top: 2rem;
  margin-bottom: 4rem;

}
.info-medio-b button:hover,
#container-medio .btn-next:hover
{
    background-color: #4A90E2;
    color: white;
} 

.cajita-botones{
  margin-top: 1rem;
}

#container-medio .btn-next{
  width: 10rem;
    background: white;
    border: 1px solid;
}
#container-medio{
 /* padding-bottom: 10rem; */
  padding-left: 2rem;
  margin-top: 6rem;
}
#container-medio .jumbotron{
  background-color: white;
}
/* Hiding the checkbox, but allowing it to be focused */
.badgebox
{
    opacity: 0;
}

.badgebox + .badge
{
    /* Move the check mark away when unchecked */
    text-indent: -999999px;
    /* Makes the badge's width stay the same checked and unchecked */
  width: 27px;
}

.badgebox:focus + .badge
{
    /* Set something to make the badge looks focused */
    /* This really depends on the application, in my case it was: */
    
    /* Adding a light border */
    box-shadow: inset 0px 0px 5px;
    /* Taking the difference out of the padding */
}

.badgebox:checked + .badge
{
    /* Move the check mark back when checked */
  text-indent: 0;
}

.check {
    display: inline-block;
    vertical-align: top;
    width: 100%!important;
}

.check__text {
  border: 1px solid #4A4A4A;
  border-radius: 3px;
  box-shadow: 0px 0px 1px 1px #ccc;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  color: #4A4A4A;
  display: inline-block;
  font-weight: 300;
  font-family: 'Avenir Next';
  width: 100%!important;
}

.check__input {
  position: absolute;
  left: -9999px;
  top: 0;
}

.check__input:checked + .check__text {
  color: #fff;
  border-color: #4A90E2;
  background: #4A90E2;
  counter-increment: checked;
}

.length__counter:before {
  content: counter(checked);
}
.wrapper {
  counter-reset: checked;
}
.wd50{
    width: 100%!important;
    text-align: center!important;
}

.wd5 label{
    width: 100%!important;
}
</style>
