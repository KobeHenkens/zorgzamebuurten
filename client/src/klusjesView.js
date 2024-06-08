export const createKlusjesCard = function(klusjes, container) {
    const li = document.createElement("li");
  
    const klusjesCard = document.createElement("div");
    klusjesCard.classList.add("klusjesCard");
  
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
  
    const userImage = document.createElement("div");
    userImage.classList.add("user-image");
  
    const img = document.createElement("img");
    img.src = "../images/profiellogo.webp";
    img.alt = "Gebruikers profiel foto";
    userImage.appendChild(img);
  
    const userNameTime = document.createElement("div");
  
    const userName = document.createElement("h3");
    userName.classList.add("user-name");
    userName.textContent = klusjes.userName;
  
    const userTime = document.createElement("p");
    userTime.classList.add("user-time");
    userTime.textContent = klusjes.userTime;
  
    userNameTime.appendChild(userName);
    userNameTime.appendChild(userTime);
  
    userInfo.appendChild(userImage);
    userInfo.appendChild(userNameTime);
  
    const info = document.createElement("div");
    info.classList.add("info");
  
    const taak = document.createElement("h3");
    taak.classList.add("taak");
    taak.textContent = klusjes.taak;
  
    const locatie = document.createElement("p");
    locatie.classList.add("locatie");
    locatie.textContent = klusjes.locatie;
  
    info.appendChild(taak);
    info.appendChild(locatie);
  
    klusjesCard.appendChild(userInfo);
    klusjesCard.appendChild(info);
  
    li.appendChild(klusjesCard);
  
    container.appendChild(li);
  }
  