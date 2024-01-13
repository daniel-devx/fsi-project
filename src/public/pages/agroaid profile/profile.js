const user1 = [
  {
    picurl: "https://img.icons8.com/wired/64/circled-user.png",
    username: "steven hert",
    companyname: "agro aid",
    discription: "we manage and maintain the overall properties of this app",
    contactinfo: "080249987",
    companygmail: "nnsd@gmIl.com",
    agriculturist: true,
    certification: [],
    entrydate: "2020/11/1",
    follwer: 15,
    prosperity: 35,
    investors: 147,
    gains: 24,
    location: "21 isolo lagos state",
    lang: "english",
    socialmedia: "@david",
    investmentStatus: {
      slotopened: {
        date: "12/1/2024",
        stillopen: true,
      },
      slotclosed: {
        stillopen: false,
      },
      investmentinuse: "",
      returnsmade: false,
    },
  },
];
const usershop = [
  {
    picurl: "https://img.icons8.com/wired/64/circled-user.png",
    itemname: "Tomatoes",
    description: "Red and freash from the market",
  },
];

user1.forEach((item) => {
  document.getElementById("username1").innerHTML = item.username;
  document.getElementById("profileic").src = item.picurl;
  document.getElementById("companyname").innerHTML = item.companyname;
  document.getElementById("shortinfo").innerHTML = item.discription;
  document.getElementById("gmail").innerHTML = item.companygmail;
  document.getElementById("phone-no").innerHTML = item.contactinfo;
  document.getElementById("qwi1").innerHTML = item.follwer;
  document.getElementById("qwi2").innerHTML = item.prosperity;
  document.getElementById("qwi3").innerHTML = item.investors;
  document.getElementById("qwi4").innerHTML = item.gains;
  document.getElementById("location").innerHTML = item.location;
  document.getElementById("language").innerHTML = item.lang;
});

// shopitem
function shopitemcontainer(itemsinfo) {
  return `
                      <div class="col-xl-4 col-md-6" id="team-1">
                    <div class="card">
                        <div>
                          <div class="card-body" >
                            <img class="card-img-top marketimg"  src=${itemsinfo.picurl}>
                              <h5 class="card-title">${itemsinfo.itemname}</h5>
                              <p class="card-text small">${itemsinfo.description}
                              </p>
                              <a href="#" class="btn btn-primary buybtn">Buy</a>

                          <!-- <h5 class="mb-1 font-size-17">Marketing</h5>
                          <p class="text-muted font-size-13 mb-0">4 Projects</p> -->
                        </div>
                      </div>
                      <!-- end card-body -->
                    </div>
                    <!-- end card -->
                  </div>`;
}

function investmentcontainer(item) {
  return `
  <div class="container mt-5 mb-3">
  <div class="row">
    <div class="d-flex flex-row">
      <div class="card p-3 mb-2">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-left">
            <div class="ms-2 c-details">
              <h6 class="mb-0">Imported large chickens</h6>
              <span>1 days ago</span>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <h3 class="heading">
            Senior Product<br />
            <h6 class="investment-discription">
              due to the problems facing nigeria, the rate at wich chicken
              grow has become really bad and i have peopossed a this factor
              where i can get the chichkens from abroad with therier eggs
              and with the aid of the fininacisn i avn make this a dream
              that can come through
            </h6>
          </h3>
          <div class="mt-5 ">
            <hr />
            <img
              class="card-img-top marketimg investimg"
              src="https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png"
            />
            <ul>
  <li>cumulative slot value <span>234000</span>></li>
  <hr />
  <li>total exsisting slot: <span>234</span>></li>
  <hr />
  <li>single slot value: <span>20</span>></li>
  <hr />
</ul>
<form>
    <label for="numericInput">Enter a number of slot to be bought:</label>
    <br>
    <input type="number" id="numericInput" name="numericInput" pattern="[0-9]*" required>
    <input type="submit" value="Submit">
</form>
<br>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 73.8%"
                aria-valuenow="1"
                aria-valuemin="0"
                aria-valuemax="11"
                id="progress-bar"
              ></div>
            </div>
            <div class="mt-3">
            
              <span class="text1"
                >32 solts left <span class="text2">of 50 slots</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}

usershop.forEach((item) => {
  document.getElementById("shopitem").innerHTML += shopitemcontainer(item);
});
// document.getElementById('container').addEventListener('click', function (event) {
//     // Check if the clicked element is a word (text node)
//     if (event.target.nodeType === 3) {
//         // Clear div items if a word is clicked
//         clearDivItems();
//     }
// })

document.getElementById("myTab").addEventListener("click", function (event) {
  if (event.target.id === "investmentbutton") {
    document.getElementById("shopitem").innerHTML = "";
    document.getElementById("pageheader").innerHTML = "Investment";
    document.getElementById("investmentcontrol").classList.add("active");
    document.getElementById("marketcontrol").classList.remove("active");
    document.getElementById("gatheringcontrol").classList.remove("active");
    document.getElementById("shopitem").innerHTML +=
      investmentcontainer("item");
  }
  if (event.target.id === "gatheringbutton") {
    document.getElementById("shopitem").innerHTML = "";
    document.getElementById("pageheader").innerHTML = "Gathering";
    document.getElementById("investmentcontrol").classList.remove("active");
    document.getElementById("marketcontrol").classList.remove("active");
    document.getElementById("gatheringcontrol").classList.add("active");
    document.getElementById("progress-bar").style.width = "1%";
  }
  if (event.target.id === "marketbutton") {
    document.getElementById("shopitem").innerHTML = "";
    document.getElementById("pageheader").innerHTML = "Market place";
    document.getElementById("investmentcontrol").classList.remove("active");
    document.getElementById("marketcontrol").classList.add("active");
    document.getElementById("gatheringcontrol").classList.remove("active");
    usershop.forEach((item) => {
      document.getElementById("shopitem").innerHTML += shopitemcontainer(item);
    });
  }
});
