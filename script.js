const enableDarkMode =()=> {
    const darkmodeSwitch = document.querySelector ('#darkmode-switch')
    darkmodeSwitch.chacked = true
    localStorage.setItem('themeMode' ,'dark')
    document.documentElement.classList.add('dark')
}
const disableDarkMode = () => {
    const isDarkMode = localStorage.getItem('themeMode')

    if (isDarkMode == null){
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    } else if (isDarkMode === 'dark'){
        enableDarkMode()
    } else if (isDarkMode === 'light' ){
        disableDarkMode

    }
    }


const difaultThemeDarkMode = () => {
    const isDarkMode = localStorage.getItem('themeMode')

    if (isDarkMode == null){
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    } else if (isDarkMode === 'dark'){
        enableDarkMode()
    } else if (isDarkMode === 'light' ){
        disableDarkMode
    }
}
const darkModeSwitch = () => {
    const darkmodeSwitch = document.querySelector('#darkmode-switch')

    darkmodeSwitch.addEventListener('change', ()=> {
        if(darkmodeSwitch.checked){
            enableDarkMode()
        } else{
            disableDarkMode()
        }
        })

}
const activateAccordion = () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(faqItem => {
        const content = faqItem.nextElementSibling;

        faqItem.addEventListener("click", () => {
            const isActive = faqItem.classList.contains("active");

            // بستن تمام آیتم‌ها
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
                item.nextElementSibling.classList.remove("active");
            });

            // باز کردن آیتم کلیک‌شده
            if (!isActive) {
                faqItem.classList.add("active");
                content.classList.add("active");
            }
        });
    });
};

// فراخوانی تابع هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", fetchAndRenderFAQs);

difaultThemeDarkMode()
darkModeSwitch()
accordionInit()