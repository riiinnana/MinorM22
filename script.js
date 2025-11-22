
const halls = [
    { name: "Moonlight Hall", size: "80 м²", img: "https://partner.musbooking.com/files/res/3ade05cb-a0ce-4a15-837d-8291c2ee21fe.jpg" },
    { name: "SkyMove Hall", size: "120 м²", img: "https://avatars.mds.yandex.net/get-altay/5484072/2a0000017d71cdb0b82bcb444c16c53cd523/L_height" },
    { name: "AirFlow Hall", size: "60 м²", img: "https://www.dh74.ru/media/upload/attachment/source/zal1pds2.jpg" },
    { name: "Studio 45", size: "45 м²", img: "https://partner.musbooking.com/files/res/0022012d-7331-437e-ad45-75be8ff0d556.jpg?width=804&height=532" },
    { name: "UrbanMotion", size: "150 м²", img: "https://avatars.mds.yandex.net/get-altay/14105192/2a000001927c9fe5c0566077114a070d0c03/L_height" },
    { name: "Rhythm Box Hall", size: "70 м²", img: "https://findsport.ru/userfiles/images/620x365/1688380275_4ad54909708736fd99b535ab1ccc3089.jpg" }
];


function renderHalls() {
    const container = document.getElementById("hall-list");
    if (!container) return;

    halls.forEach(hall => {
        const card = `
        <div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="hall-card">
                <img src="${hall.img}" class="img-fluid rounded mb-2">
                <h5>${hall.name}</h5>
                <p>Площадь: ${hall.size}</p>
                <a href="#book" class="btn w-100">Забронировать</a>
            </div>
        </div>`;
        container.innerHTML += card;
    });
}

renderHalls();