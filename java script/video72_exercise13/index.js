let VideoTitle = document.createElement("div");
VideoTitle.setAttribute("class", "VideoTitle");
VideoTitle.innerText =
  "Installing VS Code & How Websites Works | Sigma Web Developement Course";
document.querySelector(".InfoDiv").prepend(VideoTitle);

let ChannelName = document.createElement("span");
ChannelName.setAttribute("class", "ChannelName");
ChannelName.innerText = "CodeWithHarry . ";
document.querySelector(".otherinfo").append(ChannelName);

let VideoViewCount = Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
}).format(727000);

let VideoViews = document.createElement("span");
VideoViews.setAttribute("class", "VideoViews");
VideoViews.innerText = VideoViewCount + " views ";
document.querySelector(".otherinfo").append(VideoViews);

let VideoAge = document.createElement("span");
VideoAge.setAttribute("class", "VideoAge");
VideoAge.innerText = ". 12 Months";
document.querySelector(".otherinfo").append(VideoAge);

let VideoDuration = document.createElement("div");
VideoDuration.setAttribute("class", "VideoDuration");
VideoDuration.innerText = "31:20";
document.querySelector(".ImageDiv").append(VideoDuration);
