export interface GameType {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: string;
  image: string;
  icon: string;
  tags: string[];
  url: string;
}

export const gameData: GameType[] = [
  {
    id: "pancito",
    title: "Pancito Merge",
    description: "A delightful merge puzzle game where you combine cute bread characters to create new varieties. Relaxing gameplay perfect for unwinding.",
    price: "Free",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "🧩",
    tags: ["Puzzle", "Merge", "Casual"],
    url: "https://html-classic.itch.zone/html/13071975/index.html"
  },
  {
    id: "cubes",
    title: "Cubes 2048.io",
    description: "Merge cubes with the same numbers to reach 2048 and beyond in this addictive puzzler. Strategic thinking in a colorful 3D environment.",
    price: "Free",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "🎮",
    tags: ["Puzzle", "Strategy", "Numbers"],
    url: "https://www.crazygames.com/embed/cubes-2048-io"
  },
  {
    id: "doodle",
    title: "Doodle Road",
    description: "Draw your own path through challenges in this creative driving game. Express yourself while solving puzzles in a hand-drawn world.",
    price: "Free",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "✏️",
    tags: ["Creative", "Driving", "Drawing"],
    url: "https://www.crazygames.com/embed/doodle-road"
  },
  {
    id: "sprunki",
    title: "Sprunki",
    description: "Guide a springy character through beautiful platforming levels. The rhythmic bouncing creates a meditative experience as you overcome obstacles.",
    price: "Free",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "🏃",
    tags: ["Platformer", "Adventure", "Rhythm"],
    url: "https://html-classic.itch.zone/html/11407110/index.html?v=1730332583"
  },
  {
    id: "duckling",
    title: "Duckling",
    description: "Take care of adorable ducklings in this heartwarming nurturing game. Watch them grow as you provide care in a peaceful pond setting.",
    price: "Free",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "🐥",
    tags: ["Nurturing", "Relaxation", "Cute"],
    url: "https://html-classic.itch.zone/html/1662039/index.html"
  },
  {
    id: "store",
    title: "Store Manager",
    description: "Run your own supermarket in this calming simulation. Organize products, help customers, and grow your business at your own pace.",
    price: "Free",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "🏢",
    tags: ["Simulation", "Management", "Casual"],
    url: "https://www.crazygames.com/embed/supermarket-simulator-cashier-game"
  }
]; 