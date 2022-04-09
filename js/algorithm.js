function aBusinessProposal(){window.location = "https://dramacool.news/asian-wiki/the-office-blind-date.html";}
var aBusinessProposaldramaTitle = "A Business Proposal";
var aBusinessProposaldramaDetail = document.getElementById('a-business-proposal-drama-detail');
let episodes = 12;
let elements = document.querySelectorAll('.a-business-proposal-ep').length;
var dramaImage = document.getElementById('a-business-proposal-drama-img');

document.getElementById('a-business-proposal-drama-title').innerHTML = aBusinessProposaldramaTitle;
aBusinessProposaldramaDetail.innerHTML = "Cha Young Min is a genius doctor, with excelling skills at surgery, but he is arrogant and selfish. One day, he gets involved in an unexpected case, and due to this, his spirit possesses another doctor's body, namely Seong Tak. These two doctors are complete opposites, with opposite personalities and medical abilities.<br>\
While Young Min is arrogant and cold-blooded, who only cares about his career, and doesn't care about any of his patient's personal stories, Seong Tak is the luckiest and richest resident doctor whose grandfather is the founder of Myung-shin hospital and mother is the chairman of the hospital. Never wanting to be a good doctor, he becomes processed by the two ghost doctors with completely different backgrounds.<br><br>\
Director: Boo Seong Cheol [부성철]<br>\
Original Network: tvN;<br>\
Country: Korean<br>\
Status: Completed<br>\
Genres: Drama; Fantasy; Medical; Supernatural;<br>\
Airs: 2022"
+ "<br>" + "Episodes: " + episodes ;
dramaImage.setAttribute("src", "https://imagecdn.me/cover/the-office-blind-date.png");
if(elements < 12){
document.getElementById('a-business-proposal-output').innerHTML = elements + " Episodes | Ongoing";
}if(elements == 12){
document.getElementById('a-business-proposal-output').innerHTML = elements + " Episodes | Completed";
}
if(elements == 1){
document.getElementById('a-business-proposal-output').innerHTML = elements + " Episode | Ongoing";
}


function ghostDoctor(){window.location = "https://dramacool.news/asian-wiki/the-ghost-doctor.html";}
var ghostDoctor = "The Ghost Doctor";
var ghostDoctordramaDetail = document.getElementById('ghost-doctor-drama-detail');
let ghostDoctorepisodes = 16;
let ghostDoctorelements = document.querySelectorAll('.ghost-doctor-ep').length;
var ghostDoctordramaImage = document.getElementById('ghost-doctor-drama-img');

document.getElementById('ghost-doctor-drama-title').innerHTML = ghostDoctor;
ghostDoctordramaDetail.innerHTML = "Cha Young Min is a genius doctor, with excelling skills at surgery, but he is arrogant and selfish. One day, he gets involved in an unexpected case, and due to this, his spirit possesses another doctor's body, namely Seong Tak. These two doctors are complete opposites, with opposite personalities and medical abilities.<br>\
While Young Min is arrogant and cold-blooded, who only cares about his career, and doesn't care about any of his patient's personal stories, Seong Tak is the luckiest and richest resident doctor whose grandfather is the founder of Myung-shin hospital and mother is the chairman of the hospital. Never wanting to be a good doctor, he becomes processed by the two ghost doctors with completely different backgrounds.<br><br>\
Director: Boo Seong Cheol [부성철]<br>\
Original Network: tvN;<br>\
Country: Korean<br>\
Status: Completed<br>\
Genres: Drama; Fantasy; Medical; Supernatural;<br>\
Airs: 2022"
+ "<br>" + "Episodes: " + ghostDoctorepisodes ;
ghostDoctordramaImage.setAttribute("src", "https://imagecdn.me/cover/the-ghost-doctor.png");
if(ghostDoctorelements < 16){
document.getElementById('ghost-doctor-output').innerHTML = ghostDoctorelements + " Episodes | Ongoing";
}if(ghostDoctorelements == 16){
document.getElementById('ghost-doctor-output').innerHTML = ghostDoctorelements + " Episodes | Completed";
}
if(ghostDoctorelements == 1){
document.getElementById('ghost-doctor-output').innerHTML = ghostDoctorelements + " Episode | Ongoing";
}