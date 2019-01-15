import { square, diag } from "./lib.js";
import { helloWorld } from "./lib.js";
import { printAmt, calculateFinalPurchaseAmount } from "./lib.js";

(function() {
  console.log(helloWorld.replace("Hello", "Hi"));
  console.log(square(3));
  console.log(diag(3, 4));
  // var msg = "Book a room in the Hotel ";
  // function updateMsg() {
  //   var el = document
  //     .querySelectorAll(".message")
  //     .forEach(function(index, val) {
  //       index.textContent = msg;s
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
  var year1 = today.getFullYear();
  var est = new Date("Apr 16, 1996 12:34:15");
  var diff = today.getTime() - est.getTime();
  diff = diff / 31556900000;

  var saying = "home Sweet Home";
  var msg =
    '<div class="grid-container"> ' +
    '<div class="grid-item item-1"> <p>lenght</p><p> ' +
    saying.length +
    " </p></div>";
  msg +=
    ' <div class="grid-item item-2"> <p>uppercase</p><p> ' +
    saying.toLocaleUpperCase() +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-3"> <p>lowercase</p><p> ' +
    saying.toLocaleLowerCase() +
    " </p> </div>";
  msg +=
    ' <div class="grid-item item-4"> <p>Char index: </p><p> ' +
    saying.charAt(12) +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-5"> <p>first ee</p><p> ' +
    saying.indexOf("ee") +
    " </p> </div>";
  msg +=
    ' <div class="grid-item item-6"> <p>last e</p><p> ' +
    saying.indexOf("e") +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-7"> <p>char index: 8-14</p><p> ' +
    saying.substring(8, 14) +
    " </p> </div>";
  msg +=
    ' <div class="grid-item item-8"> <p>replace</p><p> ' +
    saying.replace("me", "w") +
    " </p></div> ";
  msg +=
    ' <div class="grid-item item-9"> <p> &copy' + year + " </p></div></div> ";

  var orginalNumber = 12.45678;
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var msg2 =
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

  msg2 +=
    ' <div class="grid-item item-6"> <h4>Random Number</h4><p> ' +
    randomNumber +
    " </p></div></div> ";

  var el = document.getElementById("info-1");
  el.innerHTML = msg2;

  var el2 = document.getElementById("info-2");
  el2.innerHTML = msg;

  // create hotel object and write out there offers

  // create the object using object literals
  var hotelP = {
    name: "Park",
    roomRate: 240.0, // amount in euros
    discount: 15, // percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  // write out the hotelP name, standard rate and spaecial rate
  var hotelPNameUl, roomRateLi, specialRateLi;

  hotelPNameUl = document.getElementById("hotelName");
  roomRateLi = document.createElement("li");
  specialRateLi = document.createElement("li");

  hotelPNameUl.textContent = "Hotel: " + hotelP.name;
  roomRateLi.textContent = "Room rate: " + printAmt(hotelP.roomRate);
  specialRateLi.textContent = "Offer price: " + printAmt(hotelP.offerPrice());

  hotelPNameUl.appendChild(roomRateLi);
  hotelPNameUl.appendChild(specialRateLi);

  let amount2 = 99.99;
  let finAmount = document.getElementById("rooms1");
  finAmount.textContent = printAmt(calculateFinalPurchaseAmount(amount2));

  var windowDets =
    "<h2> Browser Window: </h2><p> Inner Height: " + innerHeight + "</p>";
  windowDets += "<p>Inner Width: " + innerWidth + "</p>";
  windowDets += "<p>Window History: " + window.history.length + "</p>";
  windowDets += "<p>Screen Height: " + window.screen.height + "</p>";
  windowDets += "<p>Screen Width: " + window.screen.width + "</p>";

  alert("Current page: " + window.location);

  var element = document.getElementById("window");

  element.innerHTML = windowDets;
})();

(function() {
  var expiryMsg;
  var today;
  var elEnds;

  function offerExpirys(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // add seven days time
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // create arrays to hold the names of days / months
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    // collect part of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // create the message
    expiryMsg = "Offer expires next ";
    expiryMsg += day + " <br>(" + date + " " + month + " " + year + ")";
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById("roomType1");
  elEnds.innerHTML = offerExpirys(today);
})();
