const agriInvlist = [
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Agro-aid",
    shrText:
      "Aims to brighten the future of Nigeria, particularly for women and youth.",
    investorsCount: 213,
    percReturn: 23.3,
    returns: 11,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Tech Innovators",
    shrText:
      "Driving technological innovation and creating opportunities for the younger generation.",
    investorsCount: 178,
    percReturn: 20.1,
    returns: 9,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Green Ventures",
    shrText:
      "Dedicated to sustainable and eco-friendly projects for a greener future.",
    investorsCount: 135,
    percReturn: 18.5,
    returns: 7,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "HealthCare Solutions",
    shrText:
      "Improving healthcare access and quality through innovative solutions.",
    investorsCount: 192,
    percReturn: 21.8,
    returns: 10,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Renewable Energy Ventures",
    shrText:
      "Harnessing the power of renewable energy for a sustainable future.",
    investorsCount: 155,
    percReturn: 19.2,
    returns: 8,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Education Pioneers",
    shrText:
      "Transforming education and empowering students for a brighter tomorrow.",
    investorsCount: 167,
    percReturn: 20.5,
    returns: 9,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Space Exploration Technologies",
    shrText: "Pushing the boundaries of space exploration and technology.",
    investorsCount: 203,
    percReturn: 22.6,
    returns: 12,
  },
  {
    Img: "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/investment-icon.png",
    companyName: "Artificial Intelligence Innovations",
    shrText: "Advancing AI technologies to shape the future of innovation.",
    investorsCount: 185,
    percReturn: 20.8,
    returns: 11,
  },
];

let totalPost = 184;

document.getElementById(
  "totalPost"
).innerHTML = `Total Agriculturists ${totalPost}`;

function agriculturistsList(investor) {
  return `
  <div class="forum-item active">
  <div class="row">
    <div class="col-md-9">
      <div class="forum-icon profile-pic">
          <img
          class="  rounded-circle mid-icon"
          src=${investor.Img}
        ></img>
      </div>
      <a href="forum_post.html" class="forum-item-title"
        >${investor.companyName}</a
      >
      <div class="forum-sub-title">
      ${investor.shrText}
      </div>
    </div>
    <div class="col-md-1 forum-info">
      <span class="views-number"> ${investor.investorsCount} </span>
      <div>
        <small>Backers</small>
      </div>
    </div>
    <div class="col-md-1 forum-info">
      <span class="views-number"> ${investor.percReturn}%</span>
      <div>
        <small>Gains</small>
      </div>
    </div>
    <div class="col-md-1 forum-info">
      <span class="views-number"> ${investor.returns} </span>
      <div>
        <small>Prosperity</small>
      </div>
    </div>
  </div>
</div>
    `;
}

const listContainer = document.getElementById("investlist");
agriInvlist.forEach((agri) => {
  let postHTML = agriculturistsList(agri);
  listContainer.innerHTML += postHTML;
});
