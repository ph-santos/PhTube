const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

const changeSidebar = () => {
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}

export default changeSidebar;