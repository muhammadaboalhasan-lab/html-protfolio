const phoneProducts = [
  { id: 1, Name: "Axiom X1", Description: "Entry-level phone with HD screen.", Price: 120, imageLink: "https://example.com/img/phone_1.jpg" },
  { id: 2, Name: "Axiom X2", Description: "Improved camera and larger battery.", Price: 150, imageLink: "https://example.com/img/phone_2.jpg" },
  { id: 3, Name: "Axiom X3", Description: "Budget phone with dual camera.", Price: 170, imageLink: "https://example.com/img/phone_3.jpg" },
  { id: 4, Name: "Axiom Pro 1", Description: "Fast chipset and smooth performance.", Price: 210, imageLink: "https://example.com/img/phone_4.jpg" },
  { id: 5, Name: "Axiom Pro 2", Description: "Full HD display and fast charging.", Price: 230, imageLink: "https://example.com/img/phone_5.jpg" },
  { id: 6, Name: "Axiom Pro 3", Description: "Enhanced photography and speed.", Price: 260, imageLink: "https://example.com/img/phone_6.jpg" },
  { id: 7, Name: "Nexus Lite 5", Description: "Compact phone with good battery.", Price: 140, imageLink: "https://example.com/img/phone_7.jpg" },
  { id: 8, Name: "Nexus Lite 6", Description: "Sharper screen and dual SIM.", Price: 165, imageLink: "https://example.com/img/phone_8.jpg" },
  { id: 9, Name: "Nexus Lite 7", Description: "Better GPU and night mode.", Price: 185, imageLink: "https://example.com/img/phone_9.jpg" },
  { id: 10, Name: "Nexus Core 1", Description: "Power-efficient processor.", Price: 220, imageLink: "https://example.com/img/phone_10.jpg" },
  { id: 11, Name: "Nexus Core 2", Description: "Improved gaming performance.", Price: 250, imageLink: "https://example.com/img/phone_11.jpg" },
  { id: 12, Name: "Nexus Core 3", Description: "Flagship camera and AMOLED.", Price: 300, imageLink: "https://example.com/img/phone_12.jpg" },
  { id: 13, Name: "Volt Mini 1", Description: "Small phone with sharp screen.", Price: 110, imageLink: "https://example.com/img/phone_13.jpg" },
  { id: 14, Name: "Volt Mini 2", Description: "Fast charging supported.", Price: 130, imageLink: "https://example.com/img/phone_14.jpg" },
  { id: 15, Name: "Volt Mini 3", Description: "Dual camera upgrade.", Price: 160, imageLink: "https://example.com/img/phone_15.jpg" },
  { id: 16, Name: "Volt Max 1", Description: "Long battery life and fast CPU.", Price: 200, imageLink: "https://example.com/img/phone_16.jpg" },
  { id: 17, Name: "Volt Max 2", Description: "High-speed performance.", Price: 230, imageLink: "https://example.com/img/phone_17.jpg" },
  { id: 18, Name: "Volt Max 3", Description: "AMOLED display and stereo sound.", Price: 280, imageLink: "https://example.com/img/phone_18.jpg" },
  { id: 19, Name: "Spectra S1", Description: "Slim design and HD display.", Price: 150, imageLink: "https://example.com/img/phone_19.jpg" },
  { id: 20, Name: "Spectra S2", Description: "Better performance and camera.", Price: 180, imageLink: "https://example.com/img/phone_20.jpg" },
  { id: 21, Name: "Spectra S3", Description: "Enhanced sound and battery.", Price: 210, imageLink: "https://example.com/img/phone_21.jpg" },
  { id: 22, Name: "Spectra Pro 1", Description: "High refresh rate display.", Price: 260, imageLink: "https://example.com/img/phone_22.jpg" },
  { id: 23, Name: "Spectra Pro 2", Description: "Advanced camera stabilization.", Price: 290, imageLink: "https://example.com/img/phone_23.jpg" },
  { id: 24, Name: "Spectra Pro 3", Description: "Flagship-grade chipset.", Price: 340, imageLink: "https://example.com/img/phone_24.jpg" },
  { id: 25, Name: "Titan Z1", Description: "Tough body and HD+ display.", Price: 170, imageLink: "https://example.com/img/phone_25.jpg" },
  { id: 26, Name: "Titan Z2", Description: "Better durability and speed.", Price: 200, imageLink: "https://example.com/img/phone_26.jpg" },
  { id: 27, Name: "Titan Z3", Description: "Water-resistant design.", Price: 230, imageLink: "https://example.com/img/phone_27.jpg" },
  { id: 28, Name: "Titan Ultra 1", Description: "Gaming focused performance.", Price: 310, imageLink: "https://example.com/img/phone_28.jpg" },
  { id: 29, Name: "Titan Ultra 2", Description: "Liquid cooling system.", Price: 350, imageLink: "https://example.com/img/phone_29.jpg" },
  { id: 30, Name: "Titan Ultra 3", Description: "Ultra-smooth 144Hz display.", Price: 390, imageLink: "https://example.com/img/phone_30.jpg" },
  { id: 31, Name: "Nova A1", Description: "Lightweight and fast UI.", Price: 130, imageLink: "https://example.com/img/phone_31.jpg" },
  { id: 32, Name: "Nova A2", Description: "Improved camera setup.", Price: 160, imageLink: "https://example.com/img/phone_32.jpg" },
  { id: 33, Name: "Nova A3", Description: "Better performance and display.", Price: 180, imageLink: "https://example.com/img/phone_33.jpg" },
  { id: 34, Name: "Nova Prime 1", Description: "AMOLED and fast charge.", Price: 240, imageLink: "https://example.com/img/phone_34.jpg" },
  { id: 35, Name: "Nova Prime 2", Description: "Pro camera features.", Price: 280, imageLink: "https://example.com/img/phone_35.jpg" },
  { id: 36, Name: "Nova Prime 3", Description: "Long-lasting battery.", Price: 320, imageLink: "https://example.com/img/phone_36.jpg" },
  { id: 37, Name: "Zenon Z1", Description: "Affordable and versatile.", Price: 120, imageLink: "https://example.com/img/phone_37.jpg" },
  { id: 38, Name: "Zenon Z2", Description: "Better display and speakers.", Price: 150, imageLink: "https://example.com/img/phone_38.jpg" },
  { id: 39, Name: "Zenon Z3", Description: "Night mode and fast CPU.", Price: 190, imageLink: "https://example.com/img/phone_39.jpg" },
  { id: 40, Name: "Zenon Pro 1", Description: "High-quality AMOLED screen.", Price: 260, imageLink: "https://example.com/img/phone_40.jpg" },
  { id: 41, Name: "Zenon Pro 2", Description: "Excellent camera quality.", Price: 310, imageLink: "https://example.com/img/phone_41.jpg" },
  { id: 42, Name: "Zenon Pro 3", Description: "Top-tier performance.", Price: 360, imageLink: "https://example.com/img/phone_42.jpg" },
  { id: 43, Name: "Omega Lite 1", Description: "Simple and reliable.", Price: 100, imageLink: "https://example.com/img/phone_43.jpg" },
  { id: 44, Name: "Omega Lite 2", Description: "Better build and camera.", Price: 130, imageLink: "https://example.com/img/phone_44.jpg" },
  { id: 45, Name: "Omega Lite 3", Description: "Improved speed.", Price: 160, imageLink: "https://example.com/img/phone_45.jpg" },
  { id: 46, Name: "Omega Max 1", Description: "Large battery and great display.", Price: 210, imageLink: "https://example.com/img/phone_46.jpg" },
  { id: 47, Name: "Omega Max 2", Description: "Better gaming performance.", Price: 250, imageLink: "https://example.com/img/phone_47.jpg" },
  { id: 48, Name: "Omega Max 3", Description: "High-end camera system.", Price: 300, imageLink: "https://example.com/img/phone_48.jpg" },
  { id: 49, Name: "Pulse P1", Description: "Bright display and dual SIM.", Price: 140, imageLink: "https://example.com/img/phone_49.jpg" },
  { id: 50, Name: "Pulse P2", Description: "Better battery and CPU.", Price: 170, imageLink: "https://example.com/img/phone_50.jpg" },
  { id: 51, Name: "Pulse P3", Description: "Upgraded camera with AI features.", Price: 200, imageLink: "https://example.com/img/phone_51.jpg" },
  { id: 52, Name: "Pulse Max 1", Description: "Large display and stereo speakers.", Price: 230, imageLink: "https://example.com/img/phone_52.jpg" },
  { id: 53, Name: "Pulse Max 2", Description: "Fast charging and AMOLED screen.", Price: 260, imageLink: "https://example.com/img/phone_53.jpg" },
  { id: 54, Name: "Pulse Max 3", Description: "Improved chipset for gaming.", Price: 300, imageLink: "https://example.com/img/phone_54.jpg" },
  { id: 55, Name: "Storm S1", Description: "Compact and fast budget phone.", Price: 130, imageLink: "https://example.com/img/phone_55.jpg" },
  { id: 56, Name: "Storm S2", Description: "Upgraded display and processor.", Price: 160, imageLink: "https://example.com/img/phone_56.jpg" },
  { id: 57, Name: "Storm S3", Description: "AI camera system.", Price: 190, imageLink: "https://example.com/img/phone_57.jpg" },
  { id: 58, Name: "Storm Pro 1", Description: "High-performance chipset.", Price: 240, imageLink: "https://example.com/img/phone_58.jpg" },
  { id: 59, Name: "Storm Pro 2", Description: "Fast gaming and sharp display.", Price: 280, imageLink: "https://example.com/img/phone_59.jpg" },
  { id: 60, Name: "Storm Pro 3", Description: "Pro-level photography.", Price: 330, imageLink: "https://example.com/img/phone_60.jpg" },
  { id: 61, Name: "Crystal C1", Description: "Elegant design with HD screen.", Price: 140, imageLink: "https://example.com/img/phone_61.jpg" },
  { id: 62, Name: "Crystal C2", Description: "Better storage and camera.", Price: 170, imageLink: "https://example.com/img/phone_62.jpg" },
  { id: 63, Name: "Crystal C3", Description: "Fast performance and clear display.", Price: 200, imageLink: "https://example.com/img/phone_63.jpg" },
  { id: 64, Name: "Crystal Max 1", Description: "AMOLED and long battery life.", Price: 260, imageLink: "https://example.com/img/phone_64.jpg" },
  { id: 65, Name: "Crystal Max 2", Description: "Pro camera + fast charging.", Price: 300, imageLink: "https://example.com/img/phone_65.jpg" },
  { id: 66, Name: "Crystal Max 3", Description: "Flagship performance level.", Price: 340, imageLink: "https://example.com/img/phone_66.jpg" },
  { id: 67, Name: "Blaze B1", Description: "Affordable and smooth UI.", Price: 110, imageLink: "https://example.com/img/phone_67.jpg" },
  { id: 68, Name: "Blaze B2", Description: "Better display and battery.", Price: 140, imageLink: "https://example.com/img/phone_68.jpg" },
  { id: 69, Name: "Blaze B3", Description: "Enhanced camera performance.", Price: 170, imageLink: "https://example.com/img/phone_69.jpg" },
  { id: 70, Name: "Blaze Pro 1", Description: "High-res AMOLED display.", Price: 240, imageLink: "https://example.com/img/phone_70.jpg" },
  { id: 71, Name: "Blaze Pro 2", Description: "High-speed gaming chip.", Price: 290, imageLink: "https://example.com/img/phone_71.jpg" },
  { id: 72, Name: "Blaze Pro 3", Description: "Professional-grade cameras.", Price: 330, imageLink: "https://example.com/img/phone_72.jpg" },
  { id: 73, Name: "Photon P1", Description: "Compact and lightweight.", Price: 100, imageLink: "https://example.com/img/phone_73.jpg" },
  { id: 74, Name: "Photon P2", Description: "Improved battery life.", Price: 130, imageLink: "https://example.com/img/phone_74.jpg" },
  { id: 75, Name: "Photon P3", Description: "Dual camera and fast UI.", Price: 160, imageLink: "https://example.com/img/phone_75.jpg" },
  { id: 76, Name: "Photon Max 1", Description: "Large display and strong CPU.", Price: 230, imageLink: "https://example.com/img/phone_76.jpg" },
  { id: 77, Name: "Photon Max 2", Description: "5G support and AMOLED screen.", Price: 270, imageLink: "https://example.com/img/phone_77.jpg" },
  { id: 78, Name: "Photon Max 3", Description: "High-performance gaming chip.", Price: 310, imageLink: "https://example.com/img/phone_78.jpg" },
  { id: 79, Name: "Aero A1", Description: "Entry-level with strong battery.", Price: 120, imageLink: "https://example.com/img/phone_79.jpg" },
  { id: 80, Name: "Aero A2", Description: "Sharper display and camera.", Price: 150, imageLink: "https://example.com/img/phone_80.jpg" },
  { id: 81, Name: "Aero A3", Description: "Smooth UI and good performance.", Price: 180, imageLink: "https://example.com/img/phone_81.jpg" },
  { id: 82, Name: "Aero Max 1", Description: "Fast chip and great camera.", Price: 240, imageLink: "https://example.com/img/phone_82.jpg" },
  { id: 83, Name: "Aero Max 2", Description: "Flagship-level display.", Price: 280, imageLink: "https://example.com/img/phone_83.jpg" },
  { id: 84, Name: "Aero Max 3", Description: "Top specs for gamers.", Price: 330, imageLink: "https://example.com/img/phone_84.jpg" },
  { id: 85, Name: "Quantum Q1", Description: "Affordable smartphone with HD.", Price: 110, imageLink: "https://example.com/img/phone_85.jpg" },
  { id: 86, Name: "Quantum Q2", Description: "Better chip and battery.", Price: 140, imageLink: "https://example.com/img/phone_86.jpg" },
  { id: 87, Name: "Quantum Q3", Description: "Smooth UI + dual camera.", Price: 170, imageLink: "https://example.com/img/phone_87.jpg" },
  { id: 88, Name: "Quantum Pro 1", Description: "High-refresh display.", Price: 240, imageLink: "https://example.com/img/phone_88.jpg" },
  { id: 89, Name: "Quantum Pro 2", Description: "Powerful chip + fast charge.", Price: 280, imageLink: "https://example.com/img/phone_89.jpg" },
  { id: 90, Name: "Quantum Pro 3", Description: "Premium design + flagship power.", Price: 320, imageLink: "https://example.com/img/phone_90.jpg" },
  { id: 91, Name: "Skyline S1", Description: "Slim design and HD+", Price: 140, imageLink: "https://example.com/img/phone_91.jpg" },
  { id: 92, Name: "Skyline S2", Description: "Better cameras and speed.", Price: 170, imageLink: "https://example.com/img/phone_92.jpg" },
  { id: 93, Name: "Skyline S3", Description: "Improved graphics and CPU.", Price: 200, imageLink: "https://example.com/img/phone_93.jpg" },
  { id: 94, Name: "Skyline Pro 1", Description: "AMOLED and stereo audio.", Price: 260, imageLink: "https://example.com/img/phone_94.jpg" },
  { id: 95, Name: "Skyline Pro 2", Description: "Strong performance for gaming.", Price: 300, imageLink: "https://example.com/img/phone_95.jpg" },
  { id: 96, Name: "Skyline Pro 3", Description: "Top-tier camera system.", Price: 340, imageLink: "https://example.com/img/phone_96.jpg" },
  { id: 97, Name: "Vega V1", Description: "Thin body and HD screen.", Price: 130, imageLink: "https://example.com/img/phone_97.jpg" },
  { id: 98, Name: "Vega V2", Description: "Better camera and battery.", Price: 160, imageLink: "https://example.com/img/phone_98.jpg" },
  { id: 99, Name: "Vega V3", Description: "Smoother UI and performance.", Price: 190, imageLink: "https://example.com/img/phone_99.jpg" },
  { id: 100, Name: "Vega Pro 1", Description: "Premium AMOLED and strong CPU.", Price: 260, imageLink: "https://example.com/img/phone_100.jpg" }
];




