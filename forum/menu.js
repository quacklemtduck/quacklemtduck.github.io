var menuItems = [];

menuItems[0] = ["Nyheder", ""];

menuItems[1] = ["Personer", ""];

menuItems[2] = ["Politik",""];

menuItems[3] = ["Forum",""];





var menu = document.getElementById("menu");

var i = 0;

var output = "";

for(i=0;i<menuItems.length;i++){
    output += '<a href="' + menuItems[i][1] + '"><p class="menu-ting">' + menuItems[i][0] + '</p></a>';
}

menu.innerHTML = output;

/*
<a href="">
            <p class="menu-ting">spil</p>
        </a>
        <a href="">
            <p class="menu-ting">test</p>
        </a>
        */