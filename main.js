var mymap = L.map('mapid').setView([21.037853, 105.821825], 16);


//Layers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmd1eWVuMTkxNTE5OTgiLCJhIjoiY2tyeW96cWFmMGtzbzJwbzkxaDViemJzZiJ9.up7cDlf5Y5NVMSQMb7w1Tw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
});
//streets.addTo(mymap);

var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
});
watercolor.addTo(mymap);


var iconBe = L.icon({
    iconUrl: "img/be.png",
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    popupAnchor: [0, -20],
});

var iconBeo = L.icon({
    iconUrl: "img/beo.png",
    iconSize: [80, 80],
    iconAnchor: [40, 40],
    popupAnchor: [0, -20],
});

var iconFood = L.Icon.extend({
    options: {
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
    }
});

var iconPho = new iconFood({ iconUrl: "img/pho.png" }),
    iconBun = new iconFood({ iconUrl: "img/bun.png" }),
    iconBanhGato = new iconFood({ iconUrl: "img/banhGato.png" }),
    iconBanhMi = new iconFood({ iconUrl: "img/banhMi.png" }),
    iconCafe = new iconFood({ iconUrl: "img/cafe.png" }),
    iconCafeMeo = new iconFood({ iconUrl: "img/cafeMeo.png" }),
    iconCuon = new iconFood({ iconUrl: "img/cuon.png" }),
    iconHotdog = new iconFood({ iconUrl: "img/hotdog.png" }),
    iconKem = new iconFood({ iconUrl: "img/kem.png" }),
    iconNemChua = new iconFood({ iconUrl: "img/nemChua.png" }),
    iconNgocThach = new iconFood({ iconUrl: "img/ngocThach.png" }),
    iconNuong = new iconFood({ iconUrl: "img/nuong.png" }),
    iconOc = new iconFood({ iconUrl: "img/oc.png" }),
    iconPizza = new iconFood({ iconUrl: "img/pizza.png" }),
    iconSpaghetti = new iconFood({ iconUrl: "img/spaghetti.png" }),
    iconTaco = new iconFood({ iconUrl: "img/taco.png" }),
    iconTrung = new iconFood({ iconUrl: "img/trung.png" });
iconBongNgo = new iconFood({ iconUrl: "img/bongNgo.png" });
iconBanhTrang = new iconFood({ iconUrl: "img/banhTrang.png" });
iconSuaChua = new iconFood({ iconUrl: "img/yogurt.png" });
iconChao = new iconFood({ iconUrl: "img/chao.png" });
iconNemNuong = new iconFood({ iconUrl: "img/nemNuong.png" });
iconRamen = new iconFood({ iconUrl: "img/ramen.png" });

var markerBe = L.marker([21.037853, 105.821825], { icon: iconBe }).addTo(mymap);
markerBe.bindPopup("<p>Mình là em bé Vịt iu nhứt. Hôm nay mình ăn gì đây nhờ</p>");

var markerBeo = L.marker([21.043056, 105.784553], { icon: iconBeo }).addTo(mymap);
markerBeo.bindPopup("<p>Em bé có muốn thêm thật là nhìu địa chỉ cùng anh không</p>");

var markerPho = L.marker([21.002941, 105.835982], { icon: iconPho }).addTo(mymap);
markerPho.bindPopup("<h2>Pho Male</h2>");
var markerPho = L.marker([21.043311, 105.791565], { icon: iconPho }).addTo(mymap);
markerPho.bindPopup("<h2>Pho Nghia Tan</h2>");

var markerBun = L.marker([21.043881, 105.794011], { icon: iconBun }).addTo(mymap);
markerBun.bindPopup("<h2>Bun Tofu</h2>");
var markerBun = L.marker([21.037719, 105.785106], { icon: iconBun }).addTo(mymap);
markerBun.bindPopup("<h2>Bun Tofu</h2>");

var markerBanhGato = L.marker([21.041563, 105.787353], { icon: iconBanhGato }).addTo(mymap);
markerBanhGato.bindPopup("<h2>Cake Em Be");

var markerBanhMi = L.marker([21.041022, 105.783212], { icon: iconBanhMi }).addTo(mymap);
markerBanhMi.bindPopup("<h2>Lang Son Bread</h2>");
var markerBanhMi = L.marker([21.035361, 105.7834], { icon: iconBanhMi }).addTo(mymap);
markerBanhMi.bindPopup("<h2>Bo Kho Bread</h2>");

var markerCafe = L.marker([21.04312, 105.823992], { icon: iconCafe }).addTo(mymap);
markerCafe.bindPopup("<h2>Our Cafe</h2>");
var markerCafe = L.marker([21.028802, 105.848449], { icon: iconCafe }).addTo(mymap);
markerCafe.bindPopup("<h2>Church Cafe</h2>");

