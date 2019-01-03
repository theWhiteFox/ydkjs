(function() {
  // var msg = "Book a room in the Hotel ";
  // function updateMsg() {
  //   var el = document
  //     .querySelectorAll(".message")
  //     .forEach(function(index, val) {
  //       index.textContent = msg;
  //     });
  // }

  // updateMsg();
  function getSize(w, h, depth) {
    var area = w * h;
    var volume = w * h * depth;
    var sizes = [area, volume];
    return sizes;
  }
  var areaOne = getSize(3, 2, 3)[0];
  var volumeOne = getSize(3, 2, 3)[1];
  console.log("Area One: " + areaOne + "\n" + "Volume One: " + volumeOne);

  var hotel1 = {
    name: "XO",
    city: "The Dam",
    rooms: 10,
    booked: 4,
    gym: false,

    roomType: ["single", " double", " dorm"],

    checkAvailabilty: function() {
      return this.rooms - this.booked;
    }
  };

  var hotel2 = {
    name: "Taskh",
    city: "New Delhi",
    rooms: 30,
    booked: 20,
    gym: false,

    roomType: ["single", " double", " dorm"],

    checkAvailabilty: function() {
      return this.rooms - this.booked;
    }
  };

  // var elName1 = document.getElementById("hotelName1");
  // elName1.textContent = hotel1.name;

  // var elRoomType1 = document.getElementById("roomType1");
  // elRoomType1.textContent = hotel1.roomType;

  // var elRooms1 = document.getElementById("rooms1");
  // elRooms1.textContent = hotel1.checkAvailabilty();

  // var elName2 = document.getElementById("hotelName2");
  // elName2.textContent = hotel2.name;

  // var elRoomType2 = document.getElementById("roomType2");
  // elRoomType2.textContent = hotel2.roomType[1];

  // var elRooms2 = document.getElementById("rooms2");
  // elRooms2.textContent = hotel2.checkAvailabilty();

  var hotel = {};

  hotel.name = "XPark";
  hotel.city = "The Dam";
  hotel.rooms = 10;
  hotel.booked = 4;
  hotel.gym = true;
  hotel.pool = false;

  delete hotel.booked;

  hotel.checkAvailabilty = function() {
    return this.rooms - this.booked;
  };

  function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailabilty = function() {
      return this.rooms - this.booked;
    };
  }

  var quayHotel = new Hotel("Quay", 50, 34);
  var parkHotel = new Hotel("Park", 80, 21);
  console.log("​park Hotel", parkHotel.checkAvailabilty());
  console.log("​quay Hotel", quayHotel.checkAvailabilty());

  var details1 = quayHotel.name + " rooms ";
  details1 += quayHotel.checkAvailabilty();
  var elHotel1 = document.getElementById("hotel1");
  elHotel1.textContent = details1;

  var details2 = parkHotel.name + " rooms: ";
  details2 += parkHotel.checkAvailabilty();
  var elHotel2 = document.getElementById("hotel2");
  elHotel2.textContent = details2;

  console.log("​details1", details1);
  console.log("​details2", details2);

  var today = new Date();
  var year = today.getFullYear();
  // var year1 = today.getFullYear();
  var est = new Date('Apr 16, 1996 12:34:15');
  var diff = today.getTime() - est.getTime();
  diff = (diff / 31556900000);

  var saying = "home Sweet Home";
  var msg =
    '<div class="grid-container"> ' + 
    '<div class="grid-item item-1"> <h2>lenght</h2><p> ' +
    saying.length +
    " </p></div>";
  msg +=
    ' <div class="grid-item item-2"> <h2>uppercase</h2><p> ' +
    saying.toLocaleUpperCase() +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-3"> <h2>lowercase</h2><p> ' +
    saying.toLocaleLowerCase() +
    " </p> </div>";
  msg +=
    ' <div class="grid-item item-4"> <h2>Char index: </h2><p> ' +
    saying.charAt(12) +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-5"> <h2>first ee</h2><p> ' +
    saying.indexOf("ee") +
    " </p> </div>";
  msg +=
    ' <div class="grid-item item-6"> <h2>last e</h2><p> ' +
    saying.indexOf("e") +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-7"> <h2>char index: 8-14</h2><p> ' +
    saying.substring(8, 14) +
    " </p> </div>";
  msg +=
    ' <div class="grid-item item-8"> <h2>replace</h2><p> ' +
    saying.replace("me", "w") +
    " </p></div> ";
    msg +=
    ' <div class="grid-item item-9"> <h2> &copy' +
    year +
    " </p></div></div> ";

    var orginalNumber = 12.45678;
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    msg2 =
    ' <div class="grid-container"> ' + 
    ' <div class="grid-item item-8"> <h4>Orginal Number</h4><p> ' +
    orginalNumber +
    " </p></div> ";
    msg2 +=
    ' <div class="grid-item item-4"> <h4>toFixed(3) Number</h4><p> ' +
    orginalNumber.toFixed(3) +
    " </p></div> ";
    msg2 +=
    ' <div class="grid-item item-5"> <h4>toPrecision(3) Number</h4><p> ' +
    orginalNumber.toPrecision(3) +
    " </p></div> ";
    var orginalNumber = 12.45678;
    msg2 +=
    ' <div class="grid-item item-6"> <h4>Random Number</h4><p> ' +
    randomNumber +
    " </p></div></div> ";

  var el = document.getElementById("info-1");
  el.innerHTML = msg2;

  var el = document.getElementById("info-2");
  el.innerHTML = msg;

})();
