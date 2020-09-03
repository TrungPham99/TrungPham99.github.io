$(document).ready(function () {
    $(".logo").click(function () {
        $("html,body").animate({scrollTop:0},1000)
    });

    $(window).scroll(function () {
       var vitri= $("body,html").scrollTop();
       if(vitri >= 100)
       {
           $(".nenNavbar").addClass("fixed-top");
           $(".nenduoiNavbar").addClass("menuthem");
           $(".nentrenNavbar").hide();
           $(".logo").addClass('logothem')
       }
       else{
            $(".nenNavbar").removeClass("fixed-top");
            $(".nentrenNavbar").show();
            $(".logo").removeClass('logothem')
            $(".nenduoiNavbar").removeClass("menuthem");
       }
    });
    
    var users = [
        {name: 'PizzaToping 1', species: 'Tân Phú'},
        {name: 'PizzaToping 2', species: 'Tân Phú'},
        {name: 'PizzaToping 3', species: 'Tân Bình'},
        {name: 'PizzaToping 4', species: 'Tân Bình'},
        {name: 'PizzaToping 1', species: 'All'},
        {name: 'PizzaToping 2', species: 'All'},
        {name: 'PizzaToping 3', species: 'All'},
        {name: 'PizzaToping 4', species: 'All'},

    ];
    var userList = $('#userList'); /*gọi nó ra */
    var select = $('#select');/*gọi nó ra */
    render(userList, users); /*cái này chuyển */    

    select.on('change', function(){
        var danhsachLoai = this.value;
        var locLoai = users.filter(function(user){
            return user.species === danhsachLoai
        })
        render(userList, locLoai);
    });
    
    function render(container, items)/*thành cái này*/{
        var htmlItems = items.map(function(item){
            return '<li class="list-group-item">' + item.name + '</li>'
        });
        var html = htmlItems.join('');
        container.html(html);
    };   
    
    var hinhThems = [
        {name: '<img src="/logo-the-pizza-company.png" alt=""></img>' },
        {name: '<img src="/logo-the-pizza-company-red.png" alt=""></img>' }
    ];

    var so = function rollADie() {
        var random = Math.ceil(Math.random() * 1);
        return random;
    }

    var contents = hinhThems[0].name;
    var content = hinhThems[1].name;
    document.getElementById('themhinh').innerHTML = contents;
    function myT() {
        document.getElementById("themhinh").innerHTML = content;
    }
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function myFunction() {
    document.getElementById("kich").style.color = "red";
}

function myFunction() {
    document.getElementById("kich").style.color = "red";
}
function myFunction1() {
    document.getElementById("kich1").style.color = "yellow";
}
function myFunction2() {
    document.getElementById("kich2").style.color = "blue";
}
function myFunction3() {
    document.getElementById("kich3").style.color = "black";
}
  
