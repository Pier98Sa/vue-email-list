const root = new Vue(
    {
        el: '#root',

        data:{
            emailArray: [],
            showElement: false
        },
            created(){
                for(let i = 0; i <= 9; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                    this.emailArray.push(response.data.response);
                    });     
                               
                }
                this.showElement=true;
            }

    }    
);