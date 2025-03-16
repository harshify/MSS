// Add category to the product type if it exists
export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  features: string[];
  category?: string; // Make category optional
  featured?: boolean; // Add featured flag
}

export const productsData: Product[] = [
    {
      id: '1',
      name: 'Industrial Pump',
      description:
        'High-performance industrial pump for heavy-duty applications.',
      category: 'Pumps & Fluid Handling',
      featured: true, // Mark as featured
      images: [
        'https://source.unsplash.com/800x600/?industrial',
        'https://source.unsplash.com/800x600/?pump',
        'https://source.unsplash.com/800x600/?factory',
        'https://source.unsplash.com/800x600/?machinery',
      ],
      features: [
        'Heavy-duty construction',
        'Energy-efficient operation',
        'Advanced sealing system',
      ],
    },
    {
      id: '2',
      name: 'Electric Motor',
      description: 'Energy-efficient electric motors for industrial use.',
      category: 'Motors & Drives',
      featured: true, // Mark as featured
      images: [
        'https://source.unsplash.com/800x600/?motor',
        'https://source.unsplash.com/800x600/?electric',
        'https://source.unsplash.com/800x600/?engineering',
        'https://source.unsplash.com/800x600/?machine',
      ],
      features: [
        'High efficiency rating',
        'Robust construction',
        'Low noise operation',
      ],
    },
    {
      id: '3',
      name: 'Control Panel',
      description:
        'Advanced control panels for seamless automation and integration.',
      category: 'Automation & Control',
      featured: true, // Mark as featured
      images: [
        'https://i.ibb.co/qmw7sMz/pexels-photo-1813947.jpg',
        'https://i.ibb.co/M20PG6P/pexels-photo-2036646.jpg',
        'https://i.ibb.co/Y3pRTDq/pexels-photo-818992.webp',
        'https://i.ibb.co/sRmW4RQ/pexels-photo-1192609.jpg',
      ],
      features: [
        'Touch screen interface',
        'Remote monitoring',
        'Customizable controls',
      ],
    },

    {
        id: '4',
        name: 'Panel',
        description:
          'Advanced control panels for seamless automation and integration.',
        category: 'Automation & Control',
        images: [
          'https://source.unsplash.com/800x600/?controlpanel',
          'https://source.unsplash.com/800x600/?electronics',
          'https://source.unsplash.com/800x600/?technology',
          'https://source.unsplash.com/800x600/?wiring',
        ],
        features: [
          'Touch screen interface',
          'Remote monitoring',
          'Customizable controls',
        ],
      },

      {
        id: '5',
        name: 'Cpl',
        description:
          'Advanced control panels for seamless automation and integration.',
        category: 'Automation & Control',
        images: [
          'https://source.unsplash.com/800x600/?controlpanel',
          'https://source.unsplash.com/800x600/?electronics',
          'https://source.unsplash.com/800x600/?technology',
          'https://source.unsplash.com/800x600/?wiring',
        ],
        features: [
          'Touch screen interface',
          'Remote monitoring',
          'Customizable controls',
        ],
      },

      {
        id: '6',
        name: 'CPanel',
        description:
          'Advanced control panels for seamless automation and integration.',
        category: 'Automation & Control',
        images: [
          'https://source.unsplash.com/800x600/?controlpanel',
          'https://source.unsplash.com/800x600/?electronics',
          'https://source.unsplash.com/800x600/?technology',
          'https://source.unsplash.com/800x600/?wiring',
        ],
        features: [
          'Touch screen interface',
          'Remote monitoring',
          'Customizable controls',
        ],
      },

      {
        id: '7',
        name: 'Bamboo Panel',
        description:
          'Advanced control panels for seamless automation and integration.',
        category: 'Specialty Products',
        featured: true, // Mark as featured
        images: [
          'https://source.unsplash.com/800x600/?controlpanel',
          'https://source.unsplash.com/800x600/?electronics',
          'https://source.unsplash.com/800x600/?technology',
          'https://source.unsplash.com/800x600/?wiring',
        ],
        features: [
          'Touch screen interface',
          'Remote monitoring',
          'Customizable controls',
        ],
      },
  ];
  
  // Utility function to get a product by ID
  export const getProductById = (id: string) =>
    productsData.find((product) => product.id === id);
  
  // Function to get all products formatted for ProductsPage
  export const getProductsForListing = () =>
    productsData.map(({ id, name, description, images }) => ({
      id,
      name,
      description,
      image: images[0], // Only the first image for listing
    }));
  