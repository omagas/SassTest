jQuery.fn.mytoolbox = function() {
    return this.each(function() {
      jQuery(this).click(function () {
            alert(this.id);

             //$('#test1').fadeOut();
             
			$(this).fadeOut();//dd


        });
    });
};