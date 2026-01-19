const heritageData = {
  "TN-HER-001": {
    title: "Meenakshi Amman Temple",
    story: "Meenakshi Amman Temple in Madurai is a historic temple dedicated to Goddess Meenakshi and Lord Sundareswarar, known for its grand gopurams and Dravidian architecture.",
    audio: "audio/meenakshi.mp3"
  },
  "TN-HER-002": {
    title: "Brihadeeswara Temple",
    story: "The Brihadeeswara Temple in Thanjavur, built by Raja Raja Chola I in 1010 CE, is a UNESCO World Heritage Site and a masterpiece of Chola architecture.",
    audio: "audio/brihadeeswara.mp3"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (heritageData[id]) {
  document.getElementById("title").innerText = heritageData[id].title;
  document.getElementById("story").innerText = heritageData[id].story;
  document.getElementById("audio").src = heritageData[id].audio;
}
