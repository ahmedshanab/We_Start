//const { createApp} = Vue;


Vue.createApp({
    data(){
        return {
            username: 'ahmedshanab',
            image:'',
            name: '',
            repos: [],
            }
    },
    methods:{
        fetchData(){
            
            axios.get("https://api.github.com/users/"+this.username).then(res => {
                this.image = res.data.avatar_url
                this.name ="name is : "+ res.data.name
            
            })

            
            axios.get("https://api.github.com/users/"+this.username+'/repos').then(res => {
                this.repos =res.data;
                

                let arr = []
                this.repos.forEach(el => {
                    let item = {
                        name: el.name , 
                        url: el.html_url
                    }
                    
                    arr.push(item)
                })
                this.repos=arr;
            })
            

               
        }
    }
}).mount('#app')