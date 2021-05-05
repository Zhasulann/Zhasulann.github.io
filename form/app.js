let users = [];

let userInfo = {
   name: '',
   last_name: '',
   phone: '',
   about: ''
}

$('#save').click(function () {

   let result = confirm("Вы точно хотите сохранить данные?")

   if (result == true) {
      users.push(userInfo);

      userInfo = {};

      $('#name,#last_name, #phone, #just_text').val('');

      console.log(users);

   } 

});



$('#name,#last_name, #phone, #just_text').change(function () {

   let _this = $(this)

   let fieldName = _this.attr('name')

   userInfo[fieldName] = _this.val()


});



