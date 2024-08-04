import React from 'react';

const products = [
  {
    id: 1,
    name: 'thing for negotiation',
    description: 'item which is important for really serious negotiation',
    price: '$3',
    image: '/podper.jpg',
  },
  {
    id: 2,
    name: 'sapka',
    description: 'sapka for head',
    price: '$2',
    image: '/sapka.jpg',
  },
  {
    id: 3,
    name: 'FAKE 100$',
    description: 'Fake money',
    price: '$101',
    image: '/fakemoney.jpg',
  },{
    id: 4,
    name: 'thing for negotiation',
    description: 'item which is important for really serious negotiation',
    price: '$3',
    image: '/podper.jpg',
  },
  {
    id: 5,
    name: 'sapka',
    description: 'sapka for head',
    price: '$2',
    image: '/sapka.jpg',
  },
  {
    id: 6,
    name: 'FAKE 100$',
    description: 'Fake money',
    price: '$101',
    image: '/fakemoney.jpg',
  },{
    id: 7,
    name: 'thing for negotiation',
    description: 'item which is important for really serious negotiation',
    price: '$3',
    image: '/podper.jpg',
  },
  {
    id: 8,
    name: 'sapka',
    description: 'sapka for head',
    price: '$2',
    image: '/sapka.jpg',
  },
  {
    id: 9,
    name: 'FAKE 100$',
    description: 'Fake money',
    price: '$101',
    image: '/fakemoney.jpg',
  },{
    id: 10,
    name: 'thing for negotiation',
    description: 'item which is important for really serious negotiation',
    price: '$3',
    image: '/podper.jpg',
  },
  {
    id: 11,
    name: 'sapka',
    description: 'sapka for head',
    price: '$2',
    image: '/sapka.jpg',
  },
  {
    id: 12,
    name: 'FAKE 100$',
    description: 'Fake money',
    price: '$101',
    image: '/fakemoney.jpg',
  }
];
const Catalog = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md hover:bg-gray-300 rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-900 font-bold">{product.price}</p> 
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Catalog;