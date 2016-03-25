$(document).ready(function() {
    // Set maximum number of selected checkboxes on fieldsets to two, disable rest
    $('.check-fieldset input').click(function() {
    if ($(this).parents('.check-fieldset').find('input:checked').length >= 2) {
        $(this).parents('.check-fieldset').find(':checkbox:not(:checked)').prop("disabled", true);
        $(this).siblings('.hide');
    }
    else {  	
        $(this).parents('.check-fieldset').find(':checkbox').prop("disabled", false);
    }
	});
	
// Retrieval of first and second classified by every fieldset
function marcarSeleccions(checkBoxes, alertofGroup, alertofGroupb, firstofGroup, secondofGroup) {        
        var limit = 2;
        var selected = checkBoxes.parents('.check-fieldset').find('input:checked').length;
        var count =  limit - selected;
        var first = checkBoxes.filter('.first').val();   
        var second;
        if(checkBoxes.prop('checked')) {          
            switch (count) {              
                case 1:
                {    
                    checkBoxes.removeClass('first');
                    first = checkBoxes.val();
                    checkBoxes.addClass('first');
                    alertofGroup.html(first + " classifies first"); 
                    firstofGroup.html(first);            
                }
               break;
               case 0:
                {   
                    second = checkBoxes.val();
                    alertofGroupb.html(second + " classifies second");                    
                    secondofGroup.html(second);
                }
                break;
                case 2:
                {   
                    second = "";
                    first = "";
                    alertofGroup.html(first + "");
                    alertofGroupb.html(second + "");

                }
                            
            }
        };
};
// checkboxes click events
// group A
     $('.group1').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-1'), $('.alert-group-1b'), $('.first-group1'), $('.second-group1'));
    });
  // group B
     $('.group2').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-2'), $('.alert-group-2b'), $('.first-group2'), $('.second-group2'));
    });
  // group C
     $('.group3').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-3'), $('.alert-group-3b'), $('.first-group3'), $('.second-group3'));
    });
  // group D
     $('.group4').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-4'), $('.alert-group-4b'), $('.first-group4'), $('.second-group4'));
    });
  // group E
    $('.group5').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-5'), $('.alert-group-5b'), $('.first-group5'), $('.second-group5'));
    });
  // group F
    $('.group6').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-6'), $('.alert-group-6b'), $('.first-group6'), $('.second-group6'));
    });
  // group G
    $('.group7').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-7'), $('.alert-group-7b'), $('.first-group7'), $('.second-group7'));
    });
    // group H
    $('.group8').on('click', function() {
        marcarSeleccions($(this), $('.alert-group-8'), $('.alert-group-8b'), $('.first-group8'), $('.second-group8'));
    });


  // Validate and send form values to server on button submit
  $(function() {
  $(".btn-form-submit").click(function() {
  
  var fullname = $("#Name").val();
  var email = $("#email").val();
  var firstgroup1 = $(".first-group1").html();
  var secondgroup1 = $(".second-group1").html();
  var firstgroup2 = $(".first-group2").html();
  var secondgroup2 = $(".second-group2").html();
  var firstgroup3 = $(".first-group3").html();
  var secondgroup3 = $(".second-group3").html();
  var firstgroup4 = $(".first-group4").html();
  var secondgroup4 = $(".second-group4").html();
  var firstgroup5 = $(".first-group5").html();
  var secondgroup5 = $(".second-group5").html();
  var firstgroup6 = $(".first-group6").html();
  var secondgroup6 = $(".second-group6").html();
  var firstgroup7 = $(".first-group7").html();
  var secondgroup7 = $(".second-group7").html();
  var firstgroup8 = $(".first-group8").html();
  var secondgroup8 = $(".second-group8").html();

  //console.log("var to post = " + firstgroup1); 
// Assign form values to ajax/php post variable/s
  var dataString = 'fullname=' + fullname + '&email=' + email + '&firstgroup1=' + firstgroup1 + '&secondgroup1=' + secondgroup1 + '&firstgroup2=' + firstgroup2 + '&secondgroup2=' + secondgroup2 
  + '&firstgroup3=' + firstgroup3 + '&secondgroup3=' + secondgroup3 + '&firstgroup4=' + firstgroup4 + '&secondgroup4=' + secondgroup4 + '&firstgroup5=' + firstgroup5 + '&secondgroup5=' + secondgroup5 
  + '&firstgroup6=' + firstgroup6 + '&secondgroup6=' + secondgroup6 + '&firstgroup7=' + firstgroup7 + '&secondgroup7=' + secondgroup7 + '&firstgroup8=' + firstgroup8 + '&secondgroup8=' + secondgroup8;

// Form validation
var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

if( firstgroup1 == '' || secondgroup1 == '' || firstgroup2 == '' || secondgroup2 == '' || firstgroup3 == '' || secondgroup3 == '' || firstgroup4 == '' || secondgroup4 == '' || firstgroup5 == '' || secondgroup5 == '' || firstgroup6 == '' || secondgroup6 == '' || firstgroup7 == '' || secondgroup7 == '' || firstgroup8 == '' || secondgroup8 == '')
{
  $(".validation-alert").html("Select two teams from each group");
  $(".validation-alert").css("display","block");
  $("html, body").animate({ scrollTop: 0 }, 0);
}
else if(fullname == '' || email == ''){
  $(".validation-alert").html("Please fill in all the fields");
  $(".validation-alert").css("display","block");
  $("html, body").animate({ scrollTop: 0 }, 0);
}
else if (testEmail.test($("#email").val()) == false ){
  $(".validation-alert").html("Please enter a correct email address");           
  $('.validation-alert').css("display","block");
  $('html, body').animate({ scrollTop: 0 }, 0);
}
else{
  $.ajax({
    type: "POST",
    url: "backend/post.php",
    data: dataString,
    success: function(result){
     $('.success-alert').css("display","block");
     $(".validation-alert").css("display","none");
     $('html, body').animate({ scrollTop: 0 }, 0);
     // prevent a second submission from same data
     $('input').attr('readonly', true);
     $(".btn-form-submit").attr("disabled", "disabled");
     $('a').unbind("click").click(function(e) {
          e.preventDefault();
      });
    }
  }).done (function(){
            // Open tab and download CSV file with DDBB records
            var win = window.open('xxxxx/Landing-page/backend/createCSV.php', '_blank');
            if(win){
            //Browser has allowed it to be opened
            win.focus();
            }else{
            //Broswer has blocked it
            alert('Please allow popups for this site in order to download CSV file with records');
            }
    }); ;
};
return false;
});
});

// end document js
});