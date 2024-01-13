const jsonData = [
  {
    title: "Drupal 8 quick starter guide",
    timePosted: "20 minutes",
    postedBy: "ago by",
    categories: ["#C++", "#AppStrap Theme", "#Wordpress"],
    votes: 141,
    replies: 122,
    views: 290,
    borderColor: "border-primary",
  },
  {
    title: "HELP! My Windows XP machine is down",
    timePosted: "54 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#AppStrap Theme"],
    votes: 256,
    replies: 251,
    views: 223,
    borderColor: "border-danger",
  },
  {
    title:
      "Bootstrap 4 development in record time with AppStrap\n          Bootstrap 4 Theme",
    timePosted: "32 minutes",
    postedBy: "ago by",
    categories: ["#Bootstrap 4", "#Wordpress"],
    votes: 245,
    replies: 116,
    views: 257,
    borderColor: "border-primary",
  },
  {
    title:
      "Bootstrap 4 development in record time with AppStrap\n          Bootstrap 4 Theme",
    timePosted: "29 minutes",
    postedBy: "ago by",
    categories: ["#Android", "#Bootstrap 4", "#Wordpress", "#Drupal"],
    votes: 49,
    replies: 29,
    views: 170,
    borderColor: "border-warning",
  },
  {
    title: "Drupal 8 quick starter guide",
    timePosted: "53 minutes",
    postedBy: "ago by",
    categories: ["#iOS", "#Bootstrap 4"],
    votes: 164,
    replies: 82,
    views: 240,
    borderColor: "border-primary",
  },
  {
    title:
      "Custom shortcut or command to launch command in\n          terminal?",
    timePosted: "44 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#C++", "#Bootstrap 4"],
    votes: 180,
    replies: 35,
    views: 44,
    borderColor: "border-warning",
  },
  {
    title: "HELP! My Windows XP machine is down",
    timePosted: "3 minutes",
    postedBy: "ago by",
    categories: ["#C++", "#AppStrap Theme", "#Drupal"],
    votes: 236,
    replies: 79,
    views: 162,
    borderColor: "border-primary",
  },
  {
    title:
      "Bootstrap 4 development in record time with AppStrap\n          Bootstrap 4 Theme",
    timePosted: "46 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#C++", "#Drupal"],
    votes: 130,
    replies: 121,
    views: 191,
    borderColor: "border-primary",
  },
  {
    title: "HELP! My Windows XP machine is down",
    timePosted: "41 minutes",
    postedBy: "ago by",
    categories: ["#Android", "#Bootstrap 4", "#Wordpress"],
    votes: 194,
    replies: 16,
    views: 113,
    borderColor: "border-danger",
  },
  {
    title: "HELP! My Windows XP machine is down",
    timePosted: "30 minutes",
    postedBy: "ago by",
    categories: ["#Android", "#AppStrap Theme", "#Wordpress"],
    votes: 179,
    replies: 194,
    views: 167,
    borderColor: "border-primary",
  },
  {
    title:
      "Bootstrap 4 development in record time with AppStrap\n          Bootstrap 4 Theme",
    timePosted: "56 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#Wordpress"],
    votes: 11,
    replies: 120,
    views: 240,
    borderColor: "border-primary",
  },
  {
    title: "Windows batch, recursively copy files",
    timePosted: "25 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#Wordpress"],
    votes: 25,
    replies: 211,
    views: 234,
    borderColor: "border-warning",
  },
  {
    title: "Drupal 8 quick starter guide",
    timePosted: "21 minutes",
    postedBy: "ago by",
    categories: ["#C++", "#AppStrap Theme"],
    votes: 70,
    replies: 187,
    views: 234,
    borderColor: "border-warning",
  },
  {
    title: "Windows batch, recursively copy files",
    timePosted: "60 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#iOS", "#Bootstrap 4", "#Wordpress"],
    votes: 288,
    replies: 206,
    views: 1,
    borderColor: "border-danger",
  },
  {
    title:
      "Custom shortcut or command to launch command in\n          terminal?",
    timePosted: "27 minutes",
    postedBy: "ago by",
    categories: ["#AppStrap Theme", "#Wordpress", "#Drupal"],
    votes: 144,
    replies: 92,
    views: 25,
    borderColor: "border-primary",
  },
  {
    title: "HELP! My Windows XP machine is down",
    timePosted: "22 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#Android", "#Bootstrap 4", "#Wordpress"],
    votes: 199,
    replies: 75,
    views: 61,
    borderColor: "border-danger",
  },
  {
    title: "HELP! My Windows XP machine is down",
    timePosted: "14 minutes",
    postedBy: "ago by",
    categories: ["#C++", "#Android", "#Drupal"],
    votes: 74,
    replies: 77,
    views: 144,
    borderColor: "border-primary",
  },
  {
    title:
      "Custom shortcut or command to launch command in\n          terminal?",
    timePosted: "15 minutes",
    postedBy: "ago by",
    categories: ["#Android", "#Bootstrap 4", "#AppStrap Theme"],
    votes: 88,
    replies: 48,
    views: 283,
    borderColor: "border-warning",
  },
  {
    title: "Drupal 8 quick starter guide",
    timePosted: "59 minutes",
    postedBy: "ago by",
    categories: ["#Android", "#Bootstrap 4", "#Wordpress"],
    votes: 82,
    replies: 22,
    views: 40,
    borderColor: "border-warning",
  },
  {
    title:
      "Bootstrap 4 development in record time with AppStrap\n          Bootstrap 4 Theme",
    timePosted: "26 minutes",
    postedBy: "ago by",
    categories: ["#Development", "#iOS", "#Bootstrap 4", "#Wordpress"],
    votes: 163,
    replies: 236,
    views: 22,
    borderColor: "border-warning",
  },
];