function PrintOnlyOneProduct(product)
{
        let productsContainer = document.getElementById("products-container");
        let mainDivElement = document.createElement("div");
        let imageDivElement = document.createElement("div");
        let nameDivElement = document.createElement("div");
        let descriptionDivElement = document.createElement("div");
        let priceDivElement = document.createElement("div");

        let imageElement = document.createElement("img");
        let headingElement = document.createElement("h3");
        let paragraphElement = document.createElement("p");
        let spanElement = document.createElement("span");

        mainDivElement.setAttribute('class',        'Main-Div-Element');
        imageDivElement.setAttribute('class',       'image-Div-Element');
        nameDivElement.setAttribute('class',        'name-Div-Element');
        descriptionDivElement.setAttribute('class', 'description-Div-Element');
        priceDivElement.setAttribute('class',       'price-Div-Element');
    
    
        imageElement.src = product.imageLink;
        headingElement.textContent = product.Name;
        paragraphElement.textContent = product.Description;
        spanElement.textContent = product.Price + "$";

        imageDivElement.appendChild(imageElement);
        nameDivElement.appendChild(headingElement);
        descriptionDivElement.appendChild(paragraphElement);
        priceDivElement.appendChild(spanElement);

        mainDivElement.appendChild(imageDivElement);
        mainDivElement.appendChild(nameDivElement);
        mainDivElement.appendChild(descriptionDivElement);
        mainDivElement.appendChild(priceDivElement);

        //document.body.appendChild(mainDivElement);
        productsContainer.appendChild(mainDivElement);
}

