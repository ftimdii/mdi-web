function showMessage() {
    const messageBox = document.getElementById('message');
    messageBox.innerHTML = '<p style="font-size: 18px; text-align: center; color: #333;">For viewing our portfolio, please contact us through the form below.</p>';
    messageBox.style.display = 'block';
    
    // بعد از 7 ثانیه پیام رو مخفی کن
    setTimeout(function() {
        messageBox.style.display = 'none';
    }, 7000);
}
