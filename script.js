// Product Data (Engineering & Electronics)
const products = [
    {
        id: 1,
        name: "Kit Arduino Uno R3",
        category: "kits",
        price: "$350 MXN",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Incluye placa compatible, cable USB y headers. Ideal para iniciar."
    },
    {
        id: 2,
        name: "Pack Resistencias 1/4W",
        category: "componentes",
        price: "$50 MXN",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "500 piezas de valores variados (10Ω - 1MΩ). Indispensable."
    },
    {
        id: 3,
        name: "Multímetro Digital",
        category: "herramientas",
        price: "$180 MXN",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Mide voltaje, corriente y resistencia. Incluye puntas de prueba."
    },
    {
        id: 4,
        name: "Protoboard 830 Puntos",
        category: "herramientas",
        price: "$85 MXN",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Placa de pruebas grande con buses de alimentación."
    },
    {
        id: 5,
        name: "Sensor Ultrasónico HC-SR04",
        category: "componentes",
        price: "$35 MXN",
        image: "https://images.unsplash.com/photo-1555664424-778a6902201b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Sensor de distancia para robots y sistemas de seguridad."
    },
    {
        id: 6,
        name: "Kit Cables Jumper",
        category: "componentes",
        price: "$60 MXN",
        image: "https://images.unsplash.com/photo-1563770095-39d468f95742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "120 cables Dupont (M-M, M-H, H-H) de 20cm."
    },
    {
        id: 7,
        name: "Módulo Relay 5V",
        category: "componentes",
        price: "$25 MXN",
        image: "https://images.unsplash.com/photo-1555664424-778a6902201b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Controla cargas de alta potencia con tu microcontrolador."
    },
    {
        id: 8,
        name: "Servomotor SG90",
        category: "componentes",
        price: "$45 MXN",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Micro servo motor para proyectos de robótica pequeña."
    },
    {
        id: 9,
        name: "Kit Inicio Electrónica",
        category: "kits",
        price: "$550 MXN",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Todo lo necesario para aprender: LEDs, botones, resistencias y más."
    }
];

// Scroll Animation Observer (Moved up to be available for renderProducts)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Render Products
const productGrid = document.getElementById('product-grid');

function renderProducts(category = 'all') {
    productGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll';
        
        productCard.innerHTML = `
            <div class="relative overflow-hidden group h-64">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div class="absolute top-4 right-4 bg-brand-accent text-brand-dark font-bold px-3 py-1 rounded-full shadow-md text-sm uppercase">
                    ${product.category}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-2xl font-bold mb-2 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">${product.name}</h3>
                <p class="text-gray-600 mb-4 text-sm line-clamp-2">${product.description}</p>
                <div class="flex justify-between items-end mb-6">
                    <div>
                        <span class="text-xs text-gray-500 block">Precio Estudiante</span>
                        <span class="text-3xl font-extrabold text-brand-primary">${product.price}</span>
                    </div>
                </div>
                <a href="https://wa.me/521234567890?text=Hola, me interesa el producto: ${product.name}" target="_blank" class="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105">
                    <i class="fab fa-whatsapp text-2xl"></i> 
                    <span>Cotizar</span>
                </a>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    // Re-attach observer to new elements
    const newElements = productGrid.querySelectorAll('.animate-on-scroll');
    newElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
    });
}

// Filter Buttons Logic
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Reset styles for all buttons
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-brand-primary', 'text-white');
            b.classList.add('bg-white', 'text-brand-dark', 'border', 'border-brand-primary');
        });
        
        // Set active style for clicked button
        e.target.classList.remove('bg-white', 'text-brand-dark', 'border', 'border-brand-primary');
        e.target.classList.add('bg-brand-primary', 'text-white');

        renderProducts(e.target.dataset.category);
    });
});

// Carousel Logic
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalSlides = 3; // Number of slides in HTML

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Auto-play carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 5000);

// Initial Render and Static Elements Observer
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(); // Initial render called here to ensure DOM is ready

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
    });
});