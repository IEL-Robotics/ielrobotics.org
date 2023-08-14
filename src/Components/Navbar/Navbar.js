export const toggleMenu = () => {
    var popup = document.getElementById("menu");
    popup?.classList.toggle("active");
};

export const closeAfterUsed = () => {
    var popup = document.getElementById("menu");
    if(popup?.classList.contains("active")){
        popup?.classList.toggle("active");
    }
}
