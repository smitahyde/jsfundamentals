$(document).ready(function(){
    
    $.ajax({
        type:'GET',
        url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
    }).done(function(data){
        names = data
    })
    
    $(submit).on('click',function(){
      let person = {
        name: $(usr). val(),
        email: $(email).val()
    }
    $.ajax({
        type: 'Post',
        url:  'http://rest.learncode.academy/api/learncode/javascriptfall',
        data:  person
    }) .done(function(info){
        console.log(info);
    })

})

})
 
