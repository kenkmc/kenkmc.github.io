/**
 * 這是整個網站的中央資料庫。
 * 只要在這裡新增課程，首頁和所有頁面的「隨機瀏覽」功能都會自動更新。
 */

const siteConfig = {
    siteName: "ICT 學習資源網",
    domain: "yourschool.edu.hk", // 用於 Google 搜尋
};

const courseData = [
    {
        id: "core_a",
        category: "必修部分 A - 資訊處理",
        items: [
            { id: "cha.1", title: "1. 資訊處理簡介", link: "cha.1.html", desc: "數據與資訊、IPO、資訊系統、文本編碼" },
            { id: "cha.2", title: "2. 數據組織與控制", link: "cha.2.html", desc: "二進制、十六進制" },
            { id: "cha.3", title: "3. 多媒體元素", link: "cha.3.html", desc: "圖像與聲音檔案格式" },
            { id: "cha.4", title: "4. 辦公室自動化軟件", link: "cha.4.html", desc: "試算表與數據庫基礎" }
        ]
    },
    {
        id: "core_b",
        category: "必修部分 B - 電腦系統基礎",
        items: [
            { id: "chb.1", title: "5. 電腦系統硬件", link: "chb.1.html", desc: "CPU、記憶體與周邊裝置" },
            { id: "chb.2", title: "6. 電腦軟件", link: "chb.2.html", desc: "作業系統與應用程式" }
        ]
    },
    // 你可以繼續依照此格式新增 Core C, D, Elective...
];

/**
 * 功能：隨機跳轉到任一課題
 * 用法：在 HTML 按鈕 onclick 事件呼叫 randomStudy()
 */
function randomStudy() {
    // 1. 扁平化所有課程連結
    let allLinks = [];
    courseData.forEach(section => {
        section.items.forEach(item => {
            // 排除當前頁面，避免隨機到自己
            const currentPage = window.location.pathname.split("/").pop();
            if (item.link !== currentPage) {
                allLinks.push(item.link);
            }
        });
    });

    // 2. 隨機選取
    if (allLinks.length > 0) {
        const randomIndex = Math.floor(Math.random() * allLinks.length);
        const target = allLinks[randomIndex];
        
        // 顯示載入動畫 (可選)
        alert(`命運之輪轉動中... 即將前往：${target}`);
        window.location.href = target;
    } else {
        alert("目前只有這一頁，無法跳轉！");
    }
}