const topTrend = [
  {
    title: "leaves turning purple",
    timePosted: "26 minutes",
    postedBy: "steven hert",
  },
];

const statsJson = [
  {
    topics: 13,
    Posts: 100,
    members: 1302,
  },
];

function categorieSplit(items) {
  let info = "";
  items.forEach((element) => {
    info += `<a class="text-black mr-2" href="#">${element}</a>`;
  });
  return info;
}

// Function to generate HTML structure for a post
function generatePostHTML(post) {
  return `
  <div
  class="card row-hover pos-relative py-3 px-3 mb-3 ${
    post.borderColor
  }  border-top-0 border-right-0 border-bottom-0 rounded-0"
>
  <div class="row align-items-center">
    <div class="col-md-8 mb-3 mb-sm-0">
      <h5>
        <a href="#" class="text-primary"
          >${post.title}</a
        >
      </h5>
      <p class="text-sm">
        <span class="op-6">Posted</span>
        <a class="text-black" href="#">${post.timePosted}</a>
        <span class="op-6">ago by</span>
        <a class="text-black" href="#">${post.postedBy}</a>
      </p>
      <div class="text-sm op-5">
      ${categorieSplit(post.categories)}
      </div>
    </div>
    <div class="col-md-4 op-7">
      <div class="row text-center op-7">
        <div class="col px-1">
          <i class="ion-connection-bars icon-1x"></i>
          <span class="d-block text-sm">${post.votes} Votes</span>
        </div>
        <div class="col px-1">
          <i class="ion-ios-chatboxes-outline icon-1x"></i>
          <span class="d-block text-sm">${post.replies} Ans</span>
        </div>
        <div class="col px-1">
          <i class="ion-ios-eye-outline icon-1x"></i>
          <span class="d-block text-sm">${post.views} Views</span>
        </div>
      </div>
    </div>
  </div>
</div>
<hr></hr>
    `;
}

function getTrendPost(trending) {
  return `                <hr class="m-0" />
    <div class="pos-relative px-3 py-3">
      <h6 class="text-primary text-sm">
        <a href="#" class="text-primary"
          >${trending.title}
        </a>
      </h6>
      <p class="mb-0 text-sm">
        <span class="op-6">Posted</span>
        <a class="text-black" href="#">${trending.timePosted}</a>
        <span class="op-6">ago by</span>
        <a class="text-black" href="#">${trending.postedBy}</a>
      </p>
    </div>`;
}

function currentStats(stats) {
  return `
    <hr class="m-0" />
    </div>
    <div class="bg-white text-sm">
      <h4 class="px-3 py-4 op-5 m-0 roboto-bold">Stats</h4>
      <hr class="my-0" />
      <div class="row text-center d-flex flex-row op-7 mx-0">
        <div
          class="col-sm-6 flex-ew text-center py-3 border-bottom border-right"
        >
          <a class="d-block lead font-weight-bold" href="#">${stats.topics}</a>
          Topics
        </div>
        <div
          class="col-sm-6 col flex-ew text-center py-3 border-bottom mx-0"
        >
          <a class="d-block lead font-weight-bold" href="#">${stats.Posts}</a>
          Posts
        </div>
      </div>
      <div class="row d-flex flex-row op-7">
        <div
          class="col-sm-6 flex-ew text-center py-3 border-right mx-0"
        >
          <a class="d-block lead font-weight-bold" href="#">${stats.members}</a>
          Members
        </div>
`;
}
// Loop through jsonData and append HTML to the container
const dynamicContentContainer = document.getElementById("mainroll");
const topTrendContainer = document.getElementById("top-trend");
const statsContainer = document.getElementById("top-trend");
jsonData.forEach((post) => {
  let postHTML = generatePostHTML(post);
  dynamicContentContainer.innerHTML += postHTML;
});

topTrend.forEach((tre) => {
  let postHTML = getTrendPost(tre);
  topTrendContainer.innerHTML += postHTML;
});

statsJson.forEach((stati) => {
  let postHTML = currentStats(stati);
  topTrendContainer.innerHTML += postHTML;
});
