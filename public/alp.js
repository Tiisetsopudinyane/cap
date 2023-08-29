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
                  this.encodeImageFileAsURL();
                console.log("photo ena ke eh")
                axios.post('/api/data', {
                    first_name : this.first_name,
                    last_name : this.last_name,
                    stuNo : this.stuNo,
                    photo : this.photo
                })
                .then(result=>{
                    this.output=result.data.message;
                    //console.log(image)
                })
                
            },
            encodeImageFileAsURL() {
    
                var filesSelected = document.getElementById("inputFileToLoad").files;
                if (filesSelected.length > 0) {
                  var fileToLoad = filesSelected[0];
            
                  var fileReader = new FileReader();
            
                  fileReader.onload = function(fileLoadedEvent) {
                    var srcData = fileLoadedEvent.target.result; // <--- data: base64
            
                    var newImage = document.createElement('img');
                    newImage.src = srcData;
                    newImage.style.maxWidth = "200px";
                    newImage.style.height = "auto";
                    document.getElementById("imgTest").innerHTML = newImage.outerHTML;
                    //ducument.getElementById("imageText").innerHTML=newImage.outerHTML
                    //("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
                    
                    //console.log("Converted Base64 version is " + newImage.outerHTML);
                    this.photo=newImage.outerHTML;
                    console.log(this.photo)
                  }
                  fileReader.readAsDataURL(fileToLoad);
                }
              }
              

        }
    })
})