function PrintProducts(products)
{
    
    products.forEach(product => {


        let productsContainer = document.getElementById("products-container");
        let mainDivElement = document.createElement("div");
        let imageDivElement = document.createElement("div");
        let nameDivElement = document.createElement("div");
        let descriptionDivElement = document.createElement("div");
        let priceDivElement = document.createElement("div");

        let imageElement = document.createElement("img");
        let headingElement = document.createElement("h3");
        let paragraphElement = document.createElement("p");
        let spanElement = document.createElement("span");

        mainDivElement.setAttribute('class',        'Main-Div-Element');
        imageDivElement.setAttribute('class',       'image-Div-Element');
        nameDivElement.setAttribute('class',        'name-Div-Element');
        descriptionDivElement.setAttribute('class', 'description-Div-Element');
        priceDivElement.setAttribute('class',       'price-Div-Element');
    
    
        imageElement.src = product.imageLink;
        headingElement.textContent = product.Name;
        paragraphElement.textContent = product.Description;
        spanElement.textContent = product.Price + "$";

        imageDivElement.appendChild(imageElement);
        nameDivElement.appendChild(headingElement);
        descriptionDivElement.appendChild(paragraphElement);
        priceDivElement.appendChild(spanElement);

        mainDivElement.appendChild(imageDivElement);
        mainDivElement.appendChild(nameDivElement);
        mainDivElement.appendChild(descriptionDivElement);
        mainDivElement.appendChild(priceDivElement);

        //document.body.appendChild(mainDivElement);
        productsContainer.appendChild(mainDivElement);

    });


}

PrintProducts(phoneProducts);


let searchingText = document.getElementById("searching-input");

searchingText.addEventListener('input', () =>
{
    let value = searchingText.value;

    let productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    if(value > 0)
    {

        phoneProducts.forEach((product, index) =>
        {
            if(product.Price >= Number(value))
            {
                PrintOnlyOneProduct(product);
            }
        })

        if(document.getElementsByClassName("Main-Div-Element").length == 0)
        {
            PrintOnlyOneProduct({id : -1, Name: "NotFound", Description: "There's no product with this price or above it", Price : 0, imageLink: "https://example.com/img/phone_23.jpg"});
        }
    }
    else
    {
        PrintProducts(phoneProducts);
    }

});