
// {
//     // GET /someUrl
//     this.$http.get('/someUrl').then(response => {
  
//       // get body data
//       this.someData = response.body;
  
//     }, response => {
//       // error callback
//     });
//   }
var vm = new Vue({
    el : '#app',
    methods :{
        getData : function() {
            this.$http.get('https://github.com/joshua1988/doit-vuejs/blob/master/data/demo.json').then( function(res) {
                console.log(res.body)
                console.log(res);
                console.log(JSON.parse(res.data));
            });
        }
    }
})
