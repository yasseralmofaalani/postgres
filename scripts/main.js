// كود JavaScript للتفاعل مع الصفحة

document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثيرات تفاعلية
    initLectureLinks();
    initCodeBlocks();
    initNavigation();
});

// تحسين روابط المحاضرات
function initLectureLinks() {
    const links = document.querySelectorAll('.lecture-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// نسخ الأكواد البرمجية
function initCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        // إضافة زر النسخ
        const copyButton = document.createElement('button');
        copyButton.textContent = 'نسخ الكود';
        copyButton.className = 'copy-button';
        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            background: #475569;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: background 0.3s;
        `;
        
        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.background = '#64748b';
        });
        
        copyButton.addEventListener('mouseleave', () => {
            copyButton.style.background = '#475569';
        });
        
        copyButton.addEventListener('click', () => {
            const code = block.querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.textContent = 'تم النسخ!';
                setTimeout(() => {
                    copyButton.textContent = 'نسخ الكود';
                }, 2000);
            });
        });
        
        // جعل الكتلة نسبية لإضافة الزر
        block.style.position = 'relative';
        block.appendChild(copyButton);
    });
}

// تحسين التنقل
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // إضافة تأثير انتقالي
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// إضافة تأثيرات scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }
    }
});

