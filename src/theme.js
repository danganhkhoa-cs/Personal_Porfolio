const toggleThemeButton = document.getElementById("toggle-theme");

// Xác định trạng thái dark hiện tại
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const isLight = localStorage.theme === "light" || prefersLight;

// Đặt class dark lên html và đồng bộ checkbox
document.documentElement.classList.toggle("light", isLight);
toggleThemeButton.checked = isLight;

// Lắng nghe khi checkbox thay đổi
toggleThemeButton.addEventListener("change", () => {
	document.documentElement.classList.toggle("light", toggleThemeButton.checked);
	localStorage.theme = toggleThemeButton.checked ? "light" : "dark";
});
