$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/modx-mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

let showMenu = () => {
	let navList = document.body.querySelectorAll(".nav-list");

	navList[0].classList.toggle("show-menu");
};

let showActive = () => {
	let listItem = document.body.querySelectorAll("a.list-item");
	    
	listItem[2].classList.toggle("active");
};

// плавная прокрутка по якорю
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}