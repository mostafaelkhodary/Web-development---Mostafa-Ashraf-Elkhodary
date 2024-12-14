// عند الضغط على زر الإرسال
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`مرحبًا! تم تسجيل بياناتك بنجاح:\nالإيميل: ${email}`);
    } else {
        alert("يرجى إدخال البيانات المطلوبة.");
    }
});
