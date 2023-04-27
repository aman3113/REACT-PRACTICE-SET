export const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                id: 1,
                name: "Apple iPhone 13 Pro Max",
                description:
                  "6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system. ",
                price: 1099,
                quantity: 10,
                category: "Smartphones",
                brand: "Apple",
              },
              {
                id: 2,
                name: "Samsung Galaxy S21 Ultra",
                description:
                  "6.8-inch Dynamic AMOLED 2X display. Gorilla Glass Victus front and back. Exynos 2100 or Snapdragon 888 chipset. 5G capable. Quad camera system.",
                price: 1199,
                quantity: 8,
                category: "Smartphones",
                brand: "Samsung",
              },
              {
                id: 3,
                name: "Apple MacBook Air",
                description:
                  "13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core GPU. Up to 18 hours of battery life. ",
                price: 999,
                quantity: 5,
                category: "Laptops",
                brand: "Apple",
              },
              // and so on...
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

export const fakeFetch6 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/todos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            todos: [
              {
                id: 1,
                title: "Complete practice set 7",
                description: "Practice set 7 of React",
                isCompleted: true,
              },
              {
                id: 2,
                title: "Attend revision session",
                description: "Revision session of React",
                isCompleted: false,
              },
              {
                id: 3,
                title: "Watch recording",
                description: "Live session recording of React",
                isCompleted: true,
              },
              {
                id: 4,
                title: "Attend DSH",
                description: "Doubt Solving Hours of React",
                isCompleted: false,
              },
              {
                id: 5,
                title: "Complete practice set 8",
                description: "Practice set 8 of React",
                isCompleted: false,
              },
              {
                id: 6,
                title: "Watch a movie",
                description: "Watch an old movie from my watchlist",
                isCompleted: true,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Todos not found.",
        });
      }
    }, 2000);
  });
};
