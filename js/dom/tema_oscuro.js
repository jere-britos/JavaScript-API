const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark){
const $themeBtn = d.querySelector(btn),
//lista del dom que tenga el data dark
 $selectors = d.querySelectorAll("[data-dark]");

// console.log($selectors);

 let sun = "☀️",
 	moon = "🌙";

 const lightMode = ()=>{
 	$selectors.forEach(el=>el.classList.remove(classDark));
 	$themeBtn.textContent = moon;
 	ls.setItem("theme","light");
 }

 const darkMode = ()=>{
 	 $selectors.forEach(el=>el.classList.add(classDark));
 	 $themeBtn.textContent = sun;
 	 ls.setItem("theme","dark");
 }

 d.addEventListener("click",e=>{
 	if (e.target.matches(btn)) {
 	 // console.log($themeBtn.textContent);
 	 if ($themeBtn.textContent === moon) {
 	 	darkMode();
 	 }else{
 	 	lightMode();
 	 }
 	}
 });

 d.addEventListener("DOMContentLoaded", e=>{
 	// console.log(ls.getItem("theme"));
 	if (ls.getItem("theme") === null) ls.setItem("theme","light");
 	if (ls.getItem("theme") === "light") lightMode();
 	if (ls.getItem("theme") === "dark") darkMode();
 });
}