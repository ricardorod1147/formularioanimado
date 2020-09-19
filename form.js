var input = document.getElementsByClassName('formluario__input');
for (var i =0; i < input.length; i++){
input[].addEventListener('keyup', function(){
    if(this.value.length>=1){
        this.nextElementSibling.classList.add('fijar');
    }else{

        this.nextElementSibling.classList.remove('fijar');
    }
}
}