var markerCafeMeo = L.marker([21.030082, 105.823252], { icon: iconCafeMeo }).addTo(mymap);
markerCafeMeo.bindPopup("<h2>Cats Cafe</h2>");
var markerCafeMeo = L.marker([20.995095, 105.868555], { icon: iconCafeMeo }).addTo(mymap);
markerCafeMeo.bindPopup("<h2>Highland Cafe</h2>");
var markerCafeMeo = L.marker([21.016714, 105.783754], { icon: iconCafeMeo }).addTo(mymap);
markerCafeMeo.bindPopup("<h2>Starbuck Cafe</h2>");

var markerCuon = L.marker([21.041447, 105.792149], { icon: iconCuon }).addTo(mymap);
markerCuon.bindPopup("<h2>Sushi Rolls</h2>");
var markerCuon = L.marker([21.036137, 105.782397], { icon: iconCuon }).addTo(mymap);
markerCuon.bindPopup("<h2>Sushi Iph</h2>");

var markerHotdog = L.marker([21.038584, 105.78568], { icon: iconHotdog }).addTo(mymap);
markerHotdog.bindPopup("<h2>Youone Hotdog</h2>");
var markerHotdog = L.marker([21.019247, 105.828869], { icon: iconHotdog }).addTo(mymap);
markerHotdog.bindPopup("<h2>Youone Hotdog</h2>");

var markerKem = L.marker([21.077923, 105.817748], { icon: iconKem }).addTo(mymap);
markerKem.bindPopup("<h2>Homemade Icecream</h2>");
var markerKem = L.marker([21.041784, 105.79143], { icon: iconKem }).addTo(mymap);
markerKem.bindPopup("<h2>Coconut Icecream</h2>");
var markerKem = L.marker([21.025331, 105.854141], { icon: iconKem }).addTo(mymap);
markerKem.bindPopup("<h2>Trang Tien Icecream</h2>");

var markerNemChua = L.marker([21.040083, 105.828016], { icon: iconNemChua }).addTo(mymap);
markerNemChua.bindPopup("<h2>Nem chua Thuy Khue</h2>");

var markerNgocThach = L.marker([21.034527, 105.783658], { icon: iconNgocThach }).addTo(mymap);
markerNgocThach.bindPopup("<h2>Ngoc Thach Quan</h2>");
var markerNgocThach = L.marker([21.004042, 105.83544], { icon: iconNgocThach }).addTo(mymap);
markerNgocThach.bindPopup("<h2>Ngoc Thach Quan</h2>");
var markerNgocThach = L.marker([21.000512, 105.848304], { icon: iconNgocThach }).addTo(mymap);
markerNgocThach.bindPopup("<h2>Ngoc Thach Quan</h2>");

var markerNuong = L.marker([20.994145, 105.849237], { icon: iconNuong }).addTo(mymap);
markerNuong.bindPopup("<h2>Grill Nha Mam</h2>");
var markerNuong = L.marker([21.038264, 105.847371], { icon: iconNuong }).addTo(mymap);
markerNuong.bindPopup("<h2>Nam Stir-fried</h2>");

var markerOc = L.marker([21.043611, 105.793721], { icon: iconOc }).addTo(mymap);
markerOc.bindPopup("<h2>Snails Nghia Tan</h2>");

var markerPizza = L.marker([21.024914, 105.854339], { icon: iconPizza }).addTo(mymap);
markerPizza.bindPopup("<h2>Pizza 4P's</h2>");

var markerSpaghetti = L.marker([21.015634, 105.855197], { icon: iconSpaghetti }).addTo(mymap);
markerSpaghetti.bindPopup("<h2>Spaghetti Box</h2>");
var markerSpaghetti = L.marker([21.02892, 105.823413], { icon: iconSpaghetti }).addTo(mymap);
markerSpaghetti.bindPopup("<h2>Spaghetti Box</h2>");

var markerTaco = L.marker([21.072846, 105.814605], { icon: iconTaco }).addTo(mymap);
markerTaco.bindPopup("<h2>M' Taco</h2>");

var markerTrung = L.marker([21.00542, 105.846368], { icon: iconTrung }).addTo(mymap);
markerTrung.bindPopup("<h2>Baked eggs BK</h2>");

var markerBongNgo = L.marker([21.035711, 105.782467], { icon: iconBongNgo }).addTo(mymap);
markerBongNgo.bindPopup("<h2>Popcorn 70k</h2>");

var markerBanhTrang = L.marker([21.041529, 105.788137], { icon: iconBanhTrang }).addTo(mymap);
markerBanhTrang.bindPopup("<h2>Pork Roll</h2>");

var markerSuaChua = L.marker([21.003583, 105.850257], { icon: iconSuaChua }).addTo(mymap);
markerSuaChua.bindPopup("<h2>Fruity Yogurt</h2>");

var markerChao = L.marker([21.003548, 105.847628], { icon: iconChao }).addTo(mymap);
markerChao.bindPopup("<h2>Chao BK</h2>");

var markerNemNuong = L.marker([21.038575, 105.785154], { icon: iconNemNuong }).addTo(mymap);
markerNemNuong.bindPopup("<h2>Nha Trang Rolls</h2>");

var markerRamen = L.marker([21.029683, 105.819658], { icon: iconRamen }).addTo(mymap);
markerRamen.bindPopup("<h2>Ramen2go</h2>");

/*function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);*/
