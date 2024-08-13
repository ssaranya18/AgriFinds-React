import React, { useState } from 'react';
import './CropsDetailsPage.css';

const CropsDetailsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [seasonFilter, setSeasonFilter] = useState('');
  const [weatherFilter, setWeatherFilter] = useState('');
  const [soilFilter, setSoilFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  const [crops] = useState([
    {
        name: 'Tomato',
        type: 'Vegetable',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Phosphorus, Potassium',
        soil: 'Loamy',
        duration: '60-80 days',
        img: 'https://t4.ftcdn.net/jpg/03/54/24/17/360_F_354241708_IrEvwS6AeMei4ZZJHTSOC1xqtl79rS10.jpg',
      },
      {
        name: 'Apple',
        type: 'Fruit',
        season: 'Fall',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Loamy',
        duration: '150-180 days',
        img: 'https://t4.ftcdn.net/jpg/06/28/84/85/360_F_628848510_BSZbLFVwRkeRfGK9VxqE4lrYyic6kPMd.jpg',
      },
      {
        name: 'Corn',
        type: 'Vegetable',
        season: 'Spring',
        weather: 'Warm',
        fertilizer: 'Nitrogen',
        soil: 'Sandy',
        duration: '90-120 days',
        img: 'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-yellow-corn-plant-with-dark-background-image_2518503.jpg',
      },
      {
        name: 'Wheat',
        type: 'Grain',
        season: 'Winter',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Clay',
        duration: '120-150 days',
        img: 'https://img.freepik.com/premium-photo/wheat-background-hd-wallpaper-photographic-image_993236-3015.jpg',
      },
      {
        name: 'Strawberry',
        type: 'Fruit',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Sandy',
        duration: '30-40 days',
        img: 'https://static.vecteezy.com/system/resources/previews/027/006/834/large_2x/ripe-red-strawberries-on-a-branch-in-the-garden-at-sunset-a-branch-with-natural-strawberries-on-a-blurred-background-of-a-strawberry-field-at-golden-hour-ai-generated-free-photo.jpg',
      },
      {
        name: 'Carrot',
        type: 'Vegetable',
        season: 'Winter',
        weather: 'Cool',
        fertilizer: 'Potassium',
        soil: 'Loamy',
        duration: '70-80 days',
        img: 'https://t4.ftcdn.net/jpg/06/64/12/05/360_F_664120525_5QIjKKIrWwQkyauaDpxC9mSoitMOIQmR.jpg',
      },
      {
        name: 'Potato',
        type: 'Vegetable',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Phosphorus, Potassium',
        soil: 'Sandy',
        duration: '90-120 days',
        img: 'https://static.vecteezy.com/system/resources/previews/036/491/729/non_2x/ai-generated-summer-harvest-potatoes-freshly-picked-arranged-in-a-farmers-field-for-social-media-post-size-free-photo.jpg',
      },
      {
        name: 'Peach',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Loamy',
        duration: '150-180 days',
        img: 'https://png.pngtree.com/thumb_back/fh260/background/20230901/pngtree-peaches-hanging-from-an-orchard-tree-image_13104237.jpg',
      },
      
      {
        name: 'Blueberry',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Cool',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Acidic',
        duration: '70-100 days',
        img: 'https://h2.commercev3.net/cdn.gurneys.com/images/800/08491A.jpg',
      },
      {
        name: 'Cucumber',
        type: 'Vegetable',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Loamy',
        duration: '50-70 days',
        img: 'https://www.shutterstock.com/image-photo/organic-cucumbers-cultivation-closeup-fresh-600nw-2177517539.jpg',
      },
      {
        name: 'Lettuce',
        type: 'Vegetable',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Nitrogen',
        soil: 'Loamy',
        duration: '30-50 days',
        img: 'https://c1.wallpaperflare.com/preview/768/968/969/lettuce-green-vegetables-greens.jpg',
      },
      {
        name: 'Pumpkin',
        type: 'Vegetable',
        season: 'Fall',
        weather: 'Warm',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Sandy',
        duration: '90-120 days',
        img: 'https://media.istockphoto.com/id/610878486/photo/big-orange-pumpkins.jpg?s=612x612&w=0&k=20&c=x_K8RuywBTixPGBF6p0dJc8AedH3CNJFlMBAtQH1Vm0=',
      },
      {
        name: 'Grapes',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Potassium, Calcium',
        soil: 'Loamy',
        duration: '100-150 days',
        img: 'https://www.apnikheti.com/upload/crops/1850idea99grapes.jpg',
      },
      {
        name: 'Onion',
        type: 'Vegetable',
        season: 'Fall',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Sandy',
        duration: '90-120 days',
        img: 'https://img.freepik.com/premium-photo/farmer-holding-fresh-red-onions-shallot-field-selective-focus_656518-1351.jpg',
      },
      {
        name: 'Radish',
        type: 'Vegetable',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Nitrogen',
        soil: 'Loamy',
        duration: '30-40 days',
        img: 'https://www.apnikheti.com/upload/crops/4213idea99Daikon_Radish.jpg',
      },
      {
        name: 'Beetroot',
        type: 'Vegetable',
        season: 'Fall',
        weather: 'Cool',
        fertilizer: 'Potassium, Phosphorus',
        soil: 'Loamy',
        duration: '50-70 days',
        img: 'https://media.istockphoto.com/id/162682961/photo/beetroot.jpg?s=612x612&w=0&k=20&c=AzHmJ6fPa44BN7y_rji9nziIXMuOrPeU502KpsPv6Ks=',
      },
      {
        name: 'Squash',
        type: 'Vegetable',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Sandy',
        duration: '60-90 days',
        img: 'https://media.istockphoto.com/id/1182655835/photo/hand-harvest-butternut-squash-in-the-greenhouse-plantation.jpg?s=612x612&w=0&k=20&c=MTqWSJUY1TjHNeKc9v3AwSOekbOlhATWBTFzukbiETI=',
      },
      {
        name: 'Pineapple',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Potassium, Calcium',
        soil: 'Sandy',
        duration: '18-24 months',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/039/308/509/small_2x/ai-generated-harvest-of-fresh-pineapples-growing-in-the-garden-photo.jpg',
      },
      {
        name: 'Chili Pepper',
        type: 'Vegetable',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Potassium',
        soil: 'Loamy',
        duration: '70-90 days',
        img: 'https://img.freepik.com/premium-photo/green-chili-pepper-plant-field-agriculture-garden_1627-68.jpg',
      },
      {
        name: 'Cabbage',
        type: 'Vegetable',
        season: 'Fall',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Loamy',
        duration: '70-100 days',
        img: 'https://c0.wallpaperflare.com/preview/596/201/219/kohl-herb-white-cabbage-cultivation.jpg',
      },
      {
        name: 'Cauliflower',
        type: 'Vegetable',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Calcium',
        soil: 'Loamy',
        duration: '50-85 days',
        img: 'https://t4.ftcdn.net/jpg/06/34/91/63/360_F_634916303_3Qtd3ZmdpAWus0BRZ5iZkFnkk4WhymfP.jpg',
      },
      {
        name: 'Asparagus',
        type: 'Vegetable',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Loamy',
        duration: '2-3 years',
        img: 'https://t4.ftcdn.net/jpg/06/83/98/49/360_F_683984947_RZDslKJHM2cWD1HVm9NQi6dQnrZj0PxR.jpg',
      },
      {
        name: 'Kiwi',
        type: 'Fruit',
        season: 'Fall',
        weather: 'Cool',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Loamy',
        duration: '150-180 days',
        img: 'https://c4.wallpaperflare.com/wallpaper/96/26/395/fruits-kiwi-fruit-wallpaper-thumb.jpg',
      },
      {
        name: 'Avocado',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Potassium',
        soil: 'Loamy',
        duration: '12-18 months',
        img: 'https://www.agrifarming.in/wp-content/uploads/2020/09/hass-avocado-3594376_1920.jpg',
      },
      {
        name: 'Mango',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Loamy',
        duration: '150-180 days',
        img: 'https://media.istockphoto.com/id/1435602229/photo/close-up-of-red-mangoes.jpg?s=612x612&w=0&k=20&c=a2uO7Ly-irGjtfqZC0ZTt9ps_Sh8S3a6ulf-TMRebao=',
      },
      {
        name: 'Raspberry',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Cool',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Loamy',
        duration: '60-90 days',
        img: 'https://t3.ftcdn.net/jpg/02/12/37/58/360_F_212375823_kBTiRd0DAHr81I2BDFKGEv7cBXJgcdUC.jpg',
      },
      {
        name: 'Fig',
        type: 'Fruit',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Phosphorus, Potassium',
        soil: 'Loamy',
        duration: '70-100 days',
        img: 'https://www.apnikheti.com/upload/crops/1566idea99figs-fig-tree.jpg',
      },
      {
        name: 'Ginger',
        type: 'Root',
        season: 'Year-round',
        weather: 'Warm',
        fertilizer: 'Nitrogen, Potassium',
        soil: 'Loamy',
        duration: '8-10 months',
        img: 'https://png.pngtree.com/background/20230607/original/pngtree-crops-of-root-vegetables-growing-out-of-soil-picture-image_2903189.jpg',
      },
      {
        name: 'Garlic',
        type: 'Bulb',
        season: 'Fall',
        weather: 'Cool',
        fertilizer: 'Nitrogen, Phosphorus',
        soil: 'Loamy',
        duration: '180-210 days',
        img: 'https://t4.ftcdn.net/jpg/03/64/05/63/360_F_364056397_c1wiuR4RRXuu8WFNN3igdbwon6yz2NqU.jpg',
      },
      {
        name: 'Chives',
        type: 'Herb',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Nitrogen',
        soil: 'Loamy',
        duration: '60-90 days',
        img: 'https://shardaassociates.in/wp-content/uploads/2023/01/Project-report-for-chives-farming.jpg',
      },
      {
        name: 'Rosemary',
        type: 'Herb',
        season: 'Year-round',
        weather: 'Warm',
        fertilizer: 'Phosphorus',
        soil: 'Sandy',
        duration: 'Year-round',
        img: 'https://www.shutterstock.com/image-photo/fresh-rosemary-close-photo-600nw-2175058313.jpg',
      },
      {
        name: 'Basil',
        type: 'Herb',
        season: 'Summer',
        weather: 'Warm',
        fertilizer: 'Nitrogen',
        soil: 'Loamy',
        duration: '60-90 days',
        img: 'https://i0.wp.com/farmerstrend.co.ke/wp-content/uploads/2023/07/Basil-Farming-In-Kenya-A-Comprehensive-Planting-Guide.jpg?fit=712%2C493&ssl=1',
      },
      {
        name: 'Dill',
        type: 'Herb',
        season: 'Spring',
        weather: 'Cool',
        fertilizer: 'Nitrogen',
        soil: 'Loamy',
        duration: '40-60 days',
        img: 'https://media.istockphoto.com/id/1442293480/photo/female-hands-harvest-dill-green-beds-for-salad-in-the-backlight.jpg?s=612x612&w=0&k=20&c=A6v-BBOzj4qjtiu9Hk00PKd1sfHWNx5urvsLsPzZkdc=',
      },
      {
        name: 'Oregano',
        type: 'Herb',
        season: 'Year-round',
        weather: 'Warm',
        fertilizer: 'Phosphorus',
        soil: 'Sandy',
        duration: 'Year-round',
        img: 'https://img.freepik.com/premium-photo/photo-organic-oregano-farm-with-fragrant-leaves_1055425-15291.jpg',
      },
      {
        name: 'Thyme',
        type: 'Herb',
        season: 'Year-round',
        weather: 'Warm',
        fertilizer: 'Potassium',
        soil: 'Sandy',
        duration: 'Year-round',
        img: 'https://www.asiafarming.com/wp-content/uploads/2018/08/Growing-Conditions-For-Thyme-Herb..jpg',
      },
      {
        name: 'Mint',
        type: 'Herb',
        season: 'Year-round',
        weather: 'Cool',
        fertilizer: 'Nitrogen',
        soil: 'Loamy',
        duration: 'Year-round',
        img: 'https://www.apnikheti.com/upload/crops/6972idea99Mint-1.jpg',
      },
  ]);

  

  const filteredCrops = crops.filter(crop => {
    window.scroll(0,0);
    return (
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (typeFilter === '' || crop.type === typeFilter) &&
      (seasonFilter === '' || crop.season === seasonFilter) &&
      (weatherFilter === '' || crop.weather === weatherFilter) &&
      (soilFilter === '' || crop.soil === soilFilter) &&
      (durationFilter === '' || crop.duration === durationFilter)
    );
  });

  return (
    <div className="crops-details-page1">
      <div className="filters1">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar1"
        />

        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="filter-dropdown1">
          <option value="">All Types</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Grain">Grain</option>
          {/* Add more options as needed */}
        </select>

        <select value={seasonFilter} onChange={(e) => setSeasonFilter(e.target.value)} className="filter-dropdown1">
          <option value="">All Seasons</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>

        <select value={weatherFilter} onChange={(e) => setWeatherFilter(e.target.value)} className="filter-dropdown1">
          <option value="">All Weather Conditions</option>
          <option value="Warm">Warm</option>
          <option value="Cool">Cool</option>
        </select>

        <select value={soilFilter} onChange={(e) => setSoilFilter(e.target.value)} className="filter-dropdown1">
          <option value="">All Soil Types</option>
          <option value="Loamy">Loamy</option>
          <option value="Sandy">Sandy</option>
          <option value="Clay">Clay</option>
          {/* Add more options as needed */}
        </select>

        <select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)} className="filter-dropdown1">
          <option value="">All Durations</option>
          <option value="30-40 days">30-40 days</option>
          <option value="60-80 days">60-80 days</option>
          <option value="90-120 days">90-120 days</option>
          <option value="120-150 days">120-150 days</option>
          <option value="150-180 days">150-180 days</option>
        </select>
      </div>

      <div className="crops-grid1">
        {filteredCrops.map((crop, index) => (
          <div key={index} className="crop-card1">
            <img src={crop.img} alt={crop.name} className="crop-image1" />
            <div className="crop-card-content1">
              <h3>{crop.name}</h3>
              <p><strong>Type:</strong> {crop.type}</p>
              <p><strong>Season:</strong> {crop.season}</p>
              <p><strong>Weather:</strong> {crop.weather}</p>
              <p><strong>Soil:</strong> {crop.soil}</p>
              <p><strong>Duration:</strong> {crop.duration}</p>
              <p><strong>Fertilizer:</strong> {crop.fertilizer}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CropsDetailsPage;
