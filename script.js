// 简单的表单提交功能（模拟）
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`感谢你的留言，${name}！我们会通过邮件 ${email} 联系你。\n留言内容：${message}`);
    
    // 清空表单
    document.getElementById('contact-form').reset();
});
