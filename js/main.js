var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        scores:[]
    },
    
    ready: function(){
                    this.$http.get('https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers',{
                headers: {'X-Mashape-Key' : 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw','Content-Type' : 'application/json'}
            }).then((response) => {
                        console.log('chuj');
                console.log(response);
                this.$set('scores',response);
            });
    },


});