let thobeCount = 0;
let products = [
    { id: 101, name: "قماش سميراميس ياباني", price: 450, img: "https://i.ibb.co/C3YFp0k7/688339f4-1296-48c0-bc66-3be039832675.png", type: "fabric" },
    { id: 102, name: "ثوب ملكي مطرز", price: 300, img: "https://i.ibb.co/C3YFp0k7/688339f4-1296-48c0-bc66-3be039832675.png", type: "thobe" }
];

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0,0);
}

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
        <div class="glass rounded-3xl overflow-hidden p-6" onclick="selectProduct('${p.name}', '${p.type}')">
            <img src="${p.img}" class="w-full h-64 object-cover">
            <h3 class="font-bold text-xl mt-4">${p.name}</h3>
            <span class="gold-text">${p.price} ريال</span>
        </div>
    `).join('');
}

// باقي الدوال الخاصة بالتفصيل والطباعة توضع هنا...
window.onload = () => {
    renderProducts();
};
