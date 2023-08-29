document.addEventListener("alpine:init",()=>{
    Alpine.data('myData',()=>{
        return{
            myData:[],
            first_name:'',
            last_name:'',
            stuNo:0,
            photo:'',
            output:'',
            init(){
                return axios
                .get('/api/fetching')
                .then((result)=>{
                    this.myData=result.data.getdata;
                })
            },
             
            upload(){
                axios.post('/api/data', {
                    first_name : this.first_name,
                    last_name : this.last_name,
                    stuNo : this.stuNo,
                    photo : this.photo
                })
                .then(result=>{
                    this.output=result.data.message;
                })
            }
        }
    })
})