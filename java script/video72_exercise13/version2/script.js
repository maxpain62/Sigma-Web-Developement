let VideoViewCount = 727000;
let VideoViewCountConverter = Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
}).format(VideoViewCount);

function cardContent(ImageUrl, VideoTitle, ChannelName, VideoViews, VideoAge) {
  let htmlcontent = `<div class="card">
   <div class="image">
    <img src=${ImageUrl} />
    <div class="capsul">31:20</div>
   </div>
   <div class="text">
    <h1>
    ${VideoTitle}
    </h1>
    <p>${ChannelName} . ${VideoViews} views . ${VideoAge} months</p>
   </div>
  </div>`;
  let htmlcontent2 = `<div class="card">
   <div class="image">
    <img src=${ImageUrl} />
    <div class="capsul">31:20</div>
   </div>
   <div class="text">
    <h1>
    ${VideoTitle}
    </h1>
    <p>${ChannelName} . ${VideoViews} views . ${VideoAge} months</p>
   </div>
  </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + htmlcontent;

  let newelement = document.createElement("div");
  newelement.setAttribute("class", "card2");
  newelement.innerHTML = htmlcontent2;
  document.querySelector(".container").append(newelement);
}

cardContent(
  "hqdefault.avif",
  "Installing VS Code & How Websites Works | Sigma Web Developement Course",
  "CodeWithHarry",
  VideoViewCountConverter,
  12
);
