import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
const vehicles = [
  {
    category: "Cars",
    types: [
      { name: "Sports Car", description: "A sports car is a type of automobile designed primarily for performance driving, characterized by its high speed, agility, and sleek aesthetics. Sports cars typically feature powerful engines, advanced suspension systems, and lightweight construction to maximize acceleration, handling, and braking capabilities. They are often built with a low center of gravity to enhance stability and cornering performance.", image: "https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg" },
      { name: "SUV", description: "An SUV (Sport Utility Vehicle) is a versatile and spacious type of automobile designed to combine the capabilities of off-road vehicles with the comfort and convenience of passenger cars. SUVs are known for their high ground clearance, robust build, and ample interior space, making them suitable for a wide range of activities, from daily commuting to outdoor adventures.", image: "https://www.usnews.com/cmsmedia/98/f5/a877088e411ea7c093f1d2622cdb/2023-honda-cr-v-hybrid-1.jpg" },
      { name: "Hyper", description: "A hypercar is a high-performance automobile that represents the pinnacle of automotive engineering, design, and technology. These vehicles are distinguished by their extraordinary speed, advanced materials, cutting-edge technology, and limited production numbers. Hypercars are often considered the ultimate expression of automotive performance and luxury.", image: "https://www.slashgear.com/img/gallery/10-best-hypercars-of-all-time/l-intro-1670272058.jpg" },
      { name: "Convertible", description: "A convertible car is a type of automobile designed to offer an open-air driving experience, characterized by a retractable roof that can be lowered or raised as desired. Convertibles combine the thrill of open-top driving with the style and performance of traditional cars, making them a popular choice for those who enjoy a dynamic and versatile driving experience.", image: "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220930141553/Porsche-718-1-1160x653.jpg" },
      { name: "Coupe", description: "A coupe car is a stylish and performance-oriented vehicle characterized by its sleek, sporty design and typically two-door body style. Coupes prioritize aesthetics and driving experience, often appealing to those who value both form and function in their automobiles.", image: "https://hips.hearstapps.com/hmg-prod/images/2924-1563302246.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*" },
      { name: "Sedan", description: "A sedan car is a versatile type of automobile designed to accommodate both families and individual drivers with a focus on comfort, convenience, and efficient performance. Sedans are characterized by their four-door configuration, spacious interiors, and balanced design.", image: "https://hips.hearstapps.com/hmg-prod/images/2018-infiniti-q50-108-1563825419.jpg?resize=980:*"},
    ]
  },
  {
    category: "Motorbikes",
    types: [
      { name: "Sport Bike", description:"A sports motorbike, also known as a sportbike or supersport, is a type of motorcycle designed for high-speed performance, agility, and precision handling. These bikes are built to deliver an exhilarating riding experience, often featuring cutting-edge technology, lightweight construction, and aerodynamic designs.", image: "https://i.ebayimg.com/images/g/lqAAAOSw9M9iWCEi/s-l1200.webp" },
      { name: "Dual-Sport", description: "A dual-sports motorbike, also known as a dual-purpose or adventure bike, is a versatile type of motorcycle designed for both on-road and off-road riding. These bikes combine the features of street-legal motorcycles with the capabilities of off-road bikes, making them ideal for riders who want the flexibility to tackle various terrains.", image: "https://www.revzilla.com/blog_content_image/image/24615/141106_8846-RD-3.jpg" },
      { name: "Cruiser", description: "A cruiser motorbike is a type of motorcycle designed for relaxed, comfortable riding, typically characterized by its low seat height, extended riding position, and classic styling. Cruisers are known for their ease of handling and distinctive appearance, making them a popular choice for long-distance rides and everyday commuting.", image: "https://s1.cdn.autoevolution.com/images/news/15-best-cruiser-bikes-219376-7.jpeg" },
      { name: "Touring", description: "A touring motorbike, also known as a tourer, is a type of motorcycle designed specifically for long-distance travel and comfort. These bikes are built to provide a smooth, enjoyable riding experience over extended periods, with features that enhance comfort, convenience, and storage capacity.", image: "https://powersports.honda.com/-/media/products/segment/motorcycle/touring/category-mp/hero/desktop/2024/touring-segment-hero-desktop-01-2400x1350.jpg" },
      { name: "Standard", description: "A standard motorbike, also known as a naked bike or roadster, is a versatile and straightforward type of motorcycle designed for a wide range of riding conditions. These bikes are characterized by their upright riding position, minimalistic design, and balanced performance, making them suitable for both beginners and experienced riders.", image: "https://go.rumbleon.com/hubfs/120220-2021_ducati_monster_plus_ambience_4__uc214574_high.jpg" },
      { name: "Scooter", description: "A scooter motorbike, commonly referred to simply as a scooter, is a small, lightweight motorcycle designed for easy maneuverability, convenience, and practicality, particularly in urban environments. Scooters are known for their step-through frame, automatic transmission, and user-friendly nature, making them an ideal choice for commuting and short-distance travel.", image: "https://assets.newatlas.com/dims4/default/ab64f8b/2147483647/strip/true/crop/1124x749+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F23%2F67%2F05bb0fde41b784a7664523d8ea1a%2F062a1836-1024x819.png" },
      
    ]
  },
  {
    category: "Planes",
    types: [
      { name: "Private Jet", description: "A private jet plane is a luxurious and high-performance aircraft designed for exclusive and personalized air travel. These jets offer a combination of speed, comfort, privacy, and convenience, making them a preferred choice for business executives, high-net-worth individuals, and anyone seeking a premium travel experience.", image: "https://images.aircharterservice.com/content/banner-how-much-does-it-cost-to-charter-a-private-jet.jpg" },
      { name: "Commercial Jet", description: "A commercial jet plane is designed for the mass transportation of passengers and cargo. These planes are used by airlines to operate scheduled flights for large numbers of passengers.", image: "https://www.bjtonline.com/sites/bjtonline.com/files/styles/bjt30_article_body/public/10.-falcon10x_ext_h_hd.jpg?itok=YEEymEdK" },
      { name: "Cargo Plane", description: "A cargo plane, also known as a freighter or cargo aircraft, is a type of airplane specifically designed or converted to transport goods and cargo rather than passengers. These aircraft play a crucial role in global logistics, enabling the fast and efficient movement of goods across vast distances.", image: "https://www.alaskaaircargo.com/wp-content/uploads/2023/02/types-of-cargo-planes-alaska-air-forwarding.jpg" },
      { name: "Helicopter", description: "A helicopter, also known as a rotorcraft, is a type of aircraft that uses rotating blades or rotors to achieve lift, allowing it to hover, take off, and land vertically. Helicopters are versatile and capable of operating in environments where fixed-wing aircraft cannot, making them invaluable for a variety of applications, including transportation, search and rescue, medical evacuation, and aerial surveying.", image: "https://miro.medium.com/v2/resize:fit:1200/1*vn-dLTEZVQ5f0mRTJamCrg.jpeg" },
      { name: "Glider", description: "A glider plane, also known simply as a glider or sailplane, is a type of aircraft that is designed to fly without the use of an engine. Gliders rely on natural atmospheric phenomena such as thermal currents, ridge lift, and wave lift to stay aloft, allowing them to soar for extended periods. They are used for both recreational flying and competitive gliding sports.", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Schleicher_ASK_21_%28D-0721%29_02.jpg" },
      { name: "Seaplane", description: "A seaplane is a type of aircraft designed to take off from and land on water. Seaplanes are versatile and can operate in remote areas without conventional runways, making them ideal for transportation, recreation, and specialized missions in regions with abundant water bodies.", image: "https://www.bjtonline.com/sites/bjtonline.com/files/new-maldviesairways-planes-12_1600-900.jpg" },
    ]
  },
  {
    category: "Boats",
    types: [
      { name: "Sailboat", description: "A sailboat, also known as a sailing boat or yacht, is a vessel primarily propelled by sails using wind power. Sailboats have been used for centuries for transportation, exploration, and leisure. They range from small, single-person dinghies to large, luxurious yachts capable of long ocean voyages.", image: "https://cdn2.hubspot.net/hubfs/4307338/bigstock-Sailboat-in-the-sea-in-the-eve-206103793.jpg" },
      { name: "Yacht", description: "A yacht is a luxurious vessel often associated with leisure and recreation. It is a symbol of wealth and sophistication, offering comfort and opulence on the water. Yachts are used for pleasure cruising, racing, and entertaining guests. They can vary greatly in size, design, and amenities, ranging from small sailing yachts to massive motor yachts equipped with state-of-the-art facilities.", image: "https://www.moranyachts.com/wp-content/uploads/Luxury-yacht-Lurssen-Marguertie-for-charter-0402.jpg" },
      { name: "Motorboat", description: "A motorboat is a vessel propelled by an internal combustion engine or electric motor. Motorboats are used for recreational activities, transportation, fishing, and even as commercial workboats. They come in various sizes and designs, tailored to different purposes", image: "https://app.jeanneau.com/static/boat/cover/5df7abcd6507d.png" },
      { name: "Fishing Boat", description: "A fishing boat is a vessel designed and equipped primarily for catching fish in bodies of water such as oceans, rivers, and lakes. These boats come in various sizes and types, tailored to different fishing methods and environments, from small recreational crafts to large commercial trawlers.", image: "https://www.southernformula.com.au/wp-content/uploads/2023/11/fishing-boats-banner-1920x1000.jpeg" },
      { name: "Catamaran", description: "A catamaran is a multi-hulled vessel consisting of two parallel hulls of equal size. Catamarans are known for their stability, speed, and spaciousness. They are popular for both recreational and commercial use, offering unique advantages over monohull boats. Catamarans are used for cruising, sailing, fishing, and even ferrying passengers and cargo.", image: "https://admin.catamarans-lagoon.com/sites/default/files/2024-04/lagoon-43-img-mea-desktop-1920x829.jpg" },
      { name: "Houseboat", description: "A houseboat is a floating home that combines the features of a house and a boat. Designed for living on the water, houseboats offer the comforts of a traditional home while providing the unique experience of life afloat.", image: "https://tourismnewbrunswick.ca/sites/default/files/images/wiki/20220524_095723.jpg" },
    ]
  }
];
const VehicleTypeCard = ({ name, description, image }) => (
  <div className="card mb-3">
    <img src={image} className="card-img-top" alt={name} />
    

    <Accordion  defaultActiveKey="1">
      <Accordion.Item  eventKey="0">
        <Accordion.Header >{name}</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
      </Accordion>
  </div>
);

const VehicleCategory = ({ category, types }) => (
  <div className="container mt-5">
    <p className='text-center text-5xl text-blue-700'>{category}</p>
    <div className="row">
      {types.map((type, index) => (
        <div className="col-md-6" key={index}>
          <VehicleTypeCard name={type.name} description={type.description} image={type.image} />
        </div>
      ))}
    </div>
  </div>
);

const VehicleIntro = () => {
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) =>{
              if (entry.isIntersecting){
                entry.target.classList.add('show');
              } else {
                entry.target.classList.remove('show');
              }
            });
          });
          const x = document.querySelectorAll('.x');
          
          x.forEach((el) => observer.observe(el));
    })
  return (
    <div>
      {vehicles.map((vehicle, index) => (
        <p className='x'><VehicleCategory key={index} category={vehicle.category} types={vehicle.types} /></p>
      ))}
    </div>
  );
};

export default VehicleIntro;
