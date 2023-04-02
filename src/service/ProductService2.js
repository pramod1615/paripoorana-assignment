export const ProductService = {
    getProductsData() {
      return [
        {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5,
        },
  
        {
          id: '200',
          code: 'f230fh0g5',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 14,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5,
        },
  
       
        {
          id: '1015',
          code: 'vb34btbg5',
          name: 'Light Green T-Shirt',
          description: 'Product Description',
          image: 'light-green-t-shirt.jpg',
          price: 49,
          category: 'Clothing',
          quantity: 34,
          inventoryStatus: 'INSTOCK',
          rating: 4,
        },
        {
          id: '1016',
          code: 'k8l6j58jl',
          name: 'Lime Band',
          description: 'Product Description',
          image: 'lime-band.jpg',
          price: 79,
          category: 'Fitness',
          quantity: 12,
          inventoryStatus: 'INSTOCK',
          rating: 3,
        },
        
        {
          id: '1003',
          code: '244wgerg2',
          name: 'Blue T-Shirt',
          description: 'Product Description',
          image: 'blue-t-shirt.jpg',
          price: 29,
          category: 'Clothing',
          quantity: 25,
          inventoryStatus: 'INSTOCK',
          rating: 5,
          orders: [],
        },
        
        {
          id: '1014',
          code: 'waas1x2as',
          name: 'Headphones',
          description: 'Product Description',
          image: 'headphones.jpg',
          price: 175,
          category: 'Electronics',
          quantity: 8,
          inventoryStatus: 'LOWSTOCK',
          rating: 5,
          orders: [
            {
              id: '1014-0',
              productCode: 'waas1x2as',
              date: '2020-05-15',
              amount: 175,
              quantity: 1,
              customer: 'Lenna Paprocki',
              status: 'DELIVERED',
            },
            {
              id: '1014-1',
              productCode: 'waas1x2as',
              date: '2020-01-02',
              amount: 175,
              quantity: 1,
              customer: 'Donette Foller',
              status: 'CANCELLED',
            },
          ],
        },
       
        {
          id: '1029',
          code: 'gwuby345v',
          name: 'Yoga Set',
          description: 'Product Description',
          image: 'yoga-set.jpg',
          price: 20,
          category: 'Fitness',
          quantity: 25,
          inventoryStatus: 'INSTOCK',
          rating: 8,
          orders: [
            {
              id: '1029-0',
              productCode: 'gwuby345v',
              date: '2020-02-14',
              amount: 4,
              quantity: 80,
              customer: 'Maryann Royster',
              status: 'DELIVERED',
            },
          ],
        },
      ];
    },
  
    getProductsMini() {
      return Promise.resolve(this.getProductsData().slice(0, 5));
    },
  
    getProductsSmall() {
      return Promise.resolve(this.getProductsData().slice(0, 10));
    },
  
    getProducts() {
      return Promise.resolve(this.getProductsData());
    },
  
    getProductsWithOrdersSmall() {
      return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },
  
    getProductsWithOrders() {
      return Promise.resolve(this.getProductsWithOrdersData());
    },
  };
  