$(document).ready(function()
    {

        $(".faq_list .faq_text").hide();
        $(".faq_q").click(
            function()
            {
                if($(this).find('.faq_text').is(":hidden"))
                {
                    $(this).css('border','solid 3px #f14f39');
                    $(this).find('.faq_btn').css('color','rgb(239, 88, 54)')
                } 
                else{
                    $(this).css('border','none');
                    $(this).find('.faq_btn').css('color','black')

                }
                $(this).find('.faq_text').slideToggle();
                
            }
        );
    });
    