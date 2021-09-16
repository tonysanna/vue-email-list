Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    data: {
        count : 10,
        mess: [],
    },
    mounted () {
        for(let i = 0; i < this.count; i++){
            axios.get('(https://flynn.boolean.careers/exercises/api/random/mail)').then((resp)=> {
                this.mess.push( i + resp.data.response);
            });
        };
    }
})