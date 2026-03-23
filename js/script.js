
document.addEventListener('DOMContentLoaded', function() {

    AOS.init({ 
        once: true, 
        duration: 1000 
    });
    console.log("O2 Agency Script Loaded!");
});


function openModal() {
    const modal = document.getElementById('quote-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex'); 
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    const modal = document.getElementById('quote-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; 
}


window.addEventListener('click', (e) => { if (e.target.id === 'quote-modal') closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });


async function handleQuoteSubmit() {
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyGggedvf_rY_kthcdmKPFJAtC2CzE4a1y413JA0GsRQnQRb2LAOi4dq9H5q0O4-WsAQQ/exec';
    
    const modal = document.getElementById('quote-modal');
    const nameInput = modal.querySelector('input[placeholder="Họ và tên"]');
    const phoneInput = modal.querySelector('input[placeholder="Số điện thoại"]');
    const selectReq = modal.querySelector('select');
    const submitBtn = modal.querySelector('button[onclick="handleQuoteSubmit()"]');

    if (!nameInput.value.trim() || !phoneInput.value.trim()) {
        alert("Vui lòng điền đầy đủ Họ tên và Số điện thoại!");
        return;
    }

    
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "ĐANG GỬI...";
    submitBtn.disabled = true;

    const formData = {
        name: nameInput.value,
        phone: phoneInput.value,
        requirement: selectReq.value || "Chưa chọn nhu cầu"
    };

    try {
      
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        alert(`Cảm ơn ${formData.name}! O2 Agency đã nhận được yêu cầu.`);
        nameInput.value = "";
        phoneInput.value = "";
        closeModal();

    } catch (error) {
        console.error('Lỗi:', error);
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
    } finally {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